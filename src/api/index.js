/*
* 包含n个接口请求函数的模块
* 函数的返回值：promise对象
* */
const BASE_URL = '/api'

//登录
export const reqLogin = (phone,pwd) => ajax(BASE_URL+'/login',{name,pwd})
//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL+'/sendCode',{phone})
//注册
export const reqRegister = ({phone,code,shopName,pwd}) => ajax(BASE_URL+'/register',{phone,code,shopName,pwd},'POST')
//忘记密码
export const reqForgetPwd = ({phone,code,pwd,repwd}) => ajax(BASE_URL+'/userInfo',{phone,code,pwd,repwd},'POST')
//获取用户信息
export const reqUserInfo = () => ajax(BASE_URL+'/userInfo')
//退出登录
export const reqLogout = () => ajax(BASE_URL+'/logout')

const host = 'http://192.168.1.57:8080'
const imgHost = 'http://192.168.1.108/'

export default {
  host,
  imgHost
}
