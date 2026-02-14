import type { InputVariants } from "@heroui/styles";
import { Context } from "runed";
import type { HTMLInputAttributes } from "svelte/elements";
import { get, readable, writable } from "svelte/store";

export type TextFieldContext = ContextAttributes & InputAttributes & InputVariants

type ContextAttributes = {
  invalid?: boolean | null,
  mode?: ("input" | "change") | null
}

type InputAttributes = Pick<HTMLInputAttributes, "required" | "pattern" | "placeholder" | "name" | "disabled" | "readonly" | "type" | "id">

function getInputAttributes(v: TextFieldContext): InputAttributes {
  let { disabled, name, pattern, placeholder, readonly, required, type, id }: InputAttributes = v
  return {
    disabled, name, pattern, placeholder, readonly, required, type, id
  }
}

export function textFieldContext(init?: TextFieldContext) {
  const { subscribe, set, update } = writable<TextFieldContext>({
    ...init
  })

  const setValue = (value: string) => update(p => ({ ...p, value }))
  const setInvalid = (invalid: boolean) => update(p => ({ ...p, invalid }))

  return {
    subscribe,
    set,
    update,

    input: readable(getInputAttributes(init ?? {}), (set) => {
      subscribe(v => {
        set(getInputAttributes(v))
      })
    }),

    onValue(ev: Event) {
      if (!(ev.currentTarget instanceof HTMLInputElement)) return;
      setInvalid(!ev.currentTarget.checkValidity())
      setValue(ev.currentTarget.value)
    },

    useInput(node: HTMLInputElement, { mode }: { mode: "input" | "change" }) {
      node.addEventListener(mode, this.onValue)
      return {
        update: ({ mode: newMode }: { mode: "input" | "change" }) => {
          node.removeEventListener(mode, this.onValue)
          node.addEventListener(newMode, this.onValue)
        }
      }
    }
  }
}

export const TextFieldContext = new Context<ReturnType<typeof textFieldContext>>("heroui-svelte/text-field")

