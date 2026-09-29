import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "#lib";
type Props = InputOpts & HTMLAttributes<HTMLDivElement>;
declare const InputGroup: import("svelte").Component<Props, {}, "value" | "checked">;
type InputGroup = ReturnType<typeof InputGroup>;
export default InputGroup;
