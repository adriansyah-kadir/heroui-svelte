<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn, type WithElementRef } from "$lib/utils.js";
	import { alertVariants, type AlertVariants } from "@heroui/styles";

	let {
		ref = $bindable(null),
		class: className,
		status,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & AlertVariants = $props();
</script>

<div
	bind:this={ref}
	data-slot="alert"
	role="alert"
	class={cn(alertVariants({ status }).base(), className)}
	{...restProps}
>
	{@render children?.()}
</div>
