import type { InputGroupVariants } from "@heroui/styles";
import { Context } from "runed";
export declare function inputGroupContext(): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<InputGroupVariants>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    update: (this: void, updater: import("svelte/store").Updater<InputGroupVariants>) => void;
    set: (this: void, value: InputGroupVariants) => void;
};
export type InputGroupContext = ReturnType<typeof inputGroupContext>;
export declare const InputGroupContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<InputGroupVariants>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    update: (this: void, updater: import("svelte/store").Updater<InputGroupVariants>) => void;
    set: (this: void, value: InputGroupVariants) => void;
}>;
