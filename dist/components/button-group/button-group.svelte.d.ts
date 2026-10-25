import type { HTMLAttributes } from "svelte/elements";
import { type ButtonGroupOpts } from "./context.svelte";
type Props = ButtonGroupOpts & HTMLAttributes<HTMLDivElement>;
declare const ButtonGroup: import("svelte").Component<Props, {}, "">;
type ButtonGroup = ReturnType<typeof ButtonGroup>;
export default ButtonGroup;
