<script lang="ts">
  import { inputVariants } from "@heroui/styles";
  import type { HTMLInputAttributes } from "svelte/elements";
  import InputContext, { type InputOpts } from "./input.svelte.ts";
  import { boxDerived } from "#lib/hooks/boxed.svelte.ts";

  type Props = {
    headless?: boolean;
  } & InputOpts &
    HTMLInputAttributes;

  let {
    value = $bindable(),
    checked = $bindable(),
    invalid = $bindable(),
    fullWidth,
    variant,
    disabled,
    required,
    name,
    headless,
    indeterminate,
    ...props
  }: Props = $props();

  const input = InputContext.getOr(
    boxDerived(
      () => ({
        checked,
        disabled,
        fullWidth,
        indeterminate,
        invalid,
        name,
        required,
        value,
        variant,
      }),
      (v) => ({ checked, value } = v),
    ),
  );

  const className = $derived(
    headless
      ? props.class
      : inputVariants({ ...input.heroui, class: props.class?.toString() }),
  );
  const mergedProps = $derived({ ...props, ...input.props, class: className });
</script>

{#if props.type === "checkbox"}
  <input {...mergedProps} bind:checked={input.checked} type="checkbox" />
{:else}
  <input {...mergedProps} bind:value={input.value} />
{/if}
