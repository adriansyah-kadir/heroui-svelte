import type { Snippet } from "svelte";
import { type FilterOpts } from "./index.svelte";
type Props = {
    children?: Snippet;
    query?: string;
} & FilterOpts;
declare const FilterProvider: import("svelte").Component<Props, {}, "query">;
type FilterProvider = ReturnType<typeof FilterProvider>;
export default FilterProvider;
