<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Avatar from "#lib/components/avatar/avatar.svelte";
  import AvatarImage from "#lib/components/avatar/avatar-image.svelte";
  import AvatarFallback from "#lib/components/avatar/avatar-fallback.svelte";

  const { Story } = defineMeta({
    component: Avatar,
    tags: ["autodocs"],
  });
</script>

<Story name="Avatar">
  <AvatarImage
    src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/blue.jpg"
  />
  <AvatarFallback>JD</AvatarFallback>
</Story>
