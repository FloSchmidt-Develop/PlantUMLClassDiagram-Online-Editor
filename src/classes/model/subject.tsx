import Observer from "../../interfaces/observer";
import ID from "./id";

export default abstract class ObserverSubject<T> extends ID{

    public observers: Observer<T>[];

    constructor() {
        super();
        this.observers = [];
        
    }


    public registerObserver(observer: Observer<T>): void{
        if(!this.observers.find(e => e === observer))
            this.observers.push(observer);

        console.log('Observer from');
        
        console.log(this);  
        console.log(this.observers);
        console.log('---------------------');
        
        
    }

    public removeObserver(observer: Observer<T>): void{
        this.observers = this.observers.filter(e => e !== observer);
    }

    public NotifyObservers(oldValue: T, newValue: T){
        this.observers.forEach(e => e.refresh(oldValue,newValue));
    }


}