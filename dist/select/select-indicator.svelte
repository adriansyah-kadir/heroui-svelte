<script>
    import CaretDownIcon from "../icons/caret-down-icon.svelte";
    import { selectVariants } from "@heroui/styles";
    import { SelectContext } from "./utils";

    const ctx = SelectContext.get()
    const styles = selectVariants();
</script>

<CaretDownIcon data-open={$ctx.open} class={[styles.indicator(), "size-4"]} />
