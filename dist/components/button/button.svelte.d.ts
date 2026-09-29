import type { HTMLButtonAttributes } from "svelte/elements";
import { type ButtonOpts } from "#lib";
type $$ComponentProps = ButtonOpts & HTMLButtonAttributes;
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
