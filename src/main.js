import { createApp } from 'vue';
import App from './App.vue';
import card from './components/UI/card.vue';
import button from './components/UI/button.vue';
import dialog from './components/UI/basedialog.vue';

const app=createApp(App);
app.component('card', card);
app.component('base-button', button);
app.component('base-dialog', dialog);
app.mount('#app');
