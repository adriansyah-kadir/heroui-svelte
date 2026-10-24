<script module lang="ts">
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ListBox from "#lib/components/list-box/list-box.svelte";
  import ListBoxItem from "#lib/components/list-box/list-box-item.svelte";
  import ListBoxItemIndicator from "#lib/components/list-box/list-box-item-indicator.svelte";
  import Label from "#lib/components/label/label.svelte";
  import Description from "#lib/components/description/description.svelte";
  import ListBoxSection from "#lib/components/list-box/list-box-section.svelte";
  import Header from "#lib/components/header/header.svelte";
  import Collection from "#lib/components/collection/collection.svelte";
  import { randomInt } from "svelte-utils";
  import { Spinner } from "#lib";
    import Button from "#lib/components/button/button.svelte";

  const { Story } = defineMeta({
    component: ListBox,
    tags: ["autodocs"],
  });

  const images = [
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
    "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
  ];

  const users = [
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
      name: "Bob",
      email: "bob@gmail.com",
    },
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
      name: "Fred",
      email: "fred@gmail.com",
    },
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
      name: "Martha",
      email: "martha@gmail.com",
    },
  ];

  const lists = Array(100)
    .fill(1)
    .map((_, i) => ({
      i,
      avatar: images[Math.round(randomInt(0, 2))],
      name: crypto.randomUUID(),
      email: crypto.randomUUID(),
    }));

  const admins = [
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg",
      name: "Admin Bob",
      email: "bob@gmail.com",
    },
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/green.jpg",
      name: "Admin Fred",
      email: "fred@gmail.com",
    },
    {
      avatar:
        "https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/purple.jpg",
      name: "Admin Martha",
      email: "martha@gmail.com",
    },
  ];
</script>

<Story name="ListBox" args={{ class: "min-w-60", selected:["Fred"] }}>
  <ListBoxSection>
    <Header>Users</Header>
    {#each users as user, i}
      <ListBoxItem disabled={i===0} value={user.name}>
        <img
          alt="User"
          src={user.avatar}
          class="aspect-square rounded-full w-8"
        />
        <div class="flex flex-col">
          <Label>{user.name}</Label>
          <Description>{user.email}</Description>
        </div>
        <ListBoxItemIndicator />
      </ListBoxItem>
    {/each}
  </ListBoxSection>
  <ListBoxSection>
    <Header>Admins</Header>
    {#each admins as user}
      {let selected = $state(false)}
      <Button onclick={() => selected = !selected}>Toggle: {selected}</Button>
      <ListBoxItem bind:selected value={user.name}>
        <img
          alt="User"
          src={user.avatar}
          class="aspect-square rounded-full w-8"
        />
        <div class="flex flex-col">
          <Label>{user.name}</Label>
          <Description>{user.email}</Description>
        </div>
        <ListBoxItemIndicator />
      </ListBoxItem>
    {/each}
  </ListBoxSection>
</Story>

<Story name="Listbox Collection">
  <ListBoxSection class="h-80 overflow-auto">
    <Collection
      loadMore={async ({ offset }) => {
        const p = Promise.withResolvers();
        setTimeout(p.resolve, 3000);
        await p.promise;
        return lists.slice(offset, offset + 2);
      }}
      key={(t) => t.name}
      items={lists.slice(0, 2)}
    >
      {#snippet sentinel({ attach })}
        <div {@attach attach} class="list-box-item w-full shrink-0">
          <Spinner class="size-8" />
          <Label>Loading</Label>
        </div>
      {/snippet}
      {#snippet child({ item, index, key, loadingMore, isLast })}
        <ListBoxItem value={key} class="shrink-0">
          <img
            alt="User"
            src={item.avatar}
            class="aspect-square rounded-full w-8"
          />
          <div class="flex flex-col">
            <Label>{index}:{isLast && !loadingMore}:{item.name}</Label>
            <Description>{item.email}</Description>
          </div>
          <ListBoxItemIndicator />
        </ListBoxItem>
      {/snippet}
    </Collection>
  </ListBoxSection>
</Story>

<Story name="In form">
  {#snippet template(props)}
    <form>
      <ListBox {...props}>
        {#each users as user}
          <ListBoxItem value={user.name}>
            <img
              alt="User"
              src={user.avatar}
              class="aspect-square rounded-full w-8"
            />
            <div class="flex flex-col">
              <Label>{user.name}</Label>
              <Description>{user.email}</Description>
            </div>
            <ListBoxItemIndicator />
          </ListBoxItem>
        {/each}
      </ListBox>
      <Button type="reset">reset</Button>
    </form>
  {/snippet}
</Story>
