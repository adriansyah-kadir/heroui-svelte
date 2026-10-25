<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { AvatarContext, type AvatarOpts } from "./context.svelte";
  import { avatarVariants } from "@heroui/styles";

  type Props = AvatarOpts & HTMLAttributes<HTMLDivElement>;

  const props: Props = $props();
  const ctx = new AvatarContext(() => props);
</script>

<div
  class={avatarVariants().base({ ...ctx.opts, class: props.class?.toString() })}
>
  {@render props.children?.()}
</div>
