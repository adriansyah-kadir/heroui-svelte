import { type TextAreaVariants } from "@heroui/styles";
import type { HTMLTextareaAttributes } from "svelte/elements";
type $$ComponentProps = HTMLTextareaAttributes & TextAreaVariants & {
    invalid?: boolean;
    headless?: boolean;
};
declare const Textarea: import("svelte").Component<$$ComponentProps, {}, "value" | "invalid">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
