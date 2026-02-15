import { Context } from "runed";
import { readable, writable } from "svelte/store";
export function selectContext(init) {
    const { subscribe, set, update } = writable(init);
    const select = readable({ type: init.type }, set => {
        subscribe(({ type, allowDeselect, autocomplete, disabled, items, loop, name, onOpenChange, onOpenChangeComplete, onValueChange, open, required, scrollAlignment, value }) => {
            set({ type, allowDeselect, autocomplete, disabled, items, loop, name, onOpenChange, onOpenChangeComplete, onValueChange, open, required, scrollAlignment, value });
        });
    });
    return { subscribe, set, update, select };
}
export const SelectContext = new Context('heroui-svelte/select');
