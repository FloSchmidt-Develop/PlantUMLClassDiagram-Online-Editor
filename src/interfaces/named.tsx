
import Cloneable from './cloneable';

export default interface Named extends Cloneable{
    //name: string;
    setName(name: string);
    getName(): string;
}