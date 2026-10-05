import querySelector from "./query-selector.svelte";
import { untrack } from "svelte";
export class PopoverState {
    #node = $state(null);
    get node() { return this.#node; }
    get nodeId() {
        const node = this.node;
        if (!node)
            return;
        if (node.id === '')
            node.id = crypto.randomUUID();
        return node.id;
    }
    #source = $state(null);
    get source() { return this.#source; }
    get sourceId() {
        const source = this.source;
        if (!source)
            return;
        if (source.id === '')
            source.id = crypto.randomUUID();
        return source.id;
    }
    #open = $state(false);
    get open() { return this.#open; }
    get closed() { return !this.#open; }
    attach() {
        return node => {
            const popover = node.closest("*[popover]");
            if (!popover)
                return;
            this.#node = popover;
            popover.addEventListener("beforetoggle", this.#onToggle);
            return () => {
                this.#node = null;
                popover.removeEventListener("beforetoggle", this.#onToggle);
            };
        };
    }
    #onToggle = (ev) => {
        this.#source = ev.source ?? this.#source;
        this.#open = ev.newState === "open";
    };
}
export function getPopoverArea(popover) {
    let area = $state();
    let frame = 0;
    function update(node) {
        if (!popover.open) {
            cancelAnimationFrame(frame);
            return;
        }
        ;
        area = getComputedStyle(node).positionArea;
        requestAnimationFrame(update.bind(null, node));
    }
    $effect(() => {
        const node = popover.node;
        const open = popover.open;
        if (!node || !open) {
            return;
        }
        ;
        frame = requestAnimationFrame(update.bind(null, node));
    });
    return {
        get current() { return area; }
    };
}
export function popoverSelector(selector) {
    const popover = new PopoverState();
    let query = $state();
    $effect(() => {
        const s = selector();
        return untrack(() => {
            if (!s)
                return;
            query = querySelector(s);
            const detach = query.attach()(document);
            return () => {
                detach?.();
                query = undefined;
            };
        });
    });
    $effect(() => {
        const node = query?.element;
        if (!node)
            return;
        return popover.attach()(node);
    });
    return popover;
}
