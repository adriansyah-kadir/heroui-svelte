<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { InputContext, type InputOpts } from "../input";
  import { box, coalesce } from "@adriansyah/svelte-utils";
  import { textAreaVariants } from "@heroui/styles";

  type Props = InputOpts &
    HTMLAttributes<HTMLTextAreaElement> & {
      value?: string;
    };

  let { value = $bindable(), ...props }: Props = $props();

  const ctx = new InputContext(
    () => props,
    box(
      () => value,
      (v) => (value = v),
    ),
  );
</script>

<textarea
  {...coalesce(props, ctx.props)}
  class={textAreaVariants({ ...ctx.heroui, class: props.class?.toString() })}
  bind:value={ctx.value}
></textarea>
