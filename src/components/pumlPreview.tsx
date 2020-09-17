import Observer from '../interfaces/observer'
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExportChangeContainer from './exportChangeContainer';
import ExportProvider from './ExportProvider';

class PumlPreview extends React.Component implements Observer<ExportChangeContainer>{


    constructor(props) {
        super(props);
        ExportProvider.get().registerObserver(this);
        this.state = new stateOBJ('');
        
    }

    refresh(oldValue: ExportChangeContainer, newValue: ExportChangeContainer) {
        this.setState(new stateOBJ(newValue.puml));
    }

    render(){
        return (  
            <Typography gutterBottom style={{whiteSpace: 'pre-line'}}>
                {(this.state as stateOBJ).puml}
            </Typography>
        )
    }

}


class stateOBJ {
    public puml: string;


    constructor(puml: string) {
        this.puml = puml
        
    }
}

export default PumlPreview;