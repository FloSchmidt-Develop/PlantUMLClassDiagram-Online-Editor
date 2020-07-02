import ID from "./id";
import IName from './named'

export default interface Declaration extends ID, IName {

  declaration_value: string;

  setName(newName: string);
  getName(): string;
  setDeclarationValue(newDeclarationValue: string);

  getWidth(): number;
}
