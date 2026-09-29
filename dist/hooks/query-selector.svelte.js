export default function querySelector(selectors) {
    let element = $state(null);
    return {
        get element() {
            return element;
        },
        attach() {
            return node => {
                const query = () => {
                    element = node.querySelector(selectors);
                };
                query();
                const observer = new MutationObserver(query);
                observer.observe(node, {
                    childList: true,
                    subtree: true,
                });
                return () => observer.disconnect();
            };
        },
    };
}
