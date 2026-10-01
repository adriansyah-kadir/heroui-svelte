import type { HTMLAttributes } from "svelte/elements";
import { AutocompleteContext } from "#lib";
import type { Snippet } from "svelte";
type $$ComponentProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: Snippet<[AutocompleteContext]>;
    placeholder?: string;
};
declare const AutocompleteValue: import("svelte").Component<$$ComponentProps, {}, "">;
type AutocompleteValue = ReturnType<typeof AutocompleteValue>;
export default AutocompleteValue;
