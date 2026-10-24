<script lang="ts">
  import {
    InputGroup,
    InputGroupInput,
    InputGroupPrefix,
    InputGroupSuffix,
    SearchIcon,
    CloseButton,
    InputContext,
  } from "#lib";
  import type { ComponentProps } from "svelte";
  import { box } from "svelte-utils";
  import { FilterContext } from "../filter/index.svelte";

  let {
    value = $bindable(),
    debounced = $bindable(),
    debounce = 300,
    placeholder,
    fullWidth,
    variant,
    disabled,
    indeterminate,
    invalid,
    name,
    required,
    ...props
  }: ComponentProps<typeof InputGroup> & {
    debounced?: string;
    debounce?: number;
  } = $props();

  const filter = FilterContext.getOr();
  const empty = $derived(value === undefined || value === "");
  const ctx = InputContext.getOr([
    () => ({
      disabled,
      fullWidth,
      indeterminate,
      invalid,
      name,
      required,
      variant,
    }),
    box(
      () => value,
      (v) => (value = v),
    ),
  ]);

  $effect(() => {
    value;
    const i = setTimeout(() => {
      debounced = value;
    }, debounce);
    return () => clearTimeout(i);
  });

  filter?.sync(
    box(
      () => debounced ?? "",
      (v) => (value = v),
    ),
  );
</script>

<InputGroup {...props} {fullWidth} data-empty={empty}>
  <InputGroupPrefix>
    <SearchIcon />
  </InputGroupPrefix>
  <InputGroupInput {placeholder} />
  <InputGroupSuffix class="px-2 in-data-[empty=true]:opacity-0">
    <CloseButton disabled={empty} onclick={() => (ctx.value = "")} />
  </InputGroupSuffix>
</InputGroup>
