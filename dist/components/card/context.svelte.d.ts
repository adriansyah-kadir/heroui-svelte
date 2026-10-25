import type { CardVariants } from "@heroui/styles";
import { Context, type Getter } from "svelte-utils";
export declare class CardContext extends Context {
    opts: CardVariants;
    constructor(opts: Getter<CardVariants>);
}
