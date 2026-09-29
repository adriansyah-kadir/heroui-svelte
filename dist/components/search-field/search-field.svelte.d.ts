import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "#lib";
type Props = Omit<InputOpts, "checked"> & HTMLAttributes<HTMLDivElement> & {
    debounce?: number;
    debounced?: string;
    onValue?: (value: string) => any;
};
declare const SearchField: import("svelte").Component<Props, {}, "value" | "debounced">;
type SearchField = ReturnType<typeof SearchField>;
export default SearchField;
