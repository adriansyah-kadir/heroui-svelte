<script lang="ts">
	import { Button } from "..";
	import PanelLeftIcon from "@lucide/svelte/icons/panel-left";
	import type { ComponentProps } from "svelte";
	import { useSidebar } from "./context.svelte.js";

	let { onclick, ...props }: ComponentProps<typeof Button> = $props();

	const sidebar = useSidebar();
</script>

<Button
	{...props}
	data-sidebar="trigger"
	data-slot="sidebar-trigger"
	variant="ghost"
	size="sm"
	isIconOnly
	type="button"
	onclick={(e) => {
		onclick?.(e as any);
		sidebar.toggle();
	}}
>
	<PanelLeftIcon />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
