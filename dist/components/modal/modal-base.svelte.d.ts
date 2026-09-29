import type { HTMLDialogAttributes } from "svelte/elements";
import { type ModalVariants } from "@heroui/styles";
interface Props extends HTMLDialogAttributes {
    placement?: "top" | "bottom" | "center" | "auto";
    scroll?: ModalVariants["scroll"];
    size?: ModalVariants["size"];
    variant?: ModalVariants["variant"];
}
declare const ModalBase: import("svelte").Component<Props, {}, "">;
type ModalBase = ReturnType<typeof ModalBase>;
export default ModalBase;
