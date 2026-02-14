import type { InputVariants } from "@heroui/styles";
import { Context } from "runed";
import type { HTMLInputAttributes } from "svelte/elements";
export type TextFieldContext = ContextAttributes & InputAttributes & InputVariants;
type ContextAttributes = {
    invalid?: boolean | null;
    mode?: ("input" | "change") | null;
};
type InputAttributes = Pick<HTMLInputAttributes, "required" | "pattern" | "placeholder" | "name" | "disabled" | "readonly" | "type" | "id">;
export declare function textFieldContext(init?: TextFieldContext): {
    subscribe: (this: void, run: import("svelte/store").Subscriber<TextFieldContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: TextFieldContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<TextFieldContext>) => void;
    input: import("svelte/store").Readable<InputAttributes>;
    onValue(ev: Event): void;
    useInput(node: HTMLInputElement, { mode }: {
        mode: "input" | "change";
    }): {
        update: ({ mode: newMode }: {
            mode: "input" | "change";
        }) => void;
    };
};
export declare const TextFieldContext: Context<{
    subscribe: (this: void, run: import("svelte/store").Subscriber<TextFieldContext>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    set: (this: void, value: TextFieldContext) => void;
    update: (this: void, updater: import("svelte/store").Updater<TextFieldContext>) => void;
    input: import("svelte/store").Readable<InputAttributes>;
    onValue(ev: Event): void;
    useInput(node: HTMLInputElement, { mode }: {
        mode: "input" | "change";
    }): {
        update: ({ mode: newMode }: {
            mode: "input" | "change";
        }) => void;
    };
}>;
export {};
