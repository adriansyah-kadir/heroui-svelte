import type { HTMLDialogAttributes } from "svelte/elements";
import { type ModalOpts } from "#lib";
type Props = HTMLDialogAttributes & ModalOpts & {
    closeButton?: boolean;
};
declare const Modal: import("svelte").Component<Props, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
