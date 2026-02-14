import type { ListBoxItemVariants, ListBoxVariants } from "@heroui/styles";
import { Context } from "runed";
export type ListBoxContext = ({
    type: "single";
    value: string;
} | {
    type: "multiple";
    value: string[];
}) & ListBoxVariants;
export declare function listBoxContext(prop: ListBoxContext): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)) => void;
    update: (this: void, updater: import("svelte/store").Updater<({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)>) => void;
};
export declare const ListBoxContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)) => void;
    update: (this: void, updater: import("svelte/store").Updater<({
        type: "single";
        value: string;
    } & ListBoxVariants) | ({
        type: "multiple";
        value: string[];
    } & ListBoxVariants)>) => void;
}>;
export type ListBoxItemContext = {
    selected: boolean;
} & ListBoxItemVariants;
export declare function listBoxItemContext(prop: ListBoxItemContext): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<ListBoxItemContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ListBoxItemContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<ListBoxItemContext>) => void;
};
export declare const ListBoxItemContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<ListBoxItemContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: ListBoxItemContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<ListBoxItemContext>) => void;
}>;
