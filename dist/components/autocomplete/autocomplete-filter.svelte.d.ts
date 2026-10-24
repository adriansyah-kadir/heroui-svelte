declare const AutocompleteFilter: import("svelte").Component<{
    children?: import("svelte").Snippet;
    query?: string;
} & import("../filter").FilterOpts, {}, "query">;
type AutocompleteFilter = ReturnType<typeof AutocompleteFilter>;
export default AutocompleteFilter;
