import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts, type InputValue } from "../../index.js";
type Props = InputOpts & HTMLAttributes<HTMLDivElement> & {
    value?: InputValue;
    checked?: boolean;
};
declare const InputGroup: import("svelte").Component<Props, {}, "checked" | "value">;
type InputGroup = ReturnType<typeof InputGroup>;
export default InputGroup;
