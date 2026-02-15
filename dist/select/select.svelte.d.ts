import { type SelectVariants } from "@heroui/styles";
import { Select, type SelectRootProps } from "bits-ui";
import type { HTMLAttributes } from "svelte/elements";
type $$ComponentProps = SelectRootProps & HTMLAttributes<HTMLDivElement> & SelectVariants;
declare const Select: import("svelte").Component<$$ComponentProps, {}, "value" | "open">;
type Select = ReturnType<typeof Select>;
export default Select;
