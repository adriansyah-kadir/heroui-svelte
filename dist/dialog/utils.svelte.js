import { Context } from "runed";
import { readable, writable } from "svelte/store";
export function dialogContext(init) {
    const { subscribe, set, update } = writable(init);
    const variants = readable({}, set => {
        subscribe(({ scroll, size, variant }) => {
            set({ scroll, size, variant });
        });
    });
    return {
        subscribe, set, update, variants
    };
}
export const DialogContext = new Context("heroui-svelte/dialog");
