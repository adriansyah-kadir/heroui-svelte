import { Context } from "runed";
import { writable } from "svelte/store";
export function listBoxContext(prop) {
    const { subscribe, set, update } = writable(prop);
    return { subscribe, set, update };
}
export const ListBoxContext = new Context("heroui-svelte/list-box");
export function listBoxItemContext(prop) {
    const { subscribe, set, update } = writable(prop);
    return { subscribe, set, update };
}
export const ListBoxItemContext = new Context("heroui-svelte/list-box");
