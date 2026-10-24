import type { ModalVariants } from "@heroui/styles";
import { Context, DialogState, type Getter } from "svelte-utils";
export type ModalOpts = ModalVariants & {
    placement?: "top" | "bottom" | "center" | "auto";
};
export declare class ModalContext extends Context {
    readonly opts: ModalOpts;
    dialog: DialogState;
    constructor(opts: Getter<ModalOpts>);
    get heroui(): {
        scroll: "inside" | "outside" | undefined;
        size: "lg" | "md" | "sm" | "cover" | "full" | "xs" | undefined;
        variant: "blur" | "opaque" | "transparent" | undefined;
    };
}
