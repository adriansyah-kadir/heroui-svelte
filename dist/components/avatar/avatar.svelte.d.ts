import type { HTMLAttributes } from "svelte/elements";
import { type AvatarOpts } from "./context.svelte";
type Props = AvatarOpts & HTMLAttributes<HTMLDivElement>;
declare const Avatar: import("svelte").Component<Props, {}, "">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
