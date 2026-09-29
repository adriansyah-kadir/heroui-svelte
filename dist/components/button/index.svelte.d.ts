import type { Box } from "#lib/hooks/index.js";
import { Context } from "#lib/utils/index.js";
import type { ButtonVariants } from "@heroui/styles";
export type ButtonOpts = {
    focused?: boolean;
    hovered?: boolean;
    pending?: boolean;
    pressed?: boolean;
} & ButtonVariants;
export declare class ButtonContext extends Context {
    opts: ButtonOpts;
    constructor(opts: Box<ButtonOpts>);
    get props(): {
        "data-pending"?: boolean | undefined;
        "data-focused": boolean | undefined;
        "data-pressed": boolean | undefined;
        "data-focus-visible": boolean | undefined;
        "data-hovered": boolean | undefined;
    };
    get heroui(): {
        fullWidth: boolean | undefined;
        isIconOnly: boolean | undefined;
        size: "lg" | "md" | "sm" | undefined;
        variant: "primary" | "secondary" | "danger" | "danger-soft" | "ghost" | "outline" | "tertiary" | undefined;
    };
}
