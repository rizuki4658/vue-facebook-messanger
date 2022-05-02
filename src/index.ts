import { FacebookOptions } from './types'
import { get, load } from './helpers'

const loadChat = (options: FacebookOptions) => {
  get(options).then(() => {
    if (options.page_id) {
      load(options)
    } else {
      console.error('vue-facebook-messanger You must have to specify `page_id`')
    }
  })
}

const installChat = {
  install: (app: any, options: FacebookOptions) => {
    app.facebookMessanger = {
      setOptions(otherOptions: any) {
        options = { ...options, ...otherOptions }
      }
    }

    if (app.prototype) {
      Object.defineProperties(app.prototype, {
        $facebookMessanger: {
          get: () => {
            return app.facebookMessanger
          }
        }
      })
    }

    app.mixin({
      mounted() {
        if (!this.$parent) {
          get(options).then(() => {
            if (options.page_id) {
              load(options)
            } else {
              console.error('vue-facebook-messanger You must have to specify `page_id`')
            }
          })
        }
      }
    })
  }
}

const VueFacebookMessanger = {
  loadChat,
  installChat
}
export default VueFacebookMessanger
