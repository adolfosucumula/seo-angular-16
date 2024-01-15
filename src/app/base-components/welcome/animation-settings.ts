import Typed  from 'typed.js'

export function autoWriteSettings(selector: string, text: any []) {

  new Typed(selector, {
    strings:
    text,
    typeSpeed: 100,
    smartBackspace: false,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
  })
}
