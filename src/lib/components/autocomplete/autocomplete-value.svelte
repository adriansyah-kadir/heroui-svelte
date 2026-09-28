<script lang="ts">
  import { autocompleteVariants, tagVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import CloseIcon from "#lib/icons/close-icon.svelte";
  import ListBox from "../list-box/list-box.svelte.ts";
  import AutocompleteState from "./autocomplete.svelte.ts";

  const {
    placeholder,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    placeholder?: string;
  } = $props();
  const autocomplete = AutocompleteState.ctx();
  const listBox = ListBox.get();
  const firstKey = $derived(listBox.opts.selected.values().next().value)
  const tag = $derived(
    tagVariants({
      size: "sm",
      variant:
        autocomplete.heroui.variant === "secondary" ? "surface" : "default",
    }),
  );
</script>

<div
  class={autocompleteVariants().value({
    class: ["tag-group", props.class?.toString()],
  })}
>
  {#if listBox.opts.multiple && firstKey !== undefined}
    <ul class="tag-group__list">
      {#each listBox.opts.selected?.values() as k}
        <span class={tag.base()}>
          {listBox.items.get(k)}
          <button
            class={tag.removeButton()}
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              listBox.itemUnpick(k);
            }}
          >
            <CloseIcon />
          </button>
        </span>
      {/each}
    </ul>
  {:else if firstKey}
    {listBox.items.get(firstKey)}
  {:else}
    {placeholder ?? "-"}
  {/if}
</div>
