<script lang="ts">
  import { Dialog } from "bits-ui";
  import { buttonVariants, type ButtonVariants } from "@heroui/styles";
  import { Button } from "..";
  import type { ComponentProps } from "svelte";
  const {
    size,
    variant,
    isIconOnly,
    fullWidth,
    ...props
  }: ComponentProps<typeof Button> & ButtonVariants = $props();
</script>

<Dialog.Trigger>
  {#snippet child(o)}
    <Button
      {...props}
      {...o.props}
      class={[
        buttonVariants({ size, variant, isIconOnly, fullWidth }),
        props.class,
      ]}
    />
  {/snippet}
</Dialog.Trigger>
