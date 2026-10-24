<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxContext } from "../../index.js";
  import { FilterContext } from "../filter/index.svelte";
  import { watch } from "svelte-utils";

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

  const filter = FilterContext.getOr();
  const ctx = ListBoxContext.get();
  const hidden = $derived(filter && !filter.matches(value));

  watch(
    () => selected,
    (curr) => {
      if (curr === ctx.isSelected(value)) return;
      ctx.setSelected(value, curr ?? ctx.isSelected(value));
    },
  );

  watch(
    () => ctx.isSelected(value),
    (curr) => {
      if (curr === selected) return;
      selected = curr;
    },
  );

  $effect(() => () => ctx.setSelected(value, false));
</script>

{#if !hidden}
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
    data-disabled={ctx.opts.disabled ?? disabled}
    data-slot="list-box-item"
    class={listboxItemVariants().item({ class: props.class?.toString() })}
  >
    <input
      {@attach (node) => {
        const form = node.form;
        if (!form) return;
        const reset = () => ctx.setSelected(value, false);
        form.addEventListener("reset", reset);
        return () => form.removeEventListener("reset", reset);
      }}
      checked={ctx.isSelected(value)}
      onchange={(ev) => ctx.setSelected(value, ev.currentTarget.checked)}
      disabled={ctx.opts.disabled ?? disabled}
      required={ctx.opts.required}
      name={ctx.opts.name}
      type={"checkbox"}
      {value}
      hidden
    />
    {@render props.children?.()}
  </label>
{/if}
