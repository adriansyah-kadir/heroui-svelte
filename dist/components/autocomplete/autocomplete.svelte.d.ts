import type { HTMLAttributes } from "svelte/elements";
import { type AutocompleteOpts } from "#lib";
type Props = HTMLAttributes<HTMLElement> & Partial<AutocompleteOpts> & {
    onSelected?: (keys: string[]) => any;
};
declare const Autocomplete: import("svelte").Component<Props, {}, "">;
type Autocomplete = ReturnType<typeof Autocomplete>;
export default Autocomplete;
