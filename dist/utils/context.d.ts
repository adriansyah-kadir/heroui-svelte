type Constructor<T, Args extends unknown[] = unknown[]> = new (...args: Args) => T;
export declare class Context {
    static get<T extends Context>(this: abstract new (...args: any[]) => T): T;
    static getOr<T extends Context>(this: Constructor<T, []>): T | undefined;
    static getOr<T extends Context, Args extends unknown[]>(this: Constructor<T, Args>, ...args: Args): T;
    protected static getKey(): symbol;
    constructor();
}
export {};
