import Button from "../button/button.svelte";
import type { ComponentProps } from "svelte";
type $$ComponentProps = ComponentProps<typeof Button> & {
    action?: "show" | "close";
};
declare const ModalTrigger: import("svelte").Component<$$ComponentProps, {}, "">;
type ModalTrigger = ReturnType<typeof ModalTrigger>;
export default ModalTrigger;
