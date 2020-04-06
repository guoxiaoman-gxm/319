import axios from 'axios'
let loadingInstance;//创建Loading实例
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
        if (response.status===1){
            return Promise.resolve(response);
        }
        else{
            return Promise.reject(response);
        }
    },
    error => {
        if(error.response.status){
            switch (error.response.status) {
                case 0:
                    vant.Toast.fail("请求错误或网络错误");
                    break;

                default:
                    vant.Toast.fail(error.response.data.message);
            }
            return Promise.reject(error.response);
        }
    }
);
