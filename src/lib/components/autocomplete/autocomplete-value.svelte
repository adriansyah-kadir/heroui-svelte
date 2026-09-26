<script lang="ts">
  import {
    autocompleteVariants,
    tagGroupVariants,
    tagVariants,
  } from "@heroui/styles";
  import type { HTMLAttributes } from "svelte/elements";
  import { getListBoxCombobox } from "../list-box/list-box-context.svelte";
  import CloseIcon from "#lib/icons/close-icon.svelte";
  import { getInputProps } from "../input/input-context";

  const {
    placeholder,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    placeholder?: string;
  } = $props();
  const combobox = getListBoxCombobox();
  const hasselected = $derived(combobox.selected.length > 0);
  const ctx = getInputProps();
  const tag = $derived(
    tagVariants({
      size: "sm",
      variant: ctx.variant === "secondary" ? "surface" : "default",
    }),
  );
</script>

<div
  class={autocompleteVariants().value({
    class: ["tag-group", props.class?.toString()],
  })}
>
  {#if combobox.multiple && hasselected}
    <ul class="tag-group__list">
      {#each combobox.selected as [k, v]}
        <span class={tag.base()}>
          {v}
          <button
            class={tag.removeButton()}
            onclick={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              combobox.unpick(k);
            }}
          >
            <CloseIcon />
          </button>
        </span>
      {/each}
    </ul>
  {:else if hasselected}
    {combobox.selected.at(0)?.[1]}
  {:else}
    {placeholder ?? "-"}
  {/if}
</div>
