import type { HTMLInputAttributes } from "svelte/elements";
import { type InputOpts } from "../../index.js";
type Props = {
    headless?: boolean;
} & InputOpts & HTMLInputAttributes;
declare const Input: import("svelte").Component<Props, {}, "invalid" | "checked" | "value">;
type Input = ReturnType<typeof Input>;
export default Input;
