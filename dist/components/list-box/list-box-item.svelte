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
  }: HTMLAttributes<HTMLDivElement> & {
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
  $effect(() => filter?.register(value));
</script>

{#if !hidden}
  <div
    {...props}
    onkeydown={(ev) => {
      if (
        ev.code === "Space" ||
        (ev.code === "Enter" && ev.target === ev.currentTarget)
      ) {
        ev.preventDefault();
        ctx.setSelected(value, !selected);
      }
    }}
    onclick={() => ctx.setSelected(value, !selected)}
    role="checkbox"
    tabindex="0"
    data-value={value}
    data-disabled={ctx.opts.disabled ?? disabled}
    data-slot="list-box-item"
    class={listboxItemVariants().item({ class: props.class?.toString() })}
  >
    {#if ctx.opts.name}
      <input
        {@attach (node) => {
          const form = node.form;
          if (!form) return;
          const reset = () => ctx.setSelected(value, false);
          form.addEventListener("reset", reset);
          return () => form.removeEventListener("reset", reset);
        }}
        checked={ctx.isSelected(value)}
        disabled={ctx.opts.disabled ?? disabled}
        required={ctx.opts.required}
        name={ctx.opts.name}
        type={"checkbox"}
        {value}
        hidden
      />
    {/if}
    {@render props.children?.()}
  </div>
{/if}
