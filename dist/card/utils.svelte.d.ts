import type { CardVariants } from "@heroui/styles";
import { Context } from "runed";
import { type Writable } from "svelte/store";
export type CardContext = CardVariants;
export declare const CardContext: Context<Writable<CardVariants>>;
