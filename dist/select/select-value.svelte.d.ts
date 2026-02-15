import type { HTMLAttributes } from "svelte/elements";
import type { Snippet } from "svelte";
type $$ComponentProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
    children?: Snippet<[string | string[] | undefined]>;
};
declare const SelectValue: import("svelte").Component<$$ComponentProps, {}, "">;
type SelectValue = ReturnType<typeof SelectValue>;
export default SelectValue;
