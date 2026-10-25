import { type SeparatorVariants } from "@heroui/styles";
import type { HTMLAttributes } from "svelte/elements";
type Props = HTMLAttributes<HTMLHRElement> & SeparatorVariants;
declare const Separator: import("svelte").Component<Props, {}, "">;
type Separator = ReturnType<typeof Separator>;
export default Separator;
