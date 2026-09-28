<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { fieldErrorVariants } from "@heroui/styles";
  import InputState from "../input/input.svelte.ts";

  type Props = HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();
  const input = InputState.getOr({});
  const invalid = $derived(input.opts.invalid);
</script>

<div
  {...props}
  {...invalid
    ? {
        "data-visible": true,
      }
    : {}}
  data-slot="field-error"
  class={fieldErrorVariants({ class: ["duration-0", props.class?.toString()] })}
>
  {@render props.children?.()}
</div>
