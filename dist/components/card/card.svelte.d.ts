import type { HTMLAttributes } from "svelte/elements";
import { type CardVariants } from "@heroui/styles";
type Props = HTMLAttributes<HTMLDivElement> & CardVariants;
declare const Card: import("svelte").Component<Props, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
