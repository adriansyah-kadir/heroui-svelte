import type { CardVariants } from "@heroui/styles";
import { Context } from "runed";
import { type Writable } from "svelte/store";

export type CardContext = CardVariants
export const CardContext = new Context<Writable<CardContext>>("heroui-svelte/card")
