import type { HTMLInputAttributes } from "svelte/elements";
import { type InputOpts } from "#lib";
type Props = {
    headless?: boolean;
} & InputOpts & HTMLInputAttributes;
declare const Input: import("svelte").Component<Props, {}, "value" | "invalid" | "checked">;
type Input = ReturnType<typeof Input>;
export default Input;
