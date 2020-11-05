# What yo see is what you get - UML-Klassendiagramm Editor

Dieses Projekt beinhaltet eine Webapplikation mit welcher Klassendiagramme erstellt werden können. <br>
Es können verhandene Klassendiagramme im puml-Foramt eingelesen werden. 
Exportiert werden können die Diagrtamme ebenfalls wieder in das puml-Format.

Das Projekt wurde mit [Create React App](https://github.com/facebook/create-react-app) gebootstrapt.

Das Projket wurde mit Folgenden Versionen getestet:
- npm Version: 6.9.0
- Nodejs Version: 10.16.0
- PlantUML Version: V1.2020.19  (Achtung hier gab es Änderugen bzg. des Layouts. Der Branch oldPlantUML-Layout unterstützt den Export von älteren Versionen, Vorschaufunktion funktioniert hier jedoch nicht!!!! )

## Installieren der Packete vor dem ersten Start

### `npm install`

Das Ausführen im Verzeichniss installiert alle benötigten Pakete.

## Verfügbare Skripte zum lokalen Build

Im Projekt Verzeichniss kann der Client über:

### `npm run dev:client`

im Entwickler Modus gestartet werden. 
Öffnen von [http://localhost:3000](http://localhost:3000) im Browser zeigt den Editor an.


Im Projekt Verzeichniss kann der Server über:

### `npm run dev:server`


Erst wenn beide Befehle ausgeführt wurden, funktioniert die Anwendung richtig.


## Veröffentlichung auf einem Live System

Der Befehl:

### `npm run build:client`

erzeugt eine Html-Webseite mit dazugehörigen JavaScript Datein 
welche in einem öffentlichen Verzeichniss eines Webservers platziert werden können. <br>
Dazu muss jedoch vor dem Build die Addresse des Webserver auf welchem der Server läuft in der 
Datei <br> `src/Editor.tsx Zeile:59 axios.defaults.baseURL = "http://localhost:4000";` <br> von `localhost` auf die entsprechende `IP` geändert werden. 

## Benutzerhandbauch

Eine Anleitung der Anwendung kann hier gesehen werden:
[Benutzerhandbuch](Benutzerhandbuch.pdf)



## Verwendete Bibiliotheken

[material-ui/core: 4.11.0](https://www.npmjs.com/package/@material-ui/core)<br>
[material-ui/icons: 4.9.1](https://www.npmjs.com/package/@material-ui/icons)<br>
[material-ui/styles: 4.10.0](https://www.npmjs.com/package/@material-ui/styles)<br>
[antlr4: 4.8.0](https://www.npmjs.com/package/antlr4)<br>
[axios: 0.19.2](https://www.npmjs.com/package/axios)<br>
[cors: 2.8.5](https://www.npmjs.com/package/cors)<br>
[express: 4.17.1](https://www.npmjs.com/package/express)<br>
[express-fileupload: 1.1.7-alpha.3](https://www.npmjs.com/package/express-fileupload)<br>
[file-saver: 2.0.2](https://www.npmjs.com/package/file-saver)<br>
[mxgraph-js: 1.0.1](https://www.npmjs.com/package/mxgraph-js)<br>
[plantuml-encoder: 1.4.0](https://www.npmjs.com/package/plantuml-encoder)<br>
[react: 16.13.1](https://www.npmjs.com/package/react)<br>
[react-dom: 16.13.1](https://www.npmjs.com/package/react-dom)<br>
[react-scripts: 3.4.1](https://www.npmjs.com/package/react-scripts)<br>
[react-zoom-pan-pinch: 1.6.1](https://www.npmjs.com/package/react-zoom-pan-pinch)<br>
[typescript: 3.7.5](https://www.npmjs.com/package/typescript)<br>
