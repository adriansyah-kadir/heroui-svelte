import type { ButtonOpts } from "./index.svelte.ts";
import type { HTMLButtonAttributes } from "svelte/elements";
type $$ComponentProps = ButtonOpts & HTMLButtonAttributes;
declare const Button: import("svelte").Component<$$ComponentProps, {}, "">;
type Button = ReturnType<typeof Button>;
export default Button;
