import { Context } from "runed";
import { get, readable, writable } from "svelte/store";
function getInputAttributes(v) {
    let { disabled, name, pattern, placeholder, readonly, required, type, id } = v;
    return {
        disabled, name, pattern, placeholder, readonly, required, type, id
    };
}
export function textFieldContext(init) {
    const { subscribe, set, update } = writable({
        ...init
    });
    const setValue = (value) => update(p => ({ ...p, value }));
    const setInvalid = (invalid) => update(p => ({ ...p, invalid }));
    return {
        subscribe,
        set,
        update,
        input: readable(getInputAttributes(init ?? {}), (set) => {
            subscribe(v => {
                set(getInputAttributes(v));
            });
        }),
        onValue(ev) {
            if (!(ev.currentTarget instanceof HTMLInputElement))
                return;
            setInvalid(!ev.currentTarget.checkValidity());
            setValue(ev.currentTarget.value);
        },
        useInput(node, { mode }) {
            node.addEventListener(mode, this.onValue);
            return {
                update: ({ mode: newMode }) => {
                    node.removeEventListener(mode, this.onValue);
                    node.addEventListener(newMode, this.onValue);
                }
            };
        }
    };
}
export const TextFieldContext = new Context("heroui-svelte/text-field");
