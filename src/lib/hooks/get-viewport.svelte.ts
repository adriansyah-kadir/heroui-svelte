export function getViewport() {
  let height = $state(0)
  let width = $state(0)
  let offsetTop = $state(0)
  let offsetLeft = $state(0)
  let pageTop = $state(0)
  let pageLeft = $state(0)
  let scale = $state(0)

  const update = (viewport: VisualViewport) => {
    height = viewport.height
    width = viewport.width
    offsetTop = viewport.offsetTop
    offsetLeft = viewport.offsetLeft
    pageTop = viewport.pageTop
    pageLeft = viewport.pageLeft
    scale = viewport.scale
  }

  $effect(() => {
    const viewport = window.visualViewport;
    if (!viewport) return;
    const sync = update.bind(null, viewport)
    sync()

    viewport.addEventListener("resize", sync)
    return () => {
      viewport.removeEventListener("resize", sync)
    }
  })

  return {
    get height() { return height },
    get width() { return width },
    get offsetTop() { return offsetTop },
    get offsetLeft() { return offsetLeft },
    get pageTop() { return pageTop },
    get pageLeft() { return pageLeft },
    get scale() { return scale },
  }
}
