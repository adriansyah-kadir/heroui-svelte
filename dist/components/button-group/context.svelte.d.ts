import type { ButtonVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";
export type ButtonGroupOpts = ButtonVariants;
export declare class ButtonGroupContext extends Context {
    readonly opts: ButtonGroupOpts;
    constructor(opts: Getter<ButtonGroupOpts>);
}
