<script lang="ts">
  import { type InputVariants, inputVariants } from "@heroui/styles";
  import type { HTMLInputAttributes } from "svelte/elements";
  import { watch } from "runed";
  import { TextFieldContext } from "../text-field/utils.svelte";

  let {
    fullWidth,
    variant,
    value = $bindable(""),
    invalid = $bindable(false),
    id = crypto.randomUUID(),
    ...props
  }: HTMLInputAttributes & InputVariants & { invalid?: boolean } = $props();
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

<input
  {...mergedProps}
  {id}
  bind:value
  use:tf?.useInput={{ mode: $tf?.mode ?? "change" }}
  data-invalid={$tf?.invalid}
  aria-readonly={$tf?.readonly}
  class={[inputVariants(theme), props.class]}
/>
