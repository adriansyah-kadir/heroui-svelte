declare const PopoverTrigger: import("svelte").Component<{
    focused?: boolean;
    hovered?: boolean;
    pending?: boolean;
    pressed?: boolean;
    disabled?: boolean;
} & import("@heroui/styles").ButtonVariants & import("svelte/elements").HTMLAttributes<HTMLElement> & {
    href?: string;
}, {}, "">;
type PopoverTrigger = ReturnType<typeof PopoverTrigger>;
export default PopoverTrigger;
