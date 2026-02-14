<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    Link,
    LinkIcon,
    CardFooter,
  } from "$lib";
  import CircleDollarIcon from "$lib/icons/circle-dollar-icon.svelte";

  const { Story } = defineMeta({
    component: Card,
    args: {
      class: "max-w-[400px]",
    },
  });
</script>

<Story name="Default">
  <CircleDollarIcon />
  <CardHeader>
    <CardTitle>Become an Acme Creator!</CardTitle>
    <CardDescription>
      Visit the Acme Creator Hub to sign up today and start earning credits from
      your fans and followers.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Link href="/"
      >Creator Hub
      <LinkIcon />
    </Link>
  </CardFooter>
</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>
  <CircleDollarIcon />
  <CardHeader>
    <CardTitle>Become an Acme Creator!</CardTitle>
    <CardDescription>
      Visit the Acme Creator Hub to sign up today and start earning credits from
      your fans and followers.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Link href="/"
      >Creator Hub
      <LinkIcon />
    </Link>
  </CardFooter>
</Story>
