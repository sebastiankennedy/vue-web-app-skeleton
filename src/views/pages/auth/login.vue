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
            <p>
              <router-link class="text-blue" to="/auth/forget-password">
                忘记密码?
              </router-link>
            </p>
            <p>
              暂无账号，去<router-link class="text-blue" to="/auth/register"
                >注册</router-link
              >
            </p>
          </div>
          <div class="auth-login-form-footer">
            <van-button
              class="auth-login-submit-button"
              type="info"
              native-type="submit"
              size="normal"
              click="onSubmit"
            >
              登录
            </van-button>
          </div>
        </van-form>
      </van-row>
    </div>
    <div class="auth-login-page-footer">
      <p>
        <router-link class="text-blue" to="/auth/notice">
          《推广大使经销商协议》
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import AuthApi from "@/api/auth";
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
    onSubmit() {
      const data = {
        username: this.username,
        password: this.password,
      };
      AuthApi.login(data)
        .then((response) => {
          if (process.env.VUE_APP_ENV === "local") {
            console.log(response);
          }
          const data = {
            name: response.data.name,
            token: response.data.meta.token,
            avatar: response.data.avatar,
          };

          this.$store.dispatch("updateAuthInfo", data);
          this.$router.push("/home");
        })
        .catch((error) => {
          if (process.env.VUE_APP_ENV === "local") {
            console.log(error);
          }
        });
    },
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
  font-size: 14px;
}

.auth-login-form-footer {
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.auth-login-submit-button {
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
}
.auth-login-page-footer {
  position: absolute;
  bottom: 5px;
  width: 100%;
}
.auth-login-page-footer > p {
  font-size: 14px;
  text-align: center;
}
</style>

