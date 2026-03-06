<script lang="ts">
    import { inputGroupVariants } from "@heroui/styles";
    import type { HTMLAttributes } from "svelte/elements";
    import { InputGroupContext } from "./utils.svelte";

    const { children, ...props }: HTMLAttributes<HTMLDivElement> = $props();

    const ig = InputGroupContext.get();
</script>

<div {...props} data-slot="input-group-prefix" class={[inputGroupVariants($ig).prefix(), props.class]}>
    {@render children?.()}
</div>
