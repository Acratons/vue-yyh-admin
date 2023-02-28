const Mock = require('mockjs')
const {data} = require("autoprefixer");

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
/*
 *获取用户信息
 */
Mock.mock('/sys/userInfo', 'get', ()=> {

  //无法在header中传入jwt

  Result.code = 200
  Result.msg = 'success'
  Result.data = {
    id:'1',
    username:'yyh',
    avatar:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
  }

  return Result
})

/*
 *更改密码
 */
Mock.mock('/updateUserPassword', 'post', ()=> {

  //无法在header中传入jwt

  Result.code = 200
  Result.msg = 'success'
  Result.data = ''

  return Result
})

/*
 *退出登录
 */
Mock.mock('/logout', 'post', ()=> {

  return Result
})

/*
 * 菜单获取
 */
Mock.mock('/sys/menu/nav', 'get', ()=> {

  let nav =  [
    {
      title: '系统管理',
      name: 'SysMange',
      icon: 'el-icon-odometer',
      component:'',
      path: '',
      children: [
        {
          title: '用户管理',
          name: 'SysUser',
          icon: 'el-icon-odometer',
          component:'sys/User',
          path: '/sys/user',
        },
        {
          title: '角色管理',
          name: 'SysRole',
          icon: 'el-icon-odometer',
          component:'sys/Role',
          path: '/sys/role',
        },
        {
          title: '菜单管理',
          name: 'SysMenu',
          icon: 'el-icon-odometer',
          component:'sys/Menu',
          path: '/sys/menu',
        }
      ]
    },
    {
      title: '系统工具',
      name: 'SysTool',
      icon: 'el-icon-odometer',
      path: '/sys/tool',
      component:'',
      children: [
        {
          title: '数据Json化',
          name: 'DataJson',
          icon: 'el-icon-odometer',
          component:'',
          path: '/sys/tool/dataJson',
        }
      ]
    },
    {
      title: '数据字典',
      name: 'SysDict',
      icon: 'el-icon-odometer',
      path: '/sys/dict',
      children: [

      ]
    }
  ]
  let PermList = []


  Result.data = {
    nav: nav,
    PermList: PermList
  }

  return Result
})

