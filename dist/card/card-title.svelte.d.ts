import type { HTMLAttributes } from "svelte/elements";
import { type CardVariants } from "@heroui/styles";
type $$ComponentProps = HTMLAttributes<HTMLHeadingElement> & CardVariants & {
    this?: "h1";
};
declare const CardTitle: import("svelte").Component<$$ComponentProps, {}, "">;
type CardTitle = ReturnType<typeof CardTitle>;
export default CardTitle;
