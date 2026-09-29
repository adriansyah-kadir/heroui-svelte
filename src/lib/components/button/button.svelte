<script lang="ts">
  import { buttonVariants } from "@heroui/styles";
  import Spinner from "../spinner/spinner.svelte";
  import type { ButtonOpts } from "./index.svelte.ts";
  import ButtonState from "./index.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const props: ButtonOpts & HTMLButtonAttributes = $props();
  const btn = new ButtonState(boxDerived(() => props));
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
