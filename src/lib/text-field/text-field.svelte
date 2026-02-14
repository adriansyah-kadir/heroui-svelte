<script lang="ts">
  import { textFieldVariants, type TextFieldVariants } from "@heroui/styles";
  import { textFieldContext, TextFieldContext } from "./utils.svelte";
  import type { WithChildren } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { watch } from "runed";

  let {
    children,
    mode = "change",
    disabled,
    fullWidth = false,
    invalid,
    pattern,
    placeholder,
    readonly,
    name,
    required,
    type,
    variant,
    ...props
  }: TextFieldContext & WithChildren<HTMLAttributes<HTMLDivElement>> = $props();

  const tfProps = $derived({
    mode,
    disabled,
    fullWidth,
    invalid,
    variant,
    name,
    required,
    type,
    pattern,
    placeholder,
    readonly,
  });
  // svelte-ignore state_referenced_locally
  const tf = TextFieldContext.set(textFieldContext(tfProps));
  const theme: TextFieldVariants = $derived({ fullWidth });

  watch(
    () => tfProps,
    (p) => {
      $tf = { ...p, id: $tf.id };
    },
  );
</script>

<div
  {...props}
  data-invalid={$tf.invalid}
  data-required={$tf?.required}
  data-disabled={$tf?.disabled}
  class={[textFieldVariants(theme), "text-field", props.class]}
>
  {@render children?.()}
</div>
