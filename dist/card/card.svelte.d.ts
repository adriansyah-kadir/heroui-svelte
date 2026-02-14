import type { HTMLAttributes } from "svelte/elements";
import { type CardVariants } from "@heroui/styles";
type $$ComponentProps = HTMLAttributes<HTMLDivElement> & CardVariants;
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
