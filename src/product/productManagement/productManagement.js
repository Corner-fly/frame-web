import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/common/css/reset.css";
import "./assets/css/productManagement.css";
import router from "./router";
import axios from "@/product/ajax.js";
import productManagement from "./productManagement.vue";

Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

axios
    .get(`${process.env.BASE_URL}domain.json`)
    .then(res => {
        axios.defaults.baseURL = res.data.baseUrl;
        Vue.prototype.staticFileUrl = res.data.staticFileUrl;
        new Vue({
            router,
            render: h => h(productManagement)
        }).$mount("#app");
    })
    .catch(err => {
        console.log(err);
    });