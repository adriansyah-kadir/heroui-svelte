export function isEventTargetInAny(ev, ...parents) {
    const target = ev.target;
    if (!(target instanceof Node))
        return false;
    return parents.some(parent => !!parent?.contains(target));
}
