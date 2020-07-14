export default interface Observer<T>{
    refresh(oldValue: T, newValue: T);
}