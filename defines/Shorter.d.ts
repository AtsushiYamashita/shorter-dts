export declare type Func<A0, R> = (a: A0) => R;
export declare type Merge<A0, A1, R> = (a: A0, a1: A1) => R;

export declare type Act<A> = Func<A, any>;
export declare type Get<R> = Func<any, R>;
export declare type Process = Func<any, any>;

export declare type Map<V> = { [index: string]: V };
export declare type KeyValue<K, V> = [K, V];

export declare type Dic = Map<string>;
export declare type Set<K, V> = KeyValue<K, V>;


export namespace Declare  {
    export declare type Func<A0, R> = (a: A0) => R;
    export declare type Merge<A0, A1, R> = (a: A0, a1: A1) => R;
    
    export declare type Act<A> = Func<A, any>;
    export declare type Get<R> = Func<any, R>;
    export declare type Process = Func<any, any>;
    
    export declare type Map<V> = { [index: string]: V };
    export declare type KeyValue<K, V> = [K, V];
    
    export declare type Dic = Map<string>;
    export declare type Set<K, V> = KeyValue<K, V>;
}

export namespace Type {
    export type Func<A0, R> = (a: A0) => R;
    export type Merge<A0, A1, R> = (a: A0, a1: A1) => R;
    
    export type Act<A> = Func<A, any>;
    export type Get<R> = Func<any, R>;
    export type Process = Func<any, any>;
    
    export type Map<V> = { [index: string]: V };
    export type KeyValue<K, V> = [K, V];
    
    export type Dic = Map<string>;
    export type Set<K, V> = KeyValue<K, V>;
}

 export default Declare

