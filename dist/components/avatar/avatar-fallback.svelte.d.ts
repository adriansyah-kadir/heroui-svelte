import type { HTMLAttributes } from "svelte/elements";
import { type AvatarOpts } from "./context.svelte";
type Props = AvatarOpts & HTMLAttributes<HTMLDivElement>;
declare const AvatarFallback: import("svelte").Component<Props, {}, "">;
type AvatarFallback = ReturnType<typeof AvatarFallback>;
export default AvatarFallback;
