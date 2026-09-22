export function useSmoothScroll() {
  function scrollToHash(hash) {
    const target = document.querySelector(hash)

    if (!target) {
      return
    }

    const nav = document.querySelector('nav')
    const navHeight = nav ? nav.offsetHeight : 0
    const extraSpace = 20

    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - navHeight - extraSpace

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    })
  }

  return { scrollToHash }
}
