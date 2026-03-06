<script lang="ts">
    import { inputGroupVariants } from "@heroui/styles";
    import { InputGroupContext } from "./utils.svelte";
    import { Input } from "$lib";
    import type { ComponentProps } from "svelte";

    const { children, ...props }: ComponentProps<typeof Input> = $props();

    const ig = InputGroupContext.get();
</script>

<Input
    {...props}
    data-slot="input-group-input"
    headless
    class={[inputGroupVariants($ig).input(), props.class]}
/>
