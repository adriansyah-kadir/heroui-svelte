<script module>
  import { defineMeta } from "@storybook/addon-svelte-csf";
  import Modal from "#lib/components/modal/modal.svelte";
  import Button from "#lib/components/button/button.svelte";
  import ModalBody from "#lib/components/modal/modal-body.svelte";
  import ModalFooter from "#lib/components/modal/modal-footer.svelte";
  import ModalHeader from "#lib/components/modal/modal-header.svelte";
  import ModalHeading from "#lib/components/modal/modal-heading.svelte";

  const { Story } = defineMeta({
    component: Modal,
    tags: ["autodocs"],
  });
</script>

<Button command="show-modal" commandfor="modal-id">Show dialog</Button>

<Story name="Modal" args={{ id: "modal-id", closeButton: true }}>
  <ModalHeader>
    <ModalHeading>Heading</ModalHeading>
  </ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, mollitia.
  </ModalBody>
  <ModalFooter>
    <Button>Submit</Button>
  </ModalFooter>
</Story>

<Story name="Modal scroll" args={{ id: "modal-id", closeButton: true }}>
  <ModalHeader>
    <ModalHeading>Heading</ModalHeading>
  </ModalHeader>
  <ModalBody>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias perferendis
    reprehenderit, veniam, itaque voluptate provident quasi doloremque
    repudiandae repellat quae necessitatibus temporibus, ut omnis. Eveniet
    dicta, fugit veniam maiores dolor similique minus ratione fugiat repellat
    voluptates quas in. Eaque labore consequuntur praesentium natus tenetur
    fugit et. Id, iusto. Cumque, nemo! Perspiciatis sequi doloremque eligendi!
    Ullam fugit consectetur reiciendis natus illo minus quas facere odit!
    Dolorem autem enim voluptatum quas similique voluptatem recusandae, delectus
    magnam perferendis atque consectetur ipsa placeat dolor, consequatur iure
    sunt. Pariatur labore, itaque tempora corrupti sint necessitatibus maiores
    rem accusantium, asperiores recusandae expedita quo distinctio qui nesciunt
    voluptatum voluptas laudantium possimus nihil ullam? Quaerat repudiandae
    laborum, error pariatur illo commodi corrupti sequi alias ut, explicabo
    officia aperiam nihil eius velit corporis numquam exercitationem saepe,
    perspiciatis rem a obcaecati accusamus hic quasi magnam? Voluptate inventore
    enim consequatur ad! Modi necessitatibus, porro ut cupiditate dolore
    provident, aut iure in facilis inventore quisquam quia eligendi natus non
    dolorem fugiat est placeat enim sit quod ab possimus, omnis odit assumenda!
    Natus reprehenderit at eligendi ab libero recusandae! Minus unde eaque
    magnam aut sequi quo! Ullam quas deleniti atque nostrum! Voluptatem, quasi
    eveniet! Voluptate, optio labore repudiandae laborum impedit error
    laboriosam! Nihil accusamus, similique asperiores architecto ullam tempora
    earum ducimus voluptates cumque temporibus esse quo laborum sint ab dolor
    officiis quam aperiam in totam illum saepe quidem quis alias modi. Impedit
    repellendus suscipit, totam magni velit cupiditate vero perspiciatis iste
    sit saepe porro minus quaerat praesentium esse odit incidunt et numquam
    sequi error enim tenetur quidem? Ut repellendus, totam perferendis quam
    optio magnam rem ullam perspiciatis maxime impedit reiciendis, officia aut?
    Expedita dolor error praesentium officiis fugiat quaerat ut, illum, fuga
    deleniti cupiditate quidem saepe tenetur fugit voluptatem quia nulla minima
    facere! Ipsum doloremque praesentium labore aliquam iure eaque at, harum
    recusandae?
  </ModalBody>
  <ModalFooter>
    <Button>Submit</Button>
  </ModalFooter>
</Story>
