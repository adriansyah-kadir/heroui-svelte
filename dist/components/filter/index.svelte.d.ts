import { Context, type Box, type Fn, type Getter } from "svelte-utils";
export type FilterOpts = {
    caseSensitive?: boolean;
    filter?: Fn<boolean, [string, string]>;
};
export declare class FilterContext extends Context {
    #private;
    get query(): string;
    set query(value: string);
    get total(): number;
    get visible(): number;
    register: (item: string) => () => void;
    matches: (text: string) => boolean;
    filter: (query: string, text: string) => boolean;
    constructor(opts: Getter<FilterOpts>, query?: any);
    sync(box: Box<string>): void;
}
