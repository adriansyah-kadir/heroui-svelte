import { type ListBoxOpts, type PopoverOpts, type Box, ListBoxContext, PopoverState } from "#lib";
import type { AutocompleteVariants } from "@heroui/styles";
import { Context } from "#lib/utils/context.js";
export type AutocompleteOpts = ListBoxOpts & AutocompleteVariants & {
    invalid?: boolean;
} & PopoverOpts;
export declare class AutocompleteContext extends Context {
    #private;
    get opts(): AutocompleteOpts;
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
        "data-disabled": boolean | undefined;
        "data-required": boolean | undefined;
        "data-invalid": boolean | undefined;
    };
    get heroui(): {
        variant: "primary" | "secondary" | undefined;
        fullWidth: boolean | undefined;
    };
}
