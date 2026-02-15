<script lang="ts">
    import { listboxVariants, selectVariants } from "@heroui/styles";
    import type { SelectContentProps } from "bits-ui";
    import type { SelectPortalProps } from "bits-ui";
    import { Select } from "bits-ui";

    const { to, disabled, ...props }: SelectPortalProps & SelectContentProps =
        $props();
    const styles = selectVariants();
</script>

<Select.Portal {disabled} {to}>
    <Select.Content
        {...props}
        class={[
            styles.popover(),
            "data-[state=open]:animate-in",
            "data-[state=open]:fade-in-0",
            "data-[state=open]:zoom-in-95",
            "data-[state=open]:ease-[cubic-bezier(0.25,1,0.5,1)]",
            "data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0",
            "data-[state=closed]:zoom-out-95",
            "data-[state=closed]:ease-[cubic-bezier(0.5,0,0.75,0)]",
            "origin-top",
            props.class,
        ]}
    />
</Select.Portal>
