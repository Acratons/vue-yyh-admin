<template>
  <el-container class="el-container">
    <el-aside width="200px">
      <SideMenu></SideMenu>
    </el-aside>
    <el-container>
      <el-header>
        <strong>vue-yyh-admin 后台管理系统</strong>

        <div class="header-avatar">
          <el-avatar size="medium" :src="userInfo.avatar"></el-avatar>

          <el-dropdown>
            <span class="el-dropdown-link">
              {{userInfo.username}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/userCenter">个人中心</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

        </div>



      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SideMenu from "./inc/SideMenu.vue";
import Index from "./Index.vue";
export default {
  name: "Home",
  components:{
    SideMenu,
    Index
  },
  data(){
    return{
      userInfo:{
        id:'',
        username:'',
        avatar:''
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  methods: {

    async getUserInfo() {
      await this.$axios.get('/sys/userInfo').then(res =>{
        console.log(res)
        this.userInfo = res.data.data
      })
    },

    //退出reset所有store
    logout() {
      this.$axios.post("/logout").then(res => {
        localStorage.clear()
        sessionStorage.clear()

        this.$store.commit("resetState")

        this.$router.push("/login")
      })
    }
  }
}

</script>

<style scoped>
  .header-avatar {
    float: right;
    width: 130px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-container {
    padding: 0;
    margin: 0;
    height: 100vh;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  a {
    text-decoration: none;
  }
  a:link{text-decoration: none!important;  }
  a:visited{text-decoration: none!important;  }
  a:hover{text-decoration: none!important;  }
  a:active{text-decoration: none!important;  }
  a:focus{text-decoration: none!important;  }





</style>
