import { type ButtonVariants } from "@heroui/styles";
import { Button } from "..";
import type { ComponentProps } from "svelte";
type $$ComponentProps = ComponentProps<typeof Button> & ButtonVariants;
declare const DialogTrigger: import("svelte").Component<$$ComponentProps, {}, "">;
type DialogTrigger = ReturnType<typeof DialogTrigger>;
export default DialogTrigger;
