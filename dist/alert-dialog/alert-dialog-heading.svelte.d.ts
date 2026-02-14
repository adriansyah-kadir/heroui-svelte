import { type AlertDialogVariants } from "@heroui/styles";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = HTMLAttributes<HTMLHeadingElement> & {
    heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & AlertDialogVariants;
declare const AlertDialogHeading: import("svelte").Component<$$ComponentProps, {}, "">;
type AlertDialogHeading = ReturnType<typeof AlertDialogHeading>;
export default AlertDialogHeading;
