import type { ModalVariants } from "@heroui/styles";
import { Context } from "runed";
export declare function dialogContext(init: DialogContext): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<DialogContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: DialogContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<DialogContext>) => void;
    variants: import("svelte/store").Readable<ModalVariants>;
};
export type DialogContext = {
    open: boolean;
    placement: "auto" | "top" | "center" | "bottom";
} & ModalVariants;
export declare const DialogContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<DialogContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: DialogContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<DialogContext>) => void;
    variants: import("svelte/store").Readable<ModalVariants>;
}>;
