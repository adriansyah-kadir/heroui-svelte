<script lang="ts">
  import { textAreaVariants, type TextAreaVariants } from "@heroui/styles";
  import type { HTMLTextareaAttributes } from "svelte/elements";
  import { watch } from "runed";
  import { TextFieldContext } from "$lib/text-field/utils.svelte";

  let {
    fullWidth,
    variant,
    value = $bindable(""),
    invalid = $bindable(false),
    id = crypto.randomUUID(),
    headless,
    ...props
  }: HTMLTextareaAttributes &
    TextAreaVariants & { invalid?: boolean; headless?: boolean } = $props();
  const tf = TextFieldContext.getOr(undefined);
  const tfi = tf?.input;
  const mergedProps = $derived({ ...$tfi, ...props });
  const theme = $derived({
    fullWidth: fullWidth ?? $tf?.fullWidth,
    variant: variant ?? $tf?.variant,
  });

  watch(
    () => id,
    (id) => {
      if (tf && $tf && id) {
        $tf.id = id;
      }
    },
  );
</script>

<textarea
  {...mergedProps}
  {id}
  bind:value
  use:tf?.useInput={{ mode: $tf?.mode ?? "change" }}
  data-invalid={$tf?.invalid}
  aria-readonly={$tf?.readonly}
  class={[!headless && textAreaVariants(theme), props.class]}
></textarea>
