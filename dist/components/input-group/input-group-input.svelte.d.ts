declare const InputGroupInput: import("svelte").Component<{
    headless?: boolean;
} & {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    value?: any;
    checked?: boolean;
    indeterminate?: boolean;
} & import("@heroui/styles").InputVariants & import("svelte/elements").HTMLInputAttributes, {}, "value">;
type InputGroupInput = ReturnType<typeof InputGroupInput>;
export default InputGroupInput;
