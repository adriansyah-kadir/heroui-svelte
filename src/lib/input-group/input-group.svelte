<script lang="ts">
    import {
        textFieldContext,
        TextFieldContext,
    } from "$lib/text-field/utils.svelte";
    import {
        inputGroupVariants,
        type InputGroupVariants,
    } from "@heroui/styles";
    import type { WithChildren } from "bits-ui";
    import type { HTMLAttributes } from "svelte/elements";
    import { inputGroupContext, InputGroupContext } from "./utils.svelte";

    const {
        children,
        fullWidth,
        variant,
        ...props
    }: WithChildren<InputGroupVariants & HTMLAttributes<HTMLDivElement>> =
        $props();

    const tf = TextFieldContext.getOr(textFieldContext());
    const ig = InputGroupContext.set(inputGroupContext());

    $inspect($tf);

    $effect(() => {
        $ig.fullWidth = fullWidth ?? $tf.fullWidth;
        $ig.variant = variant ?? $tf.variant;
    });
</script>

<div
    {...props}
    data-invalid={$tf.invalid}
    data-disabled={$tf.disabled}
    class={[inputGroupVariants($ig).base(), props.class]}
>
    {@render children?.()}
</div>
