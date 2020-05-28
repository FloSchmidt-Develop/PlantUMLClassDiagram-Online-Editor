export default interface Attribute{
    name: string,
    dataType: string,
    visibility: string,

    setName(newName: string): void;
    setVisibility(newVisibility: string): void;
    setDataType(newDataType: string): void;

    getWidth(): number;
}