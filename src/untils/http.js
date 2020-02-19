import axios from 'axios';
import qs from 'querystring'


//创建axios对象
const instance = axios.create({
  timeout:5000,
});
//错误信息响应方法
const errroHandle = (status,other) => {
  switch(status){
    case 400:
      console.log("服务器无法理解请求信息");
      break;
    case 401:
      console.log("用户信息验证失败");
      break;
    case 403:
      console.log("请求被限制");
      break;
    case 404:
      console.log("客户端请求信息错误");
      break;
    default:
      console.log(other);
      break;
  }
}
//挂载全局对象
instance.defaults.baseURL="";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if (config.method=="post"){
    config.data = qs.stringify(config.data)
  }
  return config;
},error => {
  Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(
  response=>response.status===200?Promise.resolve(response):Promise.reject(response),
  error => {
    const {response} = error;
    if (response){
      errroHandle(response.status,response.data)
      return Promise.reject(response)
    }else {
      //错误信息都无法返回
      console.log("请求被中断")
    }
  });
export default instance
