<script lang="ts">
    import { listboxItemVariants } from "@heroui/styles";
    import { Select, type SelectItemProps } from "bits-ui";
    import { SelectContext } from "./utils";

    const ctx = SelectContext.get();
    const { disabled, ...props }: SelectItemProps = $props();
    const selected = $derived.by(() => {
        const value = $ctx.value;
        if (!value) return false;
        if (Array.isArray(value))
            return value.findIndex((e) => e === props.value) >= 0;
        else return value === props.value;
    });
</script>

<Select.Item
    {...props}
    data-disabled={!!disabled}
    data-selected={selected}
    class={[listboxItemVariants().item(), "data-highlighted:bg-default"]}
/>
