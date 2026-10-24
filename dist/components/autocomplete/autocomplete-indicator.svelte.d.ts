import type { HTMLAttributes } from "svelte/elements";
type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
};
declare const AutocompleteIndicator: import("svelte").Component<Props, {}, "">;
type AutocompleteIndicator = ReturnType<typeof AutocompleteIndicator>;
export default AutocompleteIndicator;
