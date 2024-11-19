import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8101/api/',
    timeout: 10000,
    headers: {}
});


instance.interceptors.response.use(function (response) {
    // 在发送请求之前做些什么
    const data=response.data;
    if(data.code===0){
        return data.data;
    }
    console.log("error"+ data);
    return response.data;

  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
export default instance;