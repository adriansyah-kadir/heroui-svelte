<script lang="ts">
  import { listboxVariants } from "@heroui/styles";
  import { listBoxContext, ListBoxContext } from "./utils";
  import { ToggleGroup, type ToggleGroupRootProps } from "bits-ui";

  let {
    variant,
    value = "",
    type: mode = "single",
    ...props
  }: ToggleGroupRootProps & ListBoxContext = $props();

  // svelte-ignore state_referenced_locally
  const ctx = ListBoxContext.set(
    listBoxContext({ variant, type: mode, value: value as never }),
  );

  $effect(() => {
    ctx.set({ variant, type: mode, value: value as never });
  });
</script>

<ToggleGroup.Root
  {...props as any}
  type={mode}
  bind:value
  class={[listboxVariants({ variant }), props.class]}
/>
