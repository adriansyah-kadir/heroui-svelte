import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "../../index.js";
type Props = InputOpts & HTMLAttributes<HTMLDivElement> & {
    checked?: boolean;
};
declare const Checkbox: import("svelte").Component<Props, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
