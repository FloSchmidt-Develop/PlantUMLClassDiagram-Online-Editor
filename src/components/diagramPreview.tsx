import Observer from '../interfaces/observer'
import React from 'react';
import ExportProvider from './ExportProvider';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ExportChangeContainer from './exportChangeContainer';

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
        return (
            <TransformWrapper>
                <TransformComponent>
                    <img className="preview-img" src={(this.state as stateOBJ).link} />
                </TransformComponent>
            </TransformWrapper>
        )
    }

}


class stateOBJ {
    public link: string;


    constructor(link: string) {
        this.link = link
        
    }
}

export default DiagramPreview;