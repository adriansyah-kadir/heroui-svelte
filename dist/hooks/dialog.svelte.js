function toggler(dialog) {
    return function (toggle) {
        const show = toggle ?? !this.open;
        if (show)
            dialog.showModal();
        else
            dialog.close();
    };
}
export class DialogState {
    open = $state(false);
    closed = $derived(!this.open);
    node = $state();
    toggle = $derived(this.node ? toggler(this.node) : undefined);
    close = $derived(this.toggle?.bind(this, false));
    show = $derived(this.toggle?.bind(this, true));
    get nodeId() {
        if (!this.node)
            return;
        if (this.node.id.trim() === "")
            this.node.id = crypto.randomUUID();
        return this.node.id;
    }
    attach() {
        return (node) => {
            const dialog = node.closest("dialog");
            if (!dialog)
                return;
            return this.#setup(dialog);
        };
    }
    #setup(dialog) {
        this.node = dialog;
        dialog.addEventListener("beforetoggle", this.#onToggle);
        return () => {
            this.node = undefined;
            dialog.removeEventListener("beforetoggle", this.#onToggle);
        };
    }
    #onToggle = (event) => {
        this.open = event.newState === "open";
    };
}
