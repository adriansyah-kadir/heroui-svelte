import type { ListBoxItemVariants, ListBoxVariants } from "@heroui/styles";
import { Context } from "runed";
import { writable } from "svelte/store";

export type ListBoxContext = ({ type: "single", value: string } | { type: "multiple", value: string[] }) & ListBoxVariants

export function listBoxContext(prop: ListBoxContext) {
  const { subscribe, set, update } = writable(prop)
  return { subscribe, set, update }
}

export const ListBoxContext = new Context<ReturnType<typeof listBoxContext>>("heroui-svelte/list-box")

export type ListBoxItemContext = {
  selected: boolean
} & ListBoxItemVariants

export function listBoxItemContext(prop: ListBoxItemContext) {
  const { subscribe, set, update } = writable(prop)
  return { subscribe, set, update }
}

export const ListBoxItemContext = new Context<ReturnType<typeof listBoxItemContext>>("heroui-svelte/list-box")
