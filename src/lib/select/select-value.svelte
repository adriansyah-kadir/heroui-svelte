<script lang="ts">
    import { selectVariants } from "@heroui/styles";
    import type { HTMLAttributes } from "svelte/elements";
    import { SelectContext } from "./utils";
    import type { Snippet } from "svelte";

    const {
        children,
        placeholder,
        ...props
    }: Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
        children?: Snippet<[string | string[] | undefined]>;
    } = $props();

    const ctx = SelectContext.get();
    const styles = selectVariants();
    const label = $derived.by(() => {
        if (!$ctx.value?.length) return placeholder ?? "-";
        if (Array.isArray($ctx.value)) return $ctx.value.join(", ");
        else return $ctx.value;
    });
</script>

<span
    {...props}
    class={[styles.value(), "focus-visible:status-focused-field", props.class]}
>
    {#if children}
        {@render children($ctx.value)}
    {:else}
        {label}
    {/if}
</span>
