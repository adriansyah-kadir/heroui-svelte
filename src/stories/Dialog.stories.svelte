<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    Button,
    Dialog,
    DialogBackdrop,
    DialogBody,
    DialogCloseTrigger,
    DialogContainer,
    DialogDialog,
    DialogFooter,
    DialogHeader,
    DialogHeading,
    DialogIcon,
    DialogTrigger,
  } from "$lib";

  const { Story } = defineMeta({
    component: Dialog,
    args: {
      variant: "blur",
      placement: "auto",
    },
  });
</script>

<Story name="Dialog">
  <DialogTrigger>Open a dialog</DialogTrigger>
  <DialogBackdrop>
    <DialogContainer>
      <DialogDialog>
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogIcon />
          <DialogHeading>Dialog</DialogHeading>
        </DialogHeader>
        <DialogBody
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          autem!</DialogBody
        >
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogDialog>
    </DialogContainer>
  </DialogBackdrop>
</Story>

<Story name="Dialog scroll">
  <DialogTrigger>Scrollable Content</DialogTrigger>
  <DialogBackdrop>
    <DialogContainer>
      <DialogDialog>
        <DialogCloseTrigger />
        <DialogHeader>
          <DialogIcon />
          <DialogHeading>Dialog</DialogHeading>
        </DialogHeader>
        <DialogBody class="space-y-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsa
          quae corrupti molestias, voluptatem numquam delectus, labore ex quas
          fugit aliquid maiores sit eum magnam quidem consequatur, est
          reprehenderit. Totam. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Sapiente quibusdam nostrum Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo odio commodi deleniti,
          ratione, soluta eveniet modi ipsum dicta perferendis similique
          distinctio reprehenderit fugiat consequatur? Nemo vel eos a architecto
          eligendi. Fugit eius, dignissimos maiores quibusdam facilis at magnam
          consequatur in, vel quas aut sapiente consectetur neque non dolores,
          delectus quae sunt! Architecto sapiente corporis dolorem amet natus
          atque perferendis ut incidunt sit et, aspernatur consequuntur nemo
          quae quidem, harum accusamus porro, voluptatibus eius iste molestias
          blanditiis eos. Iste earum animi culpa repellat esse magni, facilis
          fugiat dicta sunt est mollitia rerum, delectus temporibus nemo labore,
          obcaecati dignissimos ex aut ea. debitis animi repellat sunt minus
          doloremque voluptatem excepturi quia tempora, nobis qui voluptatibus
          nam laborum ex provident accusantium. Tempora?
        </DialogBody>
        <DialogFooter>
          <Button>Save</Button>
        </DialogFooter>
      </DialogDialog>
    </DialogContainer>
  </DialogBackdrop>
</Story>
