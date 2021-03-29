import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// DarkMode
$(".theme-switch").on("click", () => {
    $("body").toggleClass("light-theme");
});


