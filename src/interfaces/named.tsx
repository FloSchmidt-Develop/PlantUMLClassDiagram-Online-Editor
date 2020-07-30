
import Cloneable from './cloneable';

export default interface Named extends Cloneable{

    setName(name: string);
    getName(): string;
}