
import { FacebookOptions } from './types'

const defaultLang: string = 'en_us'

export const fetch = (options: FacebookOptions) => {
  const lang = options.locale ? options.locale : defaultLang
  return new Promise<void>((resolve, reject) => {
    (function(d: Document, s: string, id: string) {
      const fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      const js = d.createElement(s)
      js.id = id
      js.setAttribute('src', `https://connect.facebook.net/${lang}/sdk/xfbml.customerchat.js`)
      fjs.parentNode?.insertBefore(js, fjs)
      js.onload = () => {
        console.log('vue-facebook-messanger loaded', 'padding:0.6em 0; color:#3B5998;')
        resolve()
      }
      js.onerror = () => {
        reject()
        console.error('vue-facebook-messanger failed to load', 'padding:0.6em 0; color:#bf212f;')
      }
    })(document, 'script', 'facebook-jssdk')
  })
}

export const init = (options: FacebookOptions) => {
  return new Promise<void>(resolve => {
    (<any>window).fbAsyncInit = () => {
      const defaults = { cookie: true, xfbml: true, version: 'v5.0' }
      options = {...defaults, ...options};
      (<any>window).FB.init(options)
      resolve()
    }
  })
}

export const get = (options: FacebookOptions) => {
  return new Promise<void>(resolve => {
    const oldPlugin = (<any>window).FB
    if (oldPlugin) {
      resolve(oldPlugin)
    } else {
      fetch(options).then(() => {
        init(options).then(() => {
          resolve((<any>window).FB)
        })
      })
    }
  })
}

export const load = (options: FacebookOptions) => {
  const el = document.createElement('div')
  el.setAttribute('class', 'fb-customerchat')
  el.setAttribute('attribution', 'setup_tool')

  const entriOptions = Object.entries(options)
  entriOptions.forEach((attr: any) => {
    if (attr[0] && attr[1]) {
      return el.setAttribute(attr[0], attr[1])
    }
  })
  document.body.appendChild(el)
}
