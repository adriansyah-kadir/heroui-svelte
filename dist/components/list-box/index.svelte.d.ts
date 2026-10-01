import type { Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import { SvelteSet } from "svelte/reactivity";
export type ListBoxOpts = {
    disabled?: boolean;
    multiple?: boolean;
    required?: boolean;
    name?: string;
    selected: SvelteSet<string>;
};
export declare class ListBoxContext extends Context<ListBoxOpts> {
    get selected(): SvelteSet<string>;
    get multiple(): boolean | undefined;
    items: SvelteSet<string>;
    constructor(opts: Box<ListBoxOpts>);
    itemAdd(val: string): () => void;
    itemPick(val: string): void;
    itemUnpick(val: string): void;
    itemToggle(val: string, toggle?: boolean): boolean;
    itemsToggle(toggle?: boolean): void;
    itemSelected(val: string): boolean;
    itemsSelected(): boolean;
}
