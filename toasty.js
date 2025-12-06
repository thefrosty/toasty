/*
 * Toasty v0.2.0
 * Show Dan Forden's Toasty from Mortal Kombat as an Easter Egg for your website
 * Released under the MIT license
 */

let singleToasty

class Toasty {
  constructor (options) {
    this.options = options
  }

  init () {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<div id="toasty"><img src="${this.options.image}" alt="Toasty!"></div>`
    )
    const element = document.getElementById('toasty')
    element.style.position = 'fixed'
    element.style.right = '-200px'
    element.style.bottom = '0'
    if (!this.options.sound) {
      return
    }
    document.body.insertAdjacentHTML(
      'beforeend',
      `<audio id="toasty-audio"><source src="${this.options.sound}" type="audio/mpeg"></audio>`
    )
  }

  pop () {
    const Toasty = document.getElementById('toasty')
    Toasty.classList.add('show-dan')
    setTimeout(() => Toasty.classList.remove('show-dan'), 1000)
    const audio = document.getElementById('toasty-audio')
    if (audio) {
      audio.play()
    }
  }
}

const defaults = {
  image: 'toasty.png',
  sound: 'toasty.mp3'
}

function toasty (options) {
  if (typeof options === 'string' && /^(pop)$/i.test(options)) {
    if (singleToasty) {
      singleToasty.pop()
    }
    return singleToasty
  }
  options = { ...defaults, ...(options || {}) }
  if (!singleToasty) {
    singleToasty = new Toasty(options)
    singleToasty.init()
  }

  return singleToasty
}
