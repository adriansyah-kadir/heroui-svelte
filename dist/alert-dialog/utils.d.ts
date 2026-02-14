import type { AlertDialogVariants } from "@heroui/styles";
import { Context } from "runed";
import type { Writable } from "svelte/store";
export declare const AlertDialogContext: Context<Writable<{
    theme?: AlertDialogVariants;
}>>;
