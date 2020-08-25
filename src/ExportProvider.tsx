import { Component } from "react";
import ObserverSubject from './classes/parserRep/subject'
import ExportChangeContainer from './exportChangeContainer'



export default class ExportProvider extends ObserverSubject<ExportChangeContainer>{
    public static link: string = '';
    public static  puml: string = '';
    public static exportProvider: ExportProvider;


    public static get(): ExportProvider{
        if(ExportProvider.exportProvider == null){
            ExportProvider.exportProvider = new ExportProvider();
        }
        let prov = ExportProvider.exportProvider;
        return prov
    }

    public static setChange(link: string, puml: string){
        ExportProvider.get().NotifyObservers(new ExportChangeContainer(ExportProvider.link, ExportProvider.puml), new ExportChangeContainer(link,puml));

        ExportProvider.link = link;
        ExportProvider.puml = puml;

        console.log(link);
        console.log(puml);
    }
    


}