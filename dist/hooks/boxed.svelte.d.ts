export type Box<T> = {
    current: T;
};
export type Getter<T = unknown> = () => T;
export type Setter<T = unknown> = (value: T) => any;
export declare function boxState<T>(initial: T, onchange?: Setter<T>): {
    current: T;
};
export declare function boxDerived<T>(getter: Getter<T>, setter?: Setter<T>): {
    current: T;
};
