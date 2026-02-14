<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { linkVariants } from "@heroui/styles";

  const { children, ...props }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<a {...props} class={[, props.class]}>
  {@render children?.()}
</a>

<span
  class={linkVariants().icon()}
  data-default-icon="true"
  data-slot="link-icon"
  ><svg
    aria-hidden="true"
    aria-label="External link icon"
    fill="none"
    height="9"
    role="presentation"
    viewBox="0 0 7 7"
    width="9"
    xmlns="http://www.w3.org/2000/svg"
    data-slot="link-default-icon"
    ><path
      d="M1.20592 6.84333L0.379822 6.01723L4.52594 1.8672H1.37819L1.38601 0.731812H6.48742V5.83714H5.34421L5.35203 2.6933L1.20592 6.84333Z"
      fill="currentColor"
    ></path></svg
  ></span
>
