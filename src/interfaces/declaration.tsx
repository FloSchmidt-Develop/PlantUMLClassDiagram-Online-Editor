export default interface Declaration {
  name: string;
  declaration_value: string;

  setName(newName: string);
  setDeclarationValue(newDeclarationValue: string);

  getWidth(): number;
}
