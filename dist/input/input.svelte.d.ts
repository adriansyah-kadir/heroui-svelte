import { type InputVariants } from "@heroui/styles";
import type { HTMLInputAttributes } from "svelte/elements";
type $$ComponentProps = HTMLInputAttributes & InputVariants & {
    invalid?: boolean;
};
declare const Input: import("svelte").Component<$$ComponentProps, {}, "value" | "invalid">;
type Input = ReturnType<typeof Input>;
export default Input;
