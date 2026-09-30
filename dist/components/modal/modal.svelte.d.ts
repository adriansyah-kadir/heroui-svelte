import type { HTMLAttributes } from "svelte/elements";
import { type ModalOpts } from "#lib";
type Props = HTMLAttributes<HTMLDivElement> & ModalOpts;
declare const Modal: import("svelte").Component<Props, {}, "">;
type Modal = ReturnType<typeof Modal>;
export default Modal;
