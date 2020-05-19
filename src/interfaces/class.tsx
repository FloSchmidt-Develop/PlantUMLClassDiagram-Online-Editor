import IAttribute from './attribute'
import IMethode from './methode'


export default interface Class {
    attributes: IAttribute[],
    methodes: IMethode[],
    name: string,
    package: string,
    type: string,
    alias: string
}
