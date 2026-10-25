<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import { InputContext, type InputOpts } from "../../index.js";
  import { box, coalesce } from "svelte-utils";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    value = $bindable(),
    ...props
  }: InputOpts & HTMLAttributes<HTMLTextAreaElement> & { value?: string } =
    $props();

  const ctx = new InputContext(
    () => props,
    box(
      () => value,
      (v) => (value = v),
    ),
  );

  const className = $derived(
    inputGroupVariants(ctx.heroui).input({
      class: props.class?.toString(),
    }),
  );
</script>

<textarea
  {...coalesce(props, ctx.props)}
  data-slot="input-group-textarea"
  class={className}
></textarea>
