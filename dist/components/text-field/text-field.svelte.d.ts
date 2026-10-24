import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "../../index.js";
type Props = InputOpts & HTMLAttributes<HTMLDivElement> & {
    value?: any;
    checked?: boolean;
};
declare const TextField: import("svelte").Component<Props, {}, "checked" | "value">;
type TextField = ReturnType<typeof TextField>;
export default TextField;
