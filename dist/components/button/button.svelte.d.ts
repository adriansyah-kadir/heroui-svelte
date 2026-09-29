import type { HTMLAttributes } from "svelte/elements";
import { type ButtonOpts } from "#lib";
type $$ComponentProps = ButtonOpts & HTMLAttributes<HTMLElement> & {
    href?: string;
};
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
