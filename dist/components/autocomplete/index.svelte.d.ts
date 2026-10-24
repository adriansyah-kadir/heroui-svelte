import type { AutocompleteVariants } from "@heroui/styles";
import { Context, type Box, type Getter } from "svelte-utils";
import { ListBoxContext, PopoverContext, type ListBoxOpts, type PopoverContextOpts } from "../../index.js";
export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & PopoverContextOpts & {
    invalid?: boolean;
};
export declare class AutocompleteContext extends Context {
    opts: AutocompleteOpts;
    popoverCtx: PopoverContext;
    listboxCtx: ListBoxContext;
    constructor(opts: Getter<AutocompleteOpts>, selected: Box<string[]>);
    autoCloseOnFocusLost(): () => void;
    autoCloseOnSingleSelect(): void;
    close(): void;
    open(source?: HTMLElement): void;
    toggle(source?: HTMLElement): void;
    get props(): {
        "data-disabled": boolean | undefined;
        "data-required": boolean | undefined;
        "data-invalid": boolean | undefined;
    };
    get heroui(): {
        variant: "primary" | "secondary" | undefined;
        fullWidth: boolean | undefined;
    };
}
