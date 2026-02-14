import type { AlertDialogVariants } from "@heroui/styles";
import { Context } from "runed";
import type { Writable } from "svelte/store";

export const AlertDialogContext = new Context<
  Writable<{
    theme?: AlertDialogVariants;
  }>
>("heroui-svelte/alert-dialog");
