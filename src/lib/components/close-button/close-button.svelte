<script lang="ts">
  import { closeButtonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import CloseIcon from "#lib/icons/close-icon.svelte";

  const props: HTMLButtonAttributes = $props();
</script>

<button
  {...props}
  type={props.type ?? "button"}
  class={closeButtonVariants({
    class: props.class?.toString(),
  })}
>
  <CloseIcon />
</button>
