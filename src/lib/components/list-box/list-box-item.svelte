<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import {
    getListBoxCombobox,
    getListBoxProps,
  } from "./list-box-context.svelte";
  import { listboxItemVariants } from "@heroui/styles";

  const {
    id = crypto.randomUUID(),
    value,
    disabled,
    selected,
    ...props
  }: HTMLAttributes<HTMLLabelElement> & {
    id?: string;
    value?: string;
    selected?: boolean;
    disabled?: boolean;
  } = $props();

  let node = $state<HTMLElement>();
  const combobox = getListBoxCombobox();
  const { name } = getListBoxProps();
  const textValue = $derived(value ?? node?.textContent ?? "");

  $effect(() => {
    return combobox.add(id, textValue);
  });
</script>

<label
  {...props}
  {id}
  bind:this={node}
  role="checkbox"
  tabindex="0"
  data-disabled={disabled}
  data-slot="list-box-item"
  class={listboxItemVariants().item({ class: props.class?.toString() })}
>
  <input
    bind:checked={
      () => combobox.picked(id), (toggle) => combobox.toggle(id, toggle)
    }
    {name}
    type="checkbox"
    value={textValue}
    hidden
  />
  {@render props.children?.()}
</label>
