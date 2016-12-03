/**
 * Textarea autoresize on Enter/Return
 */
;(function () {
  function domReady (f) { /in/.test(document.readyState) ? setTimeout(domReady,16,f) : f() }

  function resize (event) {
    event.target.style.height = 'auto'
    event.target.style.height = `${event.target.scrollHeight}px`
  }
  /* 0-timeout to get the already changed text */
  function delayedResize (event) {
    window.setTimeout(resize, 0, event)
  }

  domReady(() => {
    let textareas = document.getElementsByTagName('textarea')
    textareas = [].slice.call(textareas).filter(el => el.hasAttribute('auto-resize'))

    for (let el of textareas) {
      el.addEventListener('change', resize, false)
      el.addEventListener('cut', delayedResize, false)
      el.addEventListener('paste', delayedResize, false)
      el.addEventListener('drop', delayedResize, false)
      el.addEventListener('keydown', delayedResize, false)
    }
  })
}())
