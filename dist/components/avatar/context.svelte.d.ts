import type { AvatarVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";
export type AvatarOpts = AvatarVariants;
export declare class AvatarContext extends Context {
    readonly opts: AvatarOpts;
    constructor(opts: Getter<AvatarOpts>);
}
