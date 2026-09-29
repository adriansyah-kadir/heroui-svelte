import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "#lib";
type Props = InputOpts & HTMLAttributes<HTMLDivElement>;
declare const Checkbox: import("svelte").Component<Props, {}, "checked">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
