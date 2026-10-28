<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { listboxItemVariants } from "@heroui/styles";
  import { ListBoxItemContext } from "#lib";
  import { box } from "@adriansyah/svelte-utils";
  import type { Snippet } from "svelte";

  let {
    value = crypto.randomUUID(),
    disabled,
    selected = $bindable(),
    child,
    ...props
  }: HTMLAttributes<HTMLDivElement> & {
    value?: string;
    selected?: boolean;
    disabled?: boolean;
    child?: Snippet<[ListBoxItemContext]>;
  } = $props();

  const ctx = new ListBoxItemContext(
    () => ({ value, disabled }),
    box(
      () => !!selected,
      (v) => (selected = v),
    ),
  );
</script>

{#if child}
  {@render child(ctx)}
{:else if ctx.visible}
  <div
    {...ctx.props(props)}
    data-slot="list-box-item"
    class={listboxItemVariants().item({ class: props.class?.toString() })}
  >
    {#if ctx.listbox.opts.name}
      <input
        {@attach (node) => {
          const form = node.form;
          if (!form) return;
          const reset = () => (ctx.selected = false);
          form.addEventListener("reset", reset);
          return () => form.removeEventListener("reset", reset);
        }}
        checked={ctx.selected}
        disabled={ctx.disabled}
        required={ctx.listbox.opts.required}
        name={ctx.listbox.opts.name}
        type={"checkbox"}
        {value}
        hidden
      />
    {/if}
    {@render props.children?.()}
  </div>
{/if}
