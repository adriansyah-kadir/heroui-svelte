import type { InputVariants } from "@heroui/styles";
import { Context, type Box, type Getter } from "svelte-utils";
export type InputOpts = {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    indeterminate?: boolean;
} & InputVariants;
export declare class InputContext extends Context {
    #private;
    readonly opts: InputOpts;
    get value(): string | number | undefined;
    set value(value: string | number | undefined);
    get checked(): boolean;
    set checked(checked: boolean);
    constructor(opts: Getter<InputOpts>, value?: Box<string | number>, checked?: Box<boolean>);
    get props(): {
        indeterminate: boolean | undefined;
        disabled: boolean | undefined;
        required: boolean | undefined;
        "data-invalid": boolean | undefined;
        "data-empty": boolean;
        name: string | undefined;
    };
    get heroui(): {
        variant: "primary" | "secondary" | undefined;
        fullWidth: boolean | undefined;
    };
    get empty(): boolean;
}
