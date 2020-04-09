import axios from 'axios'
import vant from 'vant'
import {Toast} from "vant";
import Vue from 'vue'
let loadingInstance;//创建Loading实例
Vue.use(Toast);
/*
axios.defaults.baseURL="https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13";
*/

//请求拦截器
/*axios.interceptors.request.use(
    config=>{
        const token = window.localStorage.getItem("token");
    }
)*/
//响应拦截器
axios.interceptors.response.use(
    response=>{
        if (response.codes===1){
            return Promise.resolve(response);
        }
        else{
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response.codes){
            console.log("请求错误或网络错误");
            /*console.log(error.response.msg);*/
            /*
            vant.Toast.fail("请求错误或网络错误");
*/
            this.$Message.error("请求错误或网络错误");
            /*this.$Message.error(error.response.msg);*/
            /*switch (error.response.status) {
                case 0:
                    /!*vant.Toast.fail("请求错误或网络错误");*!/
                    $Message.error("请求错误或网络错误");
                    break;

                default:
                    this.$Message.error(error.response.data.message);
                    /!*vant.Toast.fail(error.response.data.message);*!/
            }*/
            return Promise.reject(error.response);
        }
    }
);
export default{
    name:'axiosInit'
}
