<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxContext } from "#lib";

  let {
    value,
    disabled,
    selected = $bindable(),
    ...props
  }: HTMLAttributes<HTMLLabelElement> & {
    value: string;
    selected?: boolean;
    disabled?: boolean;
  } = $props();

  const listBox = ListBoxContext.get();
  const itemSelected = $derived(listBox.itemSelected(value));

  $effect(() => {
    selected = itemSelected;
  });

  $effect(() => {
    return listBox.itemAdd(value);
  });
</script>

<label
  {...props}
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
  data-value={value}
  data-disabled={listBox.opts.disabled ?? disabled}
  data-slot="list-box-item"
  class={listboxItemVariants().item({ class: props.class?.toString() })}
>
  <input
    bind:checked={() => selected, (v) => listBox.itemToggle(value, v)}
    disabled={listBox.opts.disabled ?? disabled}
    required={listBox.opts.required}
    name={listBox.opts.name}
    type="checkbox"
    {value}
    hidden
  />
  {@render props.children?.()}
</label>
