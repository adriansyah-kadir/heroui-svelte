import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "#lib";
type Props = InputOpts & HTMLAttributes<HTMLDivElement>;
declare const TextField: import("svelte").Component<Props, {}, "value" | "checked">;
type TextField = ReturnType<typeof TextField>;
export default TextField;
