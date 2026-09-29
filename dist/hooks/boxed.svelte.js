export function boxState(initial, onchange) {
    let current = $state(initial);
    return {
        get current() { return current; },
        set current(value) {
            onchange?.(value);
            current = value;
        }
    };
}
export function boxDerived(getter, setter) {
    const current = $derived.by(getter);
    return {
        get current() { return current; },
        set current(value) {
            setter?.(value);
        }
    };
}
