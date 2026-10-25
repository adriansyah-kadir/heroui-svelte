<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { ButtonGroupContext } from "./context.svelte";
  import { buttonGroupVariants } from "@heroui/styles";

  type Props = HTMLAttributes<HTMLSpanElement>;
  const props: Props = $props();

  const ctx = ButtonGroupContext.get();
</script>

<span
  {...props}
  aria-hidden="true"
  data-slot="button-group-separator"
  class={buttonGroupVariants().separator({
    ...ctx.opts,
    class: props.class?.toString(),
  })}
></span>
