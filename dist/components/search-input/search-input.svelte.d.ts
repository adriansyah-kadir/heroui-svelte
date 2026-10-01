import { InputGroup } from "#lib";
import type { ComponentProps } from "svelte";
type $$ComponentProps = ComponentProps<typeof InputGroup> & {
    debounced?: string;
    debounce?: number;
};
declare const SearchInput: import("svelte").Component<$$ComponentProps, {}, "value" | "debounced">;
type SearchInput = ReturnType<typeof SearchInput>;
export default SearchInput;
