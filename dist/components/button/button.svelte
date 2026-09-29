<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import type { HTMLButtonAttributes } from "svelte/elements";
  import { type ButtonOpts, ButtonContext, Spinner, boxDerived } from "#lib";

  const props: ButtonOpts & HTMLButtonAttributes = $props();
  const btn = new ButtonContext(boxDerived(() => props));
</script>

<button
  {...props}
  {...btn.props}
  class={buttonVariants({ ...btn.heroui, class: props.class?.toString() })}
>
  {#if props.pending}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
</button>
