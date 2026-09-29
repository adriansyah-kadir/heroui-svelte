import { type SpinnerVariants } from "@heroui/styles";
import type { HTMLAttributes } from "svelte/elements";
interface Props extends HTMLAttributes<HTMLSpanElement> {
    size?: SpinnerVariants["size"];
    color?: SpinnerVariants["color"];
}
declare const Spinner: import("svelte").Component<Props, {}, "">;
type Spinner = ReturnType<typeof Spinner>;
export default Spinner;
