import type { HTMLAttributes } from "svelte/elements";
import { type InputOpts } from "../input";
type Props = InputOpts & HTMLAttributes<HTMLTextAreaElement> & {
    value?: string;
};
declare const Textarea: import("svelte").Component<Props, {}, "value">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
