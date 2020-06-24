import ID from "./id";

export default interface Declaration extends ID {
  name: string;
  declaration_value: string;

  setName(newName: string);
  setDeclarationValue(newDeclarationValue: string);

  getWidth(): number;
}
