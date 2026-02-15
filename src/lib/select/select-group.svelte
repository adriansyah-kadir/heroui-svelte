<script lang="ts">
    import { listboxSectionVariants } from "@heroui/styles";
    import { Select, type SelectGroupProps } from "bits-ui";
    const props: SelectGroupProps = $props();
</script>

<Select.Group {...props} class={[listboxSectionVariants(), props.class]} />
