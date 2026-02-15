import type { SelectVariants } from "@heroui/styles";
import type { SelectRootProps } from "bits-ui";
import { Context } from "runed";
export type SelectContext = Omit<SelectRootProps, "children"> & SelectVariants;
export declare function selectContext(init: SelectContext): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<SelectContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: SelectContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<SelectContext>) => void;
    select: import("svelte/store").Readable<Omit<import("bits-ui").SelectRootPropsWithoutHTML, "children">>;
};
export declare const SelectContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<SelectContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: SelectContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<SelectContext>) => void;
    select: import("svelte/store").Readable<Omit<import("bits-ui").SelectRootPropsWithoutHTML, "children">>;
}>;
