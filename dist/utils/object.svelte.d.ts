export declare function pick<T extends object, const K extends readonly (keyof T)[]>(obj: T, keys: K): Pick<T, K[number]>;
export declare function omit<T extends object, const K extends readonly (keyof T)[]>(obj: T, keys: K): Omit<T, K[number]>;
