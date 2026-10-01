<script lang="ts">
  import {
    InputGroup,
    InputGroupInput,
    InputGroupPrefix,
    InputGroupSuffix,
    SearchIcon,
    CloseButton,
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

  $effect(() => {
    value;
    const i = setTimeout(() => {
      debounced = value;
    }, debounce);
    return () => clearTimeout(i);
  });

  $inspect(debounced);
</script>

<InputGroup {...props} bind:value data-empty={empty}>
  <InputGroupPrefix>
    <SearchIcon />
  </InputGroupPrefix>
  <InputGroupInput {placeholder} />
  <InputGroupSuffix class="px-2 in-data-[empty=true]:opacity-0">
    <CloseButton disabled={empty} onclick={() => (value = "")} />
  </InputGroupSuffix>
</InputGroup>
