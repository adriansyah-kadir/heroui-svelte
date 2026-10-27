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
  import { box, watch } from "svelte-utils";
  import { FilterContext } from "../filter/index.svelte";

  type Props = ComponentProps<typeof InputGroup> & {
    debounced?: string;
    debounce?: number;
  };

  let {
    value = $bindable<string | undefined>(""),
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
  }: Props = $props();

  const filter = FilterContext.getOr();
  const empty = $derived(value === undefined || value === "");
  new InputContext(
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
  );

  watch(
    () => value ?? "",
    (currentValue) => {
      if (currentValue === value) return;
      const timeout = setTimeout(
        () => (debounced = String(currentValue)),
        Math.max(0, debounce),
      );
      return () => clearTimeout(timeout);
    },
  );

  watch(
    () => debounced ?? "",
    (currentValue) => {
      if (value !== currentValue) value = currentValue;
    },
  );

  filter?.sync(
    box(
      () => debounced ?? "",
      (currentValue) => (debounced = currentValue),
    ),
  );

  function clear() {
    value = "";
    debounced = "";
  }
</script>

<InputGroup {...props} {fullWidth} data-empty={empty}>
  <InputGroupPrefix>
    <SearchIcon />
  </InputGroupPrefix>
  <InputGroupInput {placeholder} />
  <InputGroupSuffix class="px-2 in-data-[empty=true]:opacity-0">
    <CloseButton disabled={empty || disabled} onclick={clear} />
  </InputGroupSuffix>
</InputGroup>
