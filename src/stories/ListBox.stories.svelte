<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import ListBox from "#lib/components/list-box/list-box.svelte";
  import ListBoxItem from "#lib/components/list-box/list-box-item.svelte";
  import ListBoxItemIndicator from "#lib/components/list-box/list-box-item-indicator.svelte";
  import Label from "#lib/components/label/label.svelte";
  import Description from "#lib/components/description/description.svelte";
  import ListBoxSection from "#lib/components/list-box/list-box-section.svelte";
    import Header from "#lib/components/header/header.svelte";

  const { Story } = defineMeta({
    component: ListBox,
    tags: ["autodocs"],
  });

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

<Story name="ListBox" args={{ class: "max-w-xs" }}>
  <ListBoxSection>
    <Header>
      Users
    </Header>
    {#each users as user}
      <ListBoxItem>
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
    <Header>
      Admins
    </Header>
    {#each admins as user}
      <ListBoxItem>
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
