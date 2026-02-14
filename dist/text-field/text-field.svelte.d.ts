import { TextFieldContext } from "./utils.svelte";
import type { WithChildren } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = TextFieldContext & WithChildren<HTMLAttributes<HTMLDivElement>>;
declare const TextField: import("svelte").Component<$$ComponentProps, {}, "">;
type TextField = ReturnType<typeof TextField>;
export default TextField;
