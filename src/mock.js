const Mock = require('mockjs')

const Randon = Mock.Random

let Result = {
  code: 200,
  msg: 'success',
  data: null
}

/*
 *mock请求验证码数据
 */
Mock.mock('/captcha', 'get', ()=> {
  Result.data = {
    token: Randon.string(32),
    captchaImg: Randon.dataImage('120x40', 'p7n5w')
  }
  return Result
})


Mock.mock('/login', 'post', ()=> {

  //无法在header中传入jwt

  Result.code = 400
  Result.msg = '验证码错误'

  return Result
})
