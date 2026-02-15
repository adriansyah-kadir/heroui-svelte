<script lang="ts">
    import { headerVariants } from "@heroui/styles";
    import { Select, type SelectGroupHeadingProps } from "bits-ui";
    const props: SelectGroupHeadingProps = $props();
</script>

<Select.GroupHeading {...props} class={[headerVariants(), props.class]} />
