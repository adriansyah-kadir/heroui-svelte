import type { InputVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";
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
    get value(): string | number;
    set value(value: string | number);
    get checked(): boolean;
    set checked(checked: boolean);
    constructor(opts: Getter<InputOpts>, value?: import("svelte-utils").Box<string | number>, checked?: import("svelte-utils").Box<boolean>);
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
