import { AlertDialog } from "bits-ui";
import { type AlertDialogVariants } from "@heroui/styles";
type Props = AlertDialog.RootProps & AlertDialogVariants;
declare const AlertDialog: import("svelte").Component<Props, {}, "open">;
type AlertDialog = ReturnType<typeof AlertDialog>;
export default AlertDialog;
