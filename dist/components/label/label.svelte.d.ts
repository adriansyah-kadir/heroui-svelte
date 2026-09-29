import type { HTMLAttributes } from "svelte/elements";
type Props = HTMLAttributes<HTMLParagraphElement> & {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
};
declare const Label: import("svelte").Component<Props, {}, "">;
type Label = ReturnType<typeof Label>;
export default Label;
