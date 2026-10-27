<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { AutocompleteContext } from "#lib";
  import { autocompleteVariants } from "@heroui/styles";
  import AutocompleteClearButton from "./autocomplete-clear-button.svelte";
  import AutocompleteIndicator from "./autocomplete-indicator.svelte";
  import AutocompleteValue from "./autocomplete-value.svelte";
  import type { Snippet } from "svelte";

  type Props = HTMLAttributes<HTMLDivElement> & {
    child?: Snippet<[{ props: HTMLAttributes<any>; ctx: AutocompleteContext }]>;
  };

  const { children, child, ...props }: Props = $props();
  const ctx = AutocompleteContext.get();
  const popover = ctx.popover;
  const merged: HTMLAttributes<any> = $derived({
    ...props,
    tabindex: 0,
    role: "button",
    "data-open": popover.open,
    "data-popover": popover.node?.popover,
    onclick: (ev) => {
      props.onclick?.(ev);
      popover.toggle(undefined, ev.currentTarget);
    },
  });
</script>

{#if child}
  {@render child({ props: merged, ctx })}
{:else}
  <div
    {...merged}
    data-slot="autocomplete-trigger"
    class={autocompleteVariants().trigger({
      ...ctx.heroui,
      class: [
        props?.class?.toString(),
        "data-[open=true]:[[data-popover=''],[data-popover='auto']]:pointer-events-none",
      ],
    })}
  >
    {#if children}
      {@render children()}
    {:else}
      <AutocompleteValue placeholder={props.placeholder ?? undefined} />
      <AutocompleteIndicator />
      <AutocompleteClearButton />
    {/if}
  </div>
{/if}
