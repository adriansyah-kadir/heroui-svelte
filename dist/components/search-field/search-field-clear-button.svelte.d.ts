import type { ComponentProps } from "svelte";
import { CloseButton } from "#lib";
interface Props extends ComponentProps<typeof CloseButton> {
}
declare const SearchFieldClearButton: import("svelte").Component<Props, {}, "">;
type SearchFieldClearButton = ReturnType<typeof SearchFieldClearButton>;
export default SearchFieldClearButton;
