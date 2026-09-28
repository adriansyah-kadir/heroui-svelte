<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import ListBoxState from "./list-box.svelte.ts";

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
  const listBox = ListBoxState.get();
  const textValue = $derived(value ?? node?.textContent.trim() ?? "");

  $effect(() => {
    return listBox.itemAdd(id, textValue);
  });
</script>

<label
  {...props}
  {id}
  bind:this={node}
  onkeydown={(ev) => {
    if (
      ev.code === "Space" ||
      (ev.code === "Enter" && ev.target === ev.currentTarget)
    ) {
      ev.preventDefault();
      ev.currentTarget.querySelector("input")?.click();
    }
  }}
  role="checkbox"
  tabindex="0"
  data-disabled={listBox.opts.disabled ?? disabled}
  data-slot="list-box-item"
  class={listboxItemVariants().item({ class: props.class?.toString() })}
>
  <input
    bind:checked={
      () => listBox.itemSelected(id), (toggle) => listBox.itemToggle(id, toggle)
    }
    disabled={listBox.opts.disabled ?? disabled}
    required={listBox.opts.required}
    name={listBox.opts.name}
    type="checkbox"
    value={textValue}
    hidden
  />
  {@render props.children?.()}
</label>
