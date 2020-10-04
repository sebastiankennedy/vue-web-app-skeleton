<template>
  <div class="auth-login-page">
    <div class="auth-login-page-header"></div>
    <div class="auth-login-page-body">
      <van-row>
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="账号"
            label="账号"
            placeholder="请输入您的账号"
            :rules="[{ required: true, message: '请输入账号' }]"
            right-icon="manager-o"
          />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入您的密码"
            :rules="[{ required: true, message: '请输入密码' }]"
            right-icon="bag-o"
          />
          <div class="auth-login-form-register-and-forget-password">
            <p>忘记密码?</p>
            <p>暂无账号，去注册</p>
          </div>
          <div class="auth-login-form-footer">
            <van-button
              class="auth-login-submit-button"
              type="info"
              native-type="submit"
              size="normal"
            >
              登录
            </van-button>
          </div>
        </van-form>
      </van-row>
    </div>
    <div class="auth-login-page-footer">
      <p><router-link to="/auth/notice">《推广大使经销商协议》</router-link></p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Col, Row, Form, Field, Button } from "vant";

Vue.use(Col);
Vue.use(Row);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

export default {
  name: "AuthLogin",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {},
  },
};
</script>

<style scoped>
.auth-login-page {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.auth-login-page-header,
.auth-login-page-body,
.auth-login-page-footer {
  flex: 1 1 auto;
}
.auth-login-form-register-and-forget-password > p {
  padding-right: 1rem;
  text-align: right;
  font-size: 12px;
}

.auth-login-form-footer {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.auth-login-submit-button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
}
.auth-login-page-footer {
  position: absolute;
  bottom: 5px;
  width: 100%;
}
.auth-login-page-footer > p {
  font-size: 12px;
  text-align: center;
}
</style>

