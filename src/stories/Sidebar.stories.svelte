<script lang="ts" module>
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import {
        Sidebar,
        SidebarContent,
        SidebarGroup,
        SidebarHeader,
        SidebarInput,
        SidebarMenu,
        SidebarMenuButton,
        SidebarMenuItem,
        SidebarProvider,
        SidebarTrigger,
    } from "$lib";

    const { Story } = defineMeta({
        component: SidebarProvider,
        parameters: {
            layout: "fullscreen",
        },
        argTypes: {
            variant: {
                control: "select",
                options: ["sidebar", "floating", "inset"],
            },
            collapsible: {
                control: "select",
                options: ["none", "offcanvas", "icon"]
            }
        } as any
    });
</script>

<Story name="Sidebar">
    {#snippet template({variant, collapsible}: any)}
        <SidebarProvider>
            <Sidebar {collapsible} {variant}>
                <SidebarHeader>
                    <SidebarInput placeholder="Search..." />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton>Dashboard</SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <main>
                <SidebarTrigger />
            </main>
        </SidebarProvider>
    {/snippet}
</Story>
