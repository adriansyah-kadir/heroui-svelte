<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import { Description, Label, Select } from "$lib";
  import SelectTrigger from "$lib/select/select-trigger.svelte";
  import SelectValue from "$lib/select/select-value.svelte";
  import SelectIndicator from "$lib/select/select-indicator.svelte";
  import SelectPopover from "$lib/select/select-popover.svelte";
  import SelectViewport from "$lib/select/select-viewport.svelte";
  import SelectScrollUpButton from "$lib/select/select-scroll-up-button.svelte";
  import SelectScrollDownButton from "$lib/select/select-scroll-down-button.svelte";
  import SelectGroup from "$lib/select/select-group.svelte";
  import SelectItem from "$lib/select/select-item.svelte";
  import SelectGroupHeading from "$lib/select/select-group-heading.svelte";
  import ListBoxItemIndicator from "$lib/list-box/list-box-item-indicator.svelte";

  const { Story } = defineMeta({
    component: Select,
    args: {
      class: "max-w-64",
    },
  });

  const themes = [
    { value: "light-monochrome", label: "Light Monochrome" },
    { value: "dark-green", label: "Dark Green" },
    { value: "svelte-orange", label: "Svelte Orange" },
    { value: "punk-pink", label: "Punk Pink" },
    { value: "ocean-blue", label: "Ocean Blue", disabled: true },
    { value: "sunset-orange", label: "Sunset Orange" },
    { value: "sunset-red", label: "Sunset Red" },
    { value: "forest-green", label: "Forest Green" },
    { value: "lavender-purple", label: "Lavender Purple", disabled: true },
    { value: "mustard-yellow", label: "Mustard Yellow" },
    { value: "slate-gray", label: "Slate Gray" },
    { value: "neon-green", label: "Neon Green" },
    { value: "coral-reef", label: "Coral Reef" },
    { value: "midnight-blue", label: "Midnight Blue" },
    { value: "crimson-red", label: "Crimson Red" },
    { value: "mint-green", label: "Mint Green", disabled: true },
    { value: "pastel-pink", label: "Pastel Pink" },
    { value: "golden-yellow", label: "Golden Yellow" },
    { value: "deep-purple", label: "Deep Purple" },
    { value: "turquoise-blue", label: "Turquoise Blue" },
    { value: "burnt-orange", label: "Burnt Orange" },
  ];
</script>

<Story name="Default" args={{ items: themes, required: true, variant: "secondary" }}>
  <Label>Theme</Label>
  <SelectTrigger>
    <SelectValue placeholder="Select Theme">
      {#snippet children(value)}
        {themes.find((e) => e.value === value)?.label ?? "Select Theme"}
      {/snippet}
    </SelectValue>
    <SelectIndicator />
  </SelectTrigger>
  <Description>Lorem ipsum dolor sit amet.</Description>
  <SelectPopover sideOffset={5}>
    <SelectScrollUpButton />
    <SelectViewport />
    <SelectScrollDownButton />
  </SelectPopover>
</Story>

<Story name="With Section" args={{ items: themes, required: true, variant: "secondary" }}>
  <Label isRequired>Theme</Label>
  <SelectTrigger>
    <SelectValue placeholder="Select Theme">
      {#snippet children(value)}
        {themes.find((e) => e.value === value)?.label ?? "Select Theme"}
      {/snippet}
    </SelectValue>
    <SelectIndicator />
  </SelectTrigger>
  <SelectPopover sideOffset={5}>
    <SelectScrollUpButton />
    <SelectViewport>
      <SelectGroup>
        {#each themes.toSpliced(0, Math.round(themes.length / 2)) as theme}
          <SelectItem value={theme.value} disabled={theme.disabled}>
            {#snippet children({ selected })}
              {theme.label}
              <ListBoxItemIndicator {selected} />
            {/snippet}
          </SelectItem>
        {/each}
      </SelectGroup>
      <hr />
      <SelectGroup>
        <SelectGroupHeading>Dark Themes</SelectGroupHeading>
        {#each themes.toSpliced(Math.round(themes.length / 2), themes.length) as theme}
          <SelectItem disabled={theme.disabled} value={theme.value}>
            {#snippet children({ selected })}
              {theme.label}
              <ListBoxItemIndicator {selected} />
            {/snippet}
          </SelectItem>
        {/each}
      </SelectGroup>
    </SelectViewport>
    <SelectScrollDownButton />
  </SelectPopover>
</Story>
