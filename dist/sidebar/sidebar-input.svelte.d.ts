declare const SidebarInput: import("svelte").Component<import("svelte/elements").HTMLInputAttributes & import("@heroui/styles").InputVariants & {
    invalid?: boolean;
    headless?: boolean;
}, {}, "value">;
type SidebarInput = ReturnType<typeof SidebarInput>;
export default SidebarInput;
