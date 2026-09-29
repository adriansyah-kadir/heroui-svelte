import { type SurfaceVariants } from "@heroui/styles";
import type { HTMLAttributes } from "svelte/elements";
type Props = SurfaceVariants & HTMLAttributes<HTMLDivElement>;
declare const Surface: import("svelte").Component<Props, {}, "">;
type Surface = ReturnType<typeof Surface>;
export default Surface;
