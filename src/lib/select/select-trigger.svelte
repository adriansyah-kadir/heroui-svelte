<script lang="ts">
    import { selectVariants } from "@heroui/styles";
    import type { SelectTriggerProps } from "bits-ui";
    import { Select } from "bits-ui";
    import { SelectContext } from "./utils";
    const props: SelectTriggerProps = $props();
    const ctx = SelectContext.get();
    const { variant } = $derived($ctx);
</script>

<Select.Trigger
    {...props}
    class={[
        selectVariants({ variant }).trigger(),
        "focus-visible:status-focused-field",
        props.class,
    ]}
/>
