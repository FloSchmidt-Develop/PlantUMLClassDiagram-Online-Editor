import Observer from './interfaces/observer'
import React from 'react';
import ExportChangeContainer from './exportChangeContainer';
import ExportProvider from './ExportProvider';

class DiagramPreview extends React.Component implements Observer<ExportChangeContainer>{


    constructor(props) {
        super(props);
        ExportProvider.get().registerObserver(this);
        this.state = new stateOBJ('');
        
    }

    refresh(oldValue: ExportChangeContainer, newValue: ExportChangeContainer) {
        this.setState(new stateOBJ(newValue.link));
    }

    render(){
        return <img className="preview-img" src={(this.state as stateOBJ).link} />
    }

}


class stateOBJ {
    public link: string;


    constructor(link: string) {
        this.link = link
        
    }
}

export default DiagramPreview;