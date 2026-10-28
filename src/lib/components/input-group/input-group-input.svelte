<script lang="ts">
  import { inputGroupVariants } from "@heroui/styles";
  import type { ComponentProps } from "svelte";
  import { Input, InputContext } from "#lib";
  import { box } from "@adriansyah/svelte-utils";

  let {
    value = $bindable(),
    checked = $bindable(),
    ...props
  }: ComponentProps<typeof Input> = $props();

  const input = new InputContext(
    () => props,
    box(
      () => value,
      (v) => (value = v),
    ),
    box(
      () => !!checked,
      (v) => (checked = v),
    ),
  );

  const className = $derived(
    inputGroupVariants(input.heroui).input({
      class: props.class?.toString(),
    }),
  );
</script>

<Input {...props} headless data-slot="input-group-input" class={className} />
