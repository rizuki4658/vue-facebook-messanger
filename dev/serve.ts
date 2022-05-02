import { createApp } from 'vue';
import Dev from './serve.vue';
import VueFacebookMessanger from '@/index';

const app = createApp(Dev);
app.use(VueFacebookMessanger.installChat, {
  page_id: 109209978435935, //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US'
})
app.mount('#app');
