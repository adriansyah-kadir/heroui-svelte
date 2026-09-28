export function isEventTargetInAny(ev: Event, ...parents: (HTMLElement | null | undefined)[]) {
  const target = ev.target

  if (!(target instanceof Node)) return false

  return parents.some(parent => !!parent?.contains(target))
}
