import type { HTMLAttributes } from "svelte/elements";
interface Props extends HTMLAttributes<HTMLElement> {
}
declare const EmptyState: import("svelte").Component<Props, {}, "">;
type EmptyState = ReturnType<typeof EmptyState>;
export default EmptyState;
