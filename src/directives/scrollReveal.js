const observers = new WeakMap()

export default {
  beforeMount(element) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    element.classList.add('scroll-reveal')
  },
  mounted(element) {
    if (!element.classList.contains('scroll-reveal')) return

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    observers.set(element, observer)
  },
  unmounted(element) {
    observers.get(element)?.disconnect()
    observers.delete(element)
  },
}