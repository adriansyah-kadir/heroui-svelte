import type { ButtonVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";
export type ButtonOpts = {
    focused?: boolean;
    hovered?: boolean;
    pending?: boolean;
    pressed?: boolean;
    disabled?: boolean;
} & ButtonVariants;
export declare class ButtonContext extends Context {
    readonly opts: ButtonOpts;
    constructor(opts: Getter<ButtonOpts>);
    get props(): {
        "data-pending"?: boolean | undefined;
        "data-disabled": boolean | undefined;
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
