import type { Box } from "#lib";
type Constructor<T, Args extends unknown[] = unknown[]> = new (...args: Args) => T;
type ContextArgs<T, Args extends unknown[]> = Args extends [] ? [] : Args extends [Box<T>, ...unknown[]] ? Args : never;
export declare class Context<T> {
    #private;
    get opts(): T;
    set opts(value: T);
    static get<C extends Context<any>>(this: abstract new (...args: any[]) => C): C;
    static getOr<T, C extends Context<T>, Args extends unknown[]>(this: Constructor<C, ContextArgs<T, Args>>): C | undefined;
    static getOr<T, C extends Context<T>, Args extends unknown[]>(this: Constructor<C, ContextArgs<T, Args>>, ...args: ContextArgs<T, Args>): C;
    protected static getKey(): symbol;
    constructor(opts: Box<T>);
}
export {};
