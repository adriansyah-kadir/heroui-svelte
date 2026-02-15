import type { SelectVariants } from "@heroui/styles";
import type { SelectRootProps } from "bits-ui";
import { Context } from "runed";
import { readable, writable } from "svelte/store";

export type SelectContext = Omit<SelectRootProps, "children"> & SelectVariants

export function selectContext(init: SelectContext) {
    const { subscribe, set, update } = writable(init)
    const select = readable<Omit<SelectRootProps, "children">>({ type: init.type }, set => {
        subscribe(({ type, allowDeselect, autocomplete, disabled, items, loop, name, onOpenChange, onOpenChangeComplete, onValueChange, open, required, scrollAlignment, value }) => {
            set({ type, allowDeselect, autocomplete, disabled, items, loop, name, onOpenChange, onOpenChangeComplete, onValueChange, open, required, scrollAlignment, value})
        })
    })
    return { subscribe, set, update, select }
}

export const SelectContext = new Context<ReturnType<typeof selectContext>>('heroui-svelte/select')