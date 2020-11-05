import ID from "../classes/model/id";

export default interface Observer<T>{
    refresh(oldValue: T, newValue: T);
}