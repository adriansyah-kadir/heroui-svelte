import { DialogState, type Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import type { ModalVariants } from "@heroui/styles";
export type ModalOpts = ModalVariants & {
    placement?: "top" | "bottom" | "center" | "auto";
};
export declare class ModalContext extends Context {
    #private;
    get opts(): ModalOpts;
    dialog: DialogState;
    constructor(opts: Box<ModalOpts>);
    get heroui(): {
        scroll: "inside" | "outside" | undefined;
        size: "lg" | "md" | "sm" | "cover" | "full" | "xs" | undefined;
        variant: "blur" | "opaque" | "transparent" | undefined;
    };
}
