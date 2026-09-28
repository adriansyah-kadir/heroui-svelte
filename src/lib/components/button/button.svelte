<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import Spinner from "../spinner/spinner.svelte";
  import type { ButtonProps } from "./button.svelte.ts";
  import ButtonState from "./button.svelte.ts";
  import { boxDerivedObj } from "#lib/hooks/boxed.svelte.ts";

  const props: ButtonProps = $props();
  const btn = new ButtonState(boxDerivedObj(() => props));
</script>

<button
  {...props}
  {...btn.props}
  class={buttonVariants({ ...btn.heroui, class: props.class?.toString() })}
>
  {#if props.loading}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
</button>
