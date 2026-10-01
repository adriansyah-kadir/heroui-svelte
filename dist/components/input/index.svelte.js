import { Context } from "#lib/utils/index.js";
export class InputContext extends Context {
    get value() {
        return this.opts.value;
    }
    set value(value) {
        this.opts = {
            ...this.opts,
            value
        };
    }
    get checked() {
        return this.opts.checked;
    }
    set checked(checked) {
        this.opts = {
            ...this.opts,
            checked
        };
    }
    constructor(opts) {
        super(opts);
    }
    get props() {
        return {
            indeterminate: this.opts.indeterminate,
            disabled: this.opts.disabled,
            required: this.opts.required,
            "data-invalid": this.opts.invalid,
            "data-empty": this.empty,
            name: this.opts.name,
        };
    }
    get heroui() {
        return {
            variant: this.opts.variant,
            fullWidth: this.opts.fullWidth
        };
    }
    get empty() {
        return this.opts.value === undefined || this.opts.value === "";
    }
}
