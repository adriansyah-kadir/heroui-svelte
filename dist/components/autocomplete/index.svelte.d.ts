import { type ListBoxOpts, type PopoverOpts, type Box, ListBoxContext, PopoverState } from "#lib";
import type { AutocompleteVariants } from "@heroui/styles";
import { Context } from "#lib/utils/context.svelte.js";
export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & {
    invalid?: boolean;
} & PopoverOpts;
export declare class AutocompleteContext extends Context<AutocompleteOpts> {
    popover: PopoverState;
    listBox: ListBoxContext;
    get empty(): boolean;
    clear(): void;
    constructor(opts: Box<AutocompleteOpts>);
    autoCloseOnFocusLost(): () => void;
    autoCloseOnSingleSelect(): void;
    close(): void;
    open(source?: HTMLElement): void;
    toggle(source?: HTMLElement): void;
    get props(): {
        "data-disabled": any;
        "data-required": any;
        "data-invalid": any;
    };
    get heroui(): {
        variant: any;
        fullWidth: any;
    };
}
