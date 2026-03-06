import { type VariantProps } from "../utils.js";
export declare const sidebarMenuButtonVariants: import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, "peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-field p-2 text-start text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, import("tailwind-variants").TVReturnType<{
    variant: {
        default: string;
        outline: string;
    };
    size: {
        default: string;
        sm: string;
        lg: string;
    };
}, undefined, "peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-field p-2 text-start text-sm outline-hidden transition-[width,height,padding] group-has-data-[sidebar=menu-action]/menu-item:pe-8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", unknown, unknown, undefined>>;
export type SidebarMenuButtonVariant = VariantProps<typeof sidebarMenuButtonVariants>["variant"];
export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>["size"];
import { TooltipContent } from "..";
import { type WithElementRef, type WithoutChildrenOrChild } from "../utils.js";
import type { ComponentProps, Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    autoToggleOnMobile?: boolean;
    isActive?: boolean;
    variant?: SidebarMenuButtonVariant;
    size?: SidebarMenuButtonSize;
    tooltipContent?: Snippet | string;
    tooltipContentProps?: WithoutChildrenOrChild<ComponentProps<typeof TooltipContent>>;
    child?: Snippet<[{
        props: Record<string, unknown>;
    }]>;
};
declare const SidebarMenuButton: import("svelte").Component<$$ComponentProps, {}, "ref">;
type SidebarMenuButton = ReturnType<typeof SidebarMenuButton>;
export default SidebarMenuButton;
