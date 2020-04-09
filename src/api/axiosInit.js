import axios from 'axios'
let loadingInstance;//创建Loading实例
/*
axios.defaults.baseURL="https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13";
*/

const service = axios.create({
    baseURL: "https://easy-mock.bookset.io/mock/5e7ec974a98e2502f92e9f13",  // api的base_url
    timeout: 5000  // 请求超时时间
});

//请求拦截器
/*axios.interceptors.request.use(
    config=>{
        const token = window.localStorage.getItem("token");
    }
)*/

//响应拦截器
service.interceptors.response.use(
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
            switch (error.response.codes) {
                case 0:
                    vant.Toast.fail("请求错误或网络错误");
                    break;

                default:
                    vant.Toast.fail("请求错误或网络错误");
            }
            return Promise.reject(error.response);
        }
    }
);
export default service;