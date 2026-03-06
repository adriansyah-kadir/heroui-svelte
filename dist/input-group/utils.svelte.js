import { Context } from "runed";
import { writable } from "svelte/store";
export function inputGroupContext() {
    const { set, subscribe, update } = writable({});
    return {
        subscribe,
        update,
        set,
    };
}
export const InputGroupContext = new Context("heroui-svelte/input-group");
