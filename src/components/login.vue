<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
      <!--登录表单区-->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!--用户名-->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!--密码-->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!--按钮区域-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//一个组件一个export default，可以有多个export 用来导出js(变量等) 只有*.vue文件中export default方法会将style（css），template（html）一起导出
//这是因为 vue-loader（如果你用的是 Webpack 的话）加工处理。 <template> 部分会被 vue-template-compiler 编译成 render 函数，并插入到export default {render()}中被导出的 JS 对象中，css同理
//若使用export default想导出多个变量，则通过函数的形式或数组等
export default {
  data() {
    return {
      //这是登录表单的数据绑定对象
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        //验证密码
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      resetLoginForm(){
          this.$refs.loginFormRef.resetFields();
      },
      login(){
          this.$refs.loginFormRef.validate(async valid=>{
              if(!valid) retrun;
              const {data:res}=await this.axios.post("login",this.loginForm);
              // console.log(res);
              if(res.meta.status !== 200) return this.$message.error("登录失败");
              this.$message.success("登录成功");
              //后端返回一个token，将其保存在sessionstorage中，临时会话（持久会话用localstorage）
              window.sessionStorage.setItem("token",res.data.token);
              this.$router.push("/home");
          });
      }

  }
};
</script>

<style lang="less" scoped>
//scoped 是指定样式表作用范围为当前组件，不然变成全局，一般都要用
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;

  position: absolute; //相对于浏览器的定位
  left: 50%;
  top: 50%;
  //对其div区域本身进行位移-50%，往回移动一半，配合上面属性，达到居中效果
  transform: translate(-50%, -50%);
  .avatar_box {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    border: 1px solid #eee;
    padding: 6px;
    box-shadow: 0 0 10px #351998;
    background-color: #fff;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
