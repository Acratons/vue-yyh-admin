import axios from "axios";
import router from "./router";
import ElementUI from "element-ui";
import {config} from "shelljs";

// axios.defaults.baseURL = "http://localhost:8081"

const  request = axios.create({
  timeout:5000,
  headers: {
    'Content-Type':'application/json; charset=UTF-8'
  }
})

/*
 * 请求拦截 interceptors拦截器
 */
request.interceptors.request.use(config => {
  config.headers['PermList'] = localStorage.getItem('token')  //拦截的东西
  return config
})
/*
 *拦截结果做处理
 * 500异常，401权限不够，404没有这个接口
 */
request.interceptors.response.use(response => {
  let res = response.data

  if (res.code === 200){
    return response
  }else {
    ElementUI.Message.error(!res.msg? '系统异常':res.msg)
    //返回处理原因
    return Promise.reject(response.data.msg)
  }
},error => {
    //先判断结果中是否有msg
    if (error.response.data){
      error.message = error.response.data.msg
    }

  //没有权限返回登录页
    if (error.response.status === 401){
      router.push('/login')
    }

    ElementUI.Message.error(error.message, {duration:3000})

    return Promise.reject(error)
  }

)

export default request
