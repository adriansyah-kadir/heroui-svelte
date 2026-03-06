import type { InputGroupVariants } from "@heroui/styles";
import { Context } from "runed";
import { writable } from "svelte/store";

export function inputGroupContext() {
    const { set, subscribe, update } = writable<InputGroupVariants>({})

    return {
        subscribe,
        update,
        set,
    }
}

export type InputGroupContext = ReturnType<typeof inputGroupContext>
export const InputGroupContext = new Context<InputGroupContext>("heroui-svelte/input-group")