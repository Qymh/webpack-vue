<template>
  <div class="page page-current login">
    <div class="content">
      <!-- header begin -->
      <header class="login-header">
        <h1>{{ title }}</h1>
        <h2>{{subtitle}}</h2>
      </header>
      <!-- header end -->
      <!-- form begin -->
      <div v-if="isAutoLogin" class="content-block" style="text-align:center;">正在获取微信授权...</div>
      <form v-if="!isAutoLogin">
        <div class="list-block login-form">
          <ul>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-media">
                    <i class="icon iconcus-user"></i>
                  </div>
                  <div class="item-input">
                    <input type="text" v-model="loginname" placeholder="请输入登录账号">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="item-content">
                <div class="item-inner">
                  <div class="item-media">
                    <i class="icon iconcus-lock-fill"></i>
                  </div>
                  <div class="item-input">
                    <input type="password" v-model="password" placeholder="请输入登录密码">
                  </div>
                </div>
              </div>
            </li>
            <li style="height:1rem">
            </li>
          </ul>
        </div>
        <div class="content-block login-content-block">
          <div class="row">
            <div class="col-100">
              <a v-on:click="doLogin" class="button button-fill">登录</a>
            </div>
          </div>
        </div>
      </form>
      <!-- form end -->
    </div>
  </div>
</template>

<script>
  import {tool} from '../assets/js/lib/utils'
  import {app} from '../assets/js/lib/appconfig'
  import login from '../assets/js/actions/login'

  export default {
    name: 'Login',
    data() {
      return {
        title: app.appname,
        subtitle: app.subtitle,
        loginname: "",
        password: "",
        isAutoLogin: false,
        isInWeiXin: false,
        bindToWX: true
      };
    },
    methods: {
      doLogin(){
        login.doPassAuth(this)
      }
    }
  }
</script>

<style lang="css" scoped>
.login {
    background-color: #fff;
    overflow: auto;
}


/*header*/

.login-header {
    margin-top: 2.75rem;
    text-align: center;
}

.login-header h1 {
    font-size: 1.35rem;
    color: #F65A44;
    text-align: center;
    padding-bottom: 0;
    margin-bottom: 0.2rem;
    font-weight: normal;
    margin-top: 0;
}

.login-header h2 {
    font-size: 0.75rem;
    color: #F65A44;
    text-align: center;
    font-weight: normal;
    margin: 0;
}


/*form*/

.login-form {
    margin: 2.5rem 0 0;
}

.login-form ul:before,
.login-form ul:after {
    display: none;
}

.login-form ul > li {
    height: 2.5rem;
}

.login-form .item-content {
    padding: 0;
    height: 2.5rem;
}

.login-form .item-inner:after {
    display: none;
}

.login-form .item-content .item-inner {
    border-bottom: solid 2px #E1E1E1;
    margin: 0 2.3rem;
    padding: 0;
    height: 2.5rem;
}

.login-form li:last-child .item-content .item-inner {
    border: none;
}

.login-form .item-content .item-inner .item-media {
    margin-right: 0.875rem;
    margin-left: 0.2rem;
    height: 2.5rem;
}

.login-form .item-content .item-inner .item-input {
    height: 2.5rem;
}

.login-form .item-content .item-inner .icon {
    font-size: 0.9rem;
    color: #CCCCCC;
}

.login-form .item-content .item-inner input {
    font-size: 0.6rem;
    height: 2.5rem;
    float: left;
}

.login-form .item-check {
    font-size: 0.6rem;
    color: #636363;
    height: 2.5rem;
    margin-left: 0.625rem;
}

.login-form .item-check label {
    font-size: 0.6rem;
    height: 2.5rem;
    line-height: 2.5rem;
    float: left;
    margin-left: 0.6rem;
    color: #545454;
}

.login-form .item-pwd a {
    font-size: 0.5rem;
    color: #545454;
}

.login-content-block {
    margin: 1rem 2.3rem;
    padding: 0;
    color: #535353;
}

.login-content-block .button.button-fill {
    height: 2.05rem;
    line-height: 2.05rem;
    background-color: #F65A44;
    font-size: 0.9rem;
}

.login-form .item-content .item-inner .item-pwd {
    position: absolute;
    right: 0;
    top: 0.175rem;
}
</style>