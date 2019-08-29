<template>
  <div id="login">
    <input type="text" />
    <input type="password" />
    <a href="javascript:;" class="login-btn">登录</a>
    <div class="ect">
        <span>立即注册</span>
        <span>找回密码</span>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>

<style scoped lang="scss">
    #login {
        display: flex;
        flex-direction: column;
        input {
            padding: 10px;
            margin-bottom: 5px;
            background-color: #ecea7a;
            border: none;
            border-bottom: 1px rgb(207, 205, 187) solid;
        }
        .login-btn {
            background-color: #e73f3f;
            line-height: 50px;
            margin: 10px;
            border-radius: 5px;
            color: #fff;
            text-align: center;
            text-decoration: none;
        }
        .ect {
            display: flex;
            justify-content: space-between;
            color: #e73f3f;
            padding: 0 5px;
        }
    }
</style>