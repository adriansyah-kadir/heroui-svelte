<script lang="ts">
  import {
    InputGroup,
    InputGroupInput,
    InputGroupPrefix,
    InputGroupSuffix,
    SearchIcon,
    CloseButton,
    InputContext,
    boxDerived,
  } from "#lib";
  import type { ComponentProps } from "svelte";

  let {
    value = $bindable(),
    debounced = $bindable(),
    debounce = 300,
    placeholder,
    ...props
  }: ComponentProps<typeof InputGroup> & {
    debounced?: string;
    debounce?: number;
  } = $props();

  const empty = $derived(value === undefined || value === "");
  const ctx = InputContext.getOr(
    boxDerived(
      () => ({ value }),
      (v) => ({ value } = v),
    ),
  );

  $effect(() => {
    value;
    const i = setTimeout(() => {
      debounced = value;
    }, debounce);
    return () => clearTimeout(i);
  });
</script>

<InputGroup {...props} data-empty={empty}>
  <InputGroupPrefix>
    <SearchIcon />
  </InputGroupPrefix>
  <InputGroupInput {placeholder} />
  <InputGroupSuffix class="px-2 in-data-[empty=true]:opacity-0">
    <CloseButton disabled={empty} onclick={() => (ctx.value = "")} />
  </InputGroupSuffix>
</InputGroup>
