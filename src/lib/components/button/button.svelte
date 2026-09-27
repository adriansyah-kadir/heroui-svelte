<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import Spinner from "../spinner/spinner.svelte";
  import type { ButtonProps } from "./button.svelte.ts";
  import ButtonState from "./button.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

  const props: ButtonProps = $props();
  const btn = new ButtonState(boxDerived(() => props));
</script>

<button
  {...btn.props}
  class={buttonVariants(btn.heroui)}
>
  {#if btn.states.loading}
    <Spinner color="current" size="sm" />
  {/if}
  {@render props.children?.()}
</button>
