import type { ModalVariants } from "@heroui/styles";
import { Context } from "runed";
import { readable, writable } from "svelte/store";

export function dialogContext(init: DialogContext) {
  const { subscribe, set, update } = writable(init)

  const variants = readable<ModalVariants>({}, set => {
    subscribe(({ scroll, size, variant }) => {
      set({ scroll, size, variant })
    })
  })

  return {
    subscribe, set, update, variants
  }
}

export type DialogContext = {
  open: boolean,
  placement: "auto" | "top" | "center" | "bottom"
} & ModalVariants

export const DialogContext = new Context<ReturnType<typeof dialogContext>>("heroui-svelte/dialog")
