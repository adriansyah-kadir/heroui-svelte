import { Dialog, type DialogRootProps } from "bits-ui";
import { DialogContext } from "./utils.svelte";
type $$ComponentProps = DialogRootProps & DialogContext;
declare const Dialog: import("svelte").Component<$$ComponentProps, {}, "open">;
type Dialog = ReturnType<typeof Dialog>;
export default Dialog;
