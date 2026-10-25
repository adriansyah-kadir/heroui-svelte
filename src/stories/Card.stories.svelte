<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Card from "#lib/components/card/card.svelte";
  import CardHeader from "#lib/components/card/card-header.svelte";
  import CardTitle from "#lib/components/card/card-title.svelte";
  import CardDescription from "#lib/components/card/card-description.svelte";
  import CardFooter from "#lib/components/card/card-footer.svelte";

  const { Story } = defineMeta({
    component: Card,
    tags: ["autodocs"],
  });
</script>

<Story name="Card" args={{style: "max-width: 400px"}}>
  <CardHeader>
    <CardTitle>Become an Acme Creator!</CardTitle>
    <CardDescription>
      Visit the Acme Creator Hub to sign up today and start earning credits from
      your fans and followers.
    </CardDescription>
  </CardHeader>
  <CardFooter>
    <a href="#">Created hub</a>
  </CardFooter>
</Story>
