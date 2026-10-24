import type { HTMLAttributes } from "svelte/elements";
import type { Snippet } from "svelte";
type $$ComponentProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    children?: Snippet<[string[]]>;
    placeholder?: string;
};
declare const AutocompleteValue: import("svelte").Component<$$ComponentProps, {}, "">;
type AutocompleteValue = ReturnType<typeof AutocompleteValue>;
export default AutocompleteValue;
