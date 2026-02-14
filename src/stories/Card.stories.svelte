<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Link,
  } from "$lib";
  import CardFooter from "$lib/card/card-footer.svelte";

  const { Story } = defineMeta({
    component: Card,
    args: {
      class: "max-w-[400px]"
    }
  });
</script>

<Story name="Default">
  <CardHeader>
    <CardTitle>Become an Acme Creator!</CardTitle>
    <CardDescription>
      Visit the Acme Creator Hub to sign up today and start earning credits from
      your fans and followers.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Link href="/">Creator Hub</Link>
  </CardFooter>
</Story>

<Story name="Secondary" args={{ variant: "secondary" }}>
  <CardHeader>
    <CardTitle>Become an Acme Creator!</CardTitle>
    <CardDescription>
      Visit the Acme Creator Hub to sign up today and start earning credits from
      your fans and followers.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <Link href="/">Creator Hub</Link>
  </CardFooter>
</Story>
