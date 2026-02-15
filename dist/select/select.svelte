<script lang="ts">
  import { selectVariants, type SelectVariants } from "@heroui/styles";
  import { Select, type SelectRootProps } from "bits-ui";
  import type { HTMLAttributes } from "svelte/elements";
  import { selectContext, SelectContext } from "./utils";

  let {
    type: mode = "single",
    allowDeselect,
    autocomplete,
    children,
    disabled,
    items,
    loop,
    name,
    onOpenChange,
    onOpenChangeComplete,
    onValueChange,
    open = $bindable(false),
    required,
    scrollAlignment,
    value = $bindable(),
    variant,
    ...props
  }: SelectRootProps &
    HTMLAttributes<HTMLDivElement> &
    SelectVariants = $props();

  // svelte-ignore state_referenced_locally
  const ctx = SelectContext.set(
    selectContext({
      type: mode,
      allowDeselect,
      autocomplete,
      disabled,
      items,
      loop,
      name,
      onOpenChange,
      onOpenChangeComplete,
      onValueChange: onValueChange as never,
      open,
      required,
      scrollAlignment,
      value: value as never,
      variant,
    }),
  );

  $effect(() => {
    $ctx = {
      type: mode,
      allowDeselect,
      autocomplete,
      disabled,
      items,
      loop,
      name,
      onOpenChange,
      onOpenChangeComplete,
      onValueChange: onValueChange as never,
      open,
      required,
      scrollAlignment,
      value: value as never,
      variant,
    };
  });
</script>

<div {...props} class={[selectVariants({ variant }).base(), props.class]}>
  <Select.Root
    {children}
    type={mode}
    {allowDeselect}
    {autocomplete}
    {disabled}
    {items}
    {loop}
    {name}
    {onOpenChange}
    {onOpenChangeComplete}
    {required}
    {scrollAlignment}
    onValueChange={onValueChange as never}
    bind:open
    bind:value={value as never}
  />
</div>
