export default interface Multiplicity{
    readonly type: string;
    readonly isLeft: boolean;
    value: string;
    vertex: any;
    cloneModel(): Multiplicity;
}