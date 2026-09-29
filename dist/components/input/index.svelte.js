import { Context } from "#lib/utils/index.js";
export class InputContext extends Context {
    #opts;
    get opts() { return this.#opts.current; }
    get value() {
        return this.opts.value;
    }
    set value(value) {
        this.#opts.current = {
            ...this.opts,
            value
        };
    }
    get checked() {
        return this.opts.checked;
    }
    set checked(checked) {
        this.#opts.current = {
            ...this.opts,
            checked
        };
    }
    constructor(opts) {
        super();
        this.#opts = opts;
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
