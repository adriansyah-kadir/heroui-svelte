<script lang="ts">
  import type { HTMLImgAttributes } from "svelte/elements";
  import { AvatarContext } from "./context.svelte";
  import { avatarVariants } from "@heroui/styles";

  type Props = HTMLImgAttributes;

  const props: Props = $props();
  const ctx = AvatarContext.get();
</script>

<img
  {...props}
  class={avatarVariants().image({
    ...ctx.opts,
    class: props.class?.toString(),
  })}
/>
