declare const SearchFieldInput: import("svelte").Component<{
    headless?: boolean;
} & {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    value?: any;
    checked?: boolean;
    indeterminate?: boolean;
} & import("@heroui/styles").InputVariants & import("svelte/elements").HTMLInputAttributes, {}, "">;
type SearchFieldInput = ReturnType<typeof SearchFieldInput>;
export default SearchFieldInput;
