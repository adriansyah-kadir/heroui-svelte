<script lang="ts">
    import { inputGroupVariants } from "@heroui/styles";
    import { InputGroupContext } from "./utils.svelte";
    import { TextArea } from "$lib";
    import type { ComponentProps } from "svelte";

    const { children, ...props }: ComponentProps<typeof TextArea> = $props();

    const ig = InputGroupContext.get();
</script>

<TextArea
    {...props}
    data-slot="input-group-textarea"
    headless
    class={[inputGroupVariants($ig).input(), props.class]}
/>
