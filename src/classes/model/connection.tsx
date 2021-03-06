import Connector from './connector';
import Multiplicity from './multiplicity';
import Point from './point'
import ID from './id';
import Observer from '../../interfaces/observer';
import ObserverSubject from './subject';
import DiagramCreator from '../../helper/diagramCreator';
import Class from './class';
import Clonable from '../../interfaces/cloneable';

export default class Connection extends ObserverSubject<string> implements Clonable, Observer<string>{
    public connector: Connector;
    public multiplicity_left: Multiplicity;
    public multiplicity_right: Multiplicity;
    public destinationElement: string;
    public sourceElement: string;
    public stereoType: string;
    public readonly type = 'Connection';
    public points: Point[] = [];

    constructor(connector: string,
        multiplicity_left: string,
        multiplicity_right: string,
        destinationElement: string,
        sourceElement: string,
        stereoType: string) {
            super();
            this.connector = new Connector(connector);
            this.multiplicity_left = new Multiplicity(multiplicity_left,true);
            this.multiplicity_right = new Multiplicity(multiplicity_right,false);
            this.destinationElement = destinationElement;            
            this.sourceElement = sourceElement;
            this.stereoType = stereoType ? stereoType : '';

    }

    refresh(oldValue: string, newValue: string) {
        console.log('refresh');
        
        if(this.destinationElement === oldValue){
            this.destinationElement = newValue;
            this.NotifyObservers('(' + oldValue + ',' + this.sourceElement + ')',
            '(' + newValue + ',' + this.sourceElement + ')' );
        }
        if(this.sourceElement === oldValue){
            this.sourceElement = newValue;
            this.NotifyObservers('(' + this.destinationElement + ',' + oldValue + ')',
            '(' + this.destinationElement + ',' + newValue + ')' );
        }
        
    }
    
    public setStartMultiplicity(multiplicity: string) {
        this.multiplicity_left.value = multiplicity;
    }

    public setEndMultiplicity(multiplicity: string) {
        this.multiplicity_right.value = multiplicity;
    }

    public setConnector(connector: string){
        this.connector.resetConnections(connector);
    }

    public setStereoType(stereoType: string){
        this.stereoType = stereoType;
    }


    public cloneModel(newSourceElement?: string, newDestinationElement?: string): Connection{
        let newConnection = new Connection(
            '',
            this.multiplicity_left.value,
            this.multiplicity_right.value,
            newDestinationElement ? newDestinationElement : this.destinationElement,
            newSourceElement ? newSourceElement : this.sourceElement,
            this.stereoType);
        newConnection.points = this.points;
        newConnection.multiplicity_left = this.multiplicity_left.cloneModel();
        newConnection.multiplicity_right = this.multiplicity_right.cloneModel();
        newConnection.connector = this.connector.cloneModel();
        let connectedClasses = DiagramCreator.diagram[DiagramCreator.activeIndex]
            .class_declarations.filter(e => e.getName() === newDestinationElement || e.getName() === newSourceElement);
        connectedClasses.forEach(e => (e as Class).removeObserver(this));
        connectedClasses.forEach(e => (e as Class).registerObserver(newConnection));
        return newConnection;
    }
}