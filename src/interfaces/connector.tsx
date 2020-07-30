import ID from "./id";

export default interface Connector extends ID{
    startArrowSymbol: Arrows;
    endArrowSymbol: Arrows;
    lineStyle: Lines;
    readonly layoutProperty: LayoutProperty;


    setStartConnector(connector: string)

    setStartConnector_direct(startArrow: Arrows)

    setEndConnector(connector: string)

    setEndConnector_direct(endArrow: Arrows)

    setLineStyle(connector: string)

    setLineStyle_direct(line: Lines)

    resetConnections(connector: string)
    cloneModel(): Connector;

}

export enum Arrows{
    normal,
    diamond,
    diamondFilled,
    big,
    none
}

export enum Lines{
    normal,
    dotted
}

export enum LayoutProperty{
    up,
    down,
    left,
    right,
    none,
}