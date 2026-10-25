<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { AvatarContext, type AvatarOpts } from "./context.svelte";
  import { avatarVariants } from "@heroui/styles";

  type Props = AvatarOpts & HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();
  const ctx = AvatarContext.get();
</script>

<div
  class={avatarVariants().fallback({
    ...ctx.opts,
    class: props.class?.toString(),
  })}
>
  {@render props.children?.()}
</div>
