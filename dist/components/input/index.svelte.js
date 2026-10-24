import { box, Context } from "svelte-utils";
export class InputContext extends Context {
    opts;
    #value;
    #checked;
    get value() {
        return this.#value.current;
    }
    set value(value) {
        this.#value.current = value;
    }
    get checked() {
        return this.#checked.current;
    }
    set checked(checked) {
        this.#checked.current = checked;
    }
    constructor(opts, value = box(""), checked = box(false)) {
        super();
        this.opts = $derived.by(opts);
        this.#value = value;
        this.#checked = checked;
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
        return this.value === undefined || this.value === "";
    }
}
