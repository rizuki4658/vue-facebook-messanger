### Facebook Chat Messanger
Chat for your site business using facebook customer chat.

##### Install

`$ npm install vue-facebook-messanger`

#### How to Use

```javascript
import { createApp } from 'vue';
import VueFacebookMessanger from '@/index';

const app = createApp(Dev);
app.use(VueFacebookMessanger, {
  page_id: null, // page id
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US'
})
app.mount('#app');
```

#### As single component

```javascript
import { onMounted } from 'vue';
import VueFacbookMessanger from 'vue-facebook-messanger'
export default {
  setup() {
    onMounted() {
	  VueFacbookMessanger({
	   page_id: null, // page id,
	   theme_color: '#333333', // theme color in HEX,
	   locale: 'en_US'
	  })
	}
  }
}
```

### Examples

![](https://github.com/rizuki4658/vue-facebook-messanger/blob/master/public/img/example.png?raw=true)

![](https://github.com/rizuki4658/vue-facebook-messanger/blob/master/public/img/setup_domain.png?raw=true)