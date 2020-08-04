import Observer from "../../interfaces/observer";
import ID from "./id";

export default abstract class ObserverSubject<T> extends ID{

    protected observers: Observer<T>[];

    constructor() {
        super();
        this.observers = [];
        
    }


    public registerObserver(observer: Observer<T>): void{
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer<T>): void{
        this.observers = this.observers.filter(e => e !== observer);
    }

    public NotifyObservers(oldValue: T, newValue: T){
        this.observers.forEach(e => e.refresh(oldValue,newValue));
    }


}