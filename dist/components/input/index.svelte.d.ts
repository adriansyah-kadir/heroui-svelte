import type { Box } from "#lib/hooks/index.ts";
import { Context } from "#lib/utils/index.ts";
import type { InputVariants } from "@heroui/styles";
export type InputOpts = {
    disabled?: boolean;
    required?: boolean;
    invalid?: boolean;
    name?: string;
    value?: any;
    checked?: boolean;
    indeterminate?: boolean;
} & InputVariants;
export declare class InputContext extends Context {
    #private;
    get opts(): InputOpts;
    get value(): any;
    set value(value: any);
    get checked(): boolean | undefined;
    set checked(checked: boolean | undefined);
    constructor(opts: Box<InputOpts>);
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
