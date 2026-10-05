<script lang="ts" module>
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

  export function createRipple(
    e: MouseEvent,
    options: RippleOptions = {},
  ): RippleItem {
    const {
      color = "currentColor",
      duration = 600,
      opacity = 0.35,
      scale = 2,
      holdSpeed = 0.15,
    } = options;

    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * scale;

    return {
      key: crypto.randomUUID(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
      color,
      duration,
      opacity,
      scale,
      holdSpeed,
      held: true,
    };
  }

  /** Let go of every ripple so they resume normal speed. */
  export function releaseRipples(items: RippleItem[]) {
    for (const r of items) r.held = false;
  }
</script>

<script lang="ts">
  let { items = $bindable([]) }: { items?: RippleItem[] } = $props();

  function remove(key: string) {
    items = items.filter((r) => r.key !== key);
  }
</script>

{#each items as r (r.key)}
  <span
    class="ripple"
    style:left="{r.x}px"
    style:top="{r.y}px"
    style:width="{r.size}px"
    style:height="{r.size}px"
    style:background={r.color}
    {@attach (el) => {
      const anim = el.animate(
        [
          { transform: "scale(0.05)", opacity: 0, offset: 0 },
          { opacity: r.opacity, offset: 0.2 },
          { transform: "scale(1)", opacity: 0, offset: 1 },
        ],
        { duration: r.duration, easing: "ease-out", fill: "forwards" },
      );

      anim.onfinish = () => remove(r.key);

      // Separate effect so speed changes never restart the animation
      $effect(() => {
        anim.playbackRate = r.held ? r.holdSpeed : 1;
      });

      return () => anim.cancel();
    }}
  ></span>
{/each}

<style>
  .ripple {
    position: absolute;
    border-radius: 9999px;
    pointer-events: none;
  }
</style>
