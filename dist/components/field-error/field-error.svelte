<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { fieldErrorVariants } from "@heroui/styles";
  import { InputContext } from "#lib";

  type Props = HTMLAttributes<HTMLDivElement>;

  const {
    visible,
    ...props
  }: Props & {
    visible?: boolean;
  } = $props();
  const input = InputContext.getOr([() => ({})]);
  const show = $derived(visible ?? input.opts.invalid);
</script>

<div
  {...props}
  {...show
    ? {
        "data-visible": true,
      }
    : {}}
  data-slot="field-error"
  class={fieldErrorVariants({ class: ["duration-0", props.class?.toString()] })}
>
  {@render props.children?.()}
</div>
