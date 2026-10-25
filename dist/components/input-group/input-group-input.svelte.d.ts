declare const InputGroupInput: import("svelte").Component<{
    headless?: boolean;
} & import("@heroui/styles").InputVariants & {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    indeterminate?: boolean;
} & import("svelte/elements").HTMLInputAttributes, {}, "checked" | "value">;
type InputGroupInput = ReturnType<typeof InputGroupInput>;
export default InputGroupInput;
