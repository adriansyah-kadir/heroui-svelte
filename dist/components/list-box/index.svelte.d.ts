import { Context, type Box, type Getter } from "svelte-utils";
export type ListBoxOpts = {
    disabled?: boolean;
    multiple?: boolean;
    required?: boolean;
    name?: string;
};
export declare class ListBoxContext extends Context {
    #private;
    get opts(): ListBoxOpts;
    get selected(): string[];
    set selected(values: string[]);
    get noSelected(): boolean;
    isSelected(value: string): any;
    setSelected(value: string, checked: boolean): void;
    constructor(opts: Getter<ListBoxOpts>, selected?: Box<string[]>);
}
