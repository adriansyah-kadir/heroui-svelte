<script lang="ts">
	import type { ComponentProps } from "svelte";
	import { Input } from "$lib";
	import { cn } from "$lib/utils.js";

	let {
		value = $bindable(""),
		class: className,
		...restProps
	}: ComponentProps<typeof Input> = $props();
</script>

<Input
	bind:value
	data-slot="sidebar-input"
	data-sidebar="input"
	variant="secondary"
	class={cn("h-8 w-full shadow-none", className)}
	{...restProps}
/>
