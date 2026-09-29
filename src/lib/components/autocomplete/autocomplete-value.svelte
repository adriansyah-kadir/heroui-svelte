<script lang="ts">
  import { autocompleteVariants, tagVariants } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import CloseIcon from "#lib/icons/close-icon.svelte";
  import ListBoxContext from "../list-box/list-box.svelte.ts";
  import AutocompleteState from "./autocomplete.svelte.ts";

  const {
    placeholder,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    placeholder?: string;
  } = $props();
  const autocomplete = AutocompleteState.get();
  const listBox = ListBoxContext.get();
  const first = $derived(listBox.opts.selected.values().next().value);
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
  {#if listBox.opts.multiple && first !== undefined}
    <ul class="tag-group__list">
      {#each listBox.opts.selected?.values() as { key }}
        <span class={tag.base()}>
          {listBox.items.get(key)}
          <button
            class={tag.removeButton()}
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              listBox.itemUnpick(key);
            }}
          >
            <CloseIcon />
          </button>
        </span>
      {/each}
    </ul>
  {:else if first}
    {first.val}
  {:else}
    {placeholder ?? "-"}
  {/if}
</div>
