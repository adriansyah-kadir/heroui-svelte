import type { HTMLAttributes } from "svelte/elements";
import { type AutocompleteOpts } from "../../index.js";
type Props = HTMLAttributes<HTMLElement> & Partial<AutocompleteOpts> & {
    onSelected?: (keys: string[]) => any;
    selected?: string[];
};
declare const Autocomplete: import("svelte").Component<Props, {}, "selected">;
type Autocomplete = ReturnType<typeof Autocomplete>;
export default Autocomplete;
