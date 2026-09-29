import { type Box, Context } from "#lib";
import { SvelteMap } from "svelte/reactivity";
type Selected = {
    key: string;
    val: string;
}[];
export type ListBoxOpts = {
    disabled?: boolean;
    multiple?: boolean;
    required?: boolean;
    name?: string;
    selected: Selected;
};
export declare class ListBoxContext extends Context {
    #private;
    get opts(): ListBoxOpts;
    items: SvelteMap<string, string>;
    constructor(opts: Box<ListBoxOpts>);
    get selected(): Selected;
    set selected(selected: Selected);
    itemAdd(key: string, val: string): () => void;
    itemPick(key: string): void;
    itemUnpick(key: string): void;
    itemToggle(key: string, toggle?: boolean): boolean;
    itemsToggle(toggle?: boolean): void;
    itemSelected(key: string): boolean;
    itemsSelected(): boolean;
}
export {};
