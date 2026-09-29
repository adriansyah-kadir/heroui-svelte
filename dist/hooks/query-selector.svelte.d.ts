import type { Attachment } from "svelte/attachments";
export default function querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): {
    element: HTMLElementTagNameMap[K] | null;
    attach: () => Attachment<ParentNode>;
};
export default function querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): {
    element: SVGElementTagNameMap[K] | null;
    attach: () => Attachment<ParentNode>;
};
export default function querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): {
    element: MathMLElementTagNameMap[K] | null;
    attach: () => Attachment<ParentNode>;
};
export default function querySelector<T extends Element>(selectors: string): {
    element: T | null;
    attach: () => Attachment<ParentNode>;
};
/** @deprecated */
export default function querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): {
    element: HTMLElementDeprecatedTagNameMap[K] | null;
    attach: () => Attachment<ParentNode>;
};
