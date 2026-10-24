import { InputGroup } from "../../index.js";
import type { ComponentProps } from "svelte";
type Props = ComponentProps<typeof InputGroup> & {
    debounced?: string;
    debounce?: number;
};
declare const SearchInput: import("svelte").Component<Props, {}, "value" | "debounced">;
type SearchInput = ReturnType<typeof SearchInput>;
export default SearchInput;
