<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import Button from "../button/button.svelte";
  import { ModalContext } from "./index.svelte";
  import type { ComponentProps, Snippet } from "svelte";

  const {
    action = "show",
    child,
    ...props
  }: ComponentProps<typeof Button> & {
    action?: "show" | "close";
    child?: Snippet<[{ props: HTMLAttributes<any> }]>;
  } = $props();

  const ctx = ModalContext.get();
  const merged: HTMLAttributes<any> = $derived({
    ...props,
    onclick: (ev) => {
      ctx.dialog.toggle?.();
      props.onclick?.(ev);
    },
  });
</script>

{#if child}
  {@render child({ props: merged })}
{:else}
  <Button {...merged} type="button">
    {@render props.children?.()}
  </Button>
{/if}
