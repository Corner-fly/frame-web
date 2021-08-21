import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/common/css/reset.css";
import "./assets/css/product.scss";
import router from "./router/router";
import axios from "@/product/ajax";
import product from "./product.vue";

Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

axios .get(`${process.env.BASE_URL}domain.json`) .then(res => {
    axios.defaults.baseURL = res.data.baseUrl;
    Vue.prototype.staticFileUrl = res.data.staticFileUrl;
    new Vue({
        router,
        render: h => h(product)
    }).$mount("#app");
}) .catch(err => {
    console.log(err);
});