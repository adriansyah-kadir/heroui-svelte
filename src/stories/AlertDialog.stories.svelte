<script lang="ts" module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import {
    AlertDialog,
    AlertDialogBackdrop,
    AlertDialogBody,
    AlertDialogCloseTrigger,
    AlertDialogContainer,
    AlertDialogDialog,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogHeading,
    AlertDialogIcon,
    AlertDialogTrigger,
  } from "$lib";
  import AlertDialogCancel from "$lib/alert-dialog/alert-dialog-cancel.svelte";
  import AlertDialogConfirm from "$lib/alert-dialog/alert-dialog-confirm.svelte";

  const { Story } = defineMeta({
    component: AlertDialog,
    args: {
      variant: "blur",
    },
  });
</script>


<Story name="Default" args={{ status: "default" }}>
  <AlertDialogTrigger>Delete post?</AlertDialogTrigger>
  <AlertDialogBackdrop>
    <AlertDialogContainer>
      <AlertDialogDialog>
        <AlertDialogCloseTrigger />
        <AlertDialogHeader>
          <AlertDialogIcon />
          <AlertDialogHeading>Delete Post?</AlertDialogHeading>
        </AlertDialogHeader>
        <AlertDialogBody
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          autem!</AlertDialogBody
        >
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogConfirm>Delete</AlertDialogConfirm>
        </AlertDialogFooter>
      </AlertDialogDialog>
    </AlertDialogContainer>
  </AlertDialogBackdrop>
</Story>

<Story name="Success" args={{ status: "success" }}>
  <AlertDialogTrigger>Delete post?</AlertDialogTrigger>
  <AlertDialogBackdrop>
    <AlertDialogContainer>
      <AlertDialogDialog>
        <AlertDialogCloseTrigger />
        <AlertDialogHeader>
          <AlertDialogIcon />
          <AlertDialogHeading>Delete Post?</AlertDialogHeading>
        </AlertDialogHeader>
        <AlertDialogBody
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          autem!</AlertDialogBody
        >
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogConfirm>Delete</AlertDialogConfirm>
        </AlertDialogFooter>
      </AlertDialogDialog>
    </AlertDialogContainer>
  </AlertDialogBackdrop>
</Story>

<Story name="Danger" args={{ status: "danger" }}>
  <AlertDialogTrigger>Delete post?</AlertDialogTrigger>
  <AlertDialogBackdrop>
    <AlertDialogContainer>
      <AlertDialogDialog>
        <AlertDialogCloseTrigger />
        <AlertDialogHeader>
          <AlertDialogIcon />
          <AlertDialogHeading>Delete Post?</AlertDialogHeading>
        </AlertDialogHeader>
        <AlertDialogBody
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          autem!</AlertDialogBody
        >
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogConfirm>Delete</AlertDialogConfirm>
        </AlertDialogFooter>
      </AlertDialogDialog>
    </AlertDialogContainer>
  </AlertDialogBackdrop>
</Story>

<Story name="Accent" args={{ status: "accent" }}>
  <AlertDialogTrigger>Delete post?</AlertDialogTrigger>
  <AlertDialogBackdrop>
    <AlertDialogContainer>
      <AlertDialogDialog>
        <AlertDialogCloseTrigger />
        <AlertDialogHeader>
          <AlertDialogIcon />
          <AlertDialogHeading>Delete Post?</AlertDialogHeading>
        </AlertDialogHeader>
        <AlertDialogBody
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          autem!</AlertDialogBody
        >
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogConfirm>Delete</AlertDialogConfirm>
        </AlertDialogFooter>
      </AlertDialogDialog>
    </AlertDialogContainer>
  </AlertDialogBackdrop>
</Story>

<Story name="Scroll">
  <AlertDialogTrigger>Scrollable Content</AlertDialogTrigger>
  <AlertDialogBackdrop>
    <AlertDialogContainer>
      <AlertDialogDialog>
        <AlertDialogCloseTrigger />
        <AlertDialogHeader>
          <AlertDialogIcon />
          <AlertDialogHeading>AlertDialog</AlertDialogHeading>
        </AlertDialogHeader>
        <AlertDialogBody class="space-y-2">
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
        </AlertDialogBody>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogConfirm>Delete</AlertDialogConfirm>
        </AlertDialogFooter>
      </AlertDialogDialog>
    </AlertDialogContainer>
  </AlertDialogBackdrop>
</Story>
