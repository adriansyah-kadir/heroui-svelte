export type RippleOptions = {
    color?: string;
    /** Full animation length in ms at normal speed. Defaults to 600. */
    duration?: number;
    opacity?: number;
    scale?: number;
    /** Playback rate while the pointer is held. Defaults to 0.15. */
    holdSpeed?: number;
};
export type RippleItem = Required<RippleOptions> & {
    key: string;
    x: number;
    y: number;
    size: number;
    /** True until the pointer is released. */
    held: boolean;
};
export declare function createRipple(e: MouseEvent, options?: RippleOptions): RippleItem;
/** Let go of every ripple so they resume normal speed. */
export declare function releaseRipples(items: RippleItem[]): void;
type $$ComponentProps = {
    items?: RippleItem[];
};
declare const Ripples: import("svelte").Component<$$ComponentProps, {}, "items">;
type Ripples = ReturnType<typeof Ripples>;
export default Ripples;
