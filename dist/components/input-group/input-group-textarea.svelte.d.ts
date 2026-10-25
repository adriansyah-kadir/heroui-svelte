import { type InputOpts } from "../../index.js";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = InputOpts & HTMLAttributes<HTMLTextAreaElement> & {
    value?: string;
};
declare const InputGroupTextarea: import("svelte").Component<$$ComponentProps, {}, "value">;
type InputGroupTextarea = ReturnType<typeof InputGroupTextarea>;
export default InputGroupTextarea;
