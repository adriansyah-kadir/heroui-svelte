<script lang="ts">
    import type { SelectViewportProps } from "bits-ui";
    import { Select } from "bits-ui";
    import SelectViewport from "./select-viewport.svelte";
    import SelectItem from "./select-item.svelte";
    import { ListBoxItemIndicator } from "$lib/list-box";
    import { SelectContext } from "./utils";
    import { listboxVariants } from "@heroui/styles";

    const ctx = SelectContext.get();
    const props: SelectViewportProps = $props();
</script>

<Select.Viewport
    {...props}
    children={props.children ?? DefaultChildren}
    class={[
        listboxVariants(),
        "max-h-[min(var(--bits-select-content-available-height),400px)] min-w-(--bits-select-anchor-width)",
        props.class,
    ]}
/>

{#snippet DefaultChildren()}
    {#each $ctx.items as item}
        <SelectItem value={item.value} disabled={item.disabled}>
            {#snippet children({ selected })}
                {item.label}
                <ListBoxItemIndicator {selected} />
            {/snippet}
        </SelectItem>
    {/each}
{/snippet}
