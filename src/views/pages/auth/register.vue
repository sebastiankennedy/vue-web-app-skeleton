<template>
  <div class="auth-register-page">
    <div class="auth-register-page-body">
      <van-form @submit="onSubmit">
        <van-field
          v-model="phone"
          name="手机号码"
          label="手机号码"
          placeholder="请输入手机号码"
          :rules="[{ required: true, message: '请输入手机号码' }]"
          class="mb-1"
        />
        <van-field
          v-model="id_no"
          name="身份证号"
          label="身份证号"
          placeholder="身份证号"
          :rules="[{ required: true, message: '请输入身份证号' }]"
          class="mb-1"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请输入密码' }]"
          class="mb-1"
        />
        <van-field
          v-model="code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true, message: '请输入短信验证码' }]"
          class="mb-1"
        >
          <template #button>
            <van-button
              size="small"
              type="primary"
              native-type="button"
              v-on:click="sendCode"
            >
              发送验证码
            </van-button>
          </template>
        </van-field>
        <div class="auth-register-submit-container">
          <van-button
            class="auth-register-submit-button"
            size="normal"
            type="info"
            native-type="submit"
            click="sendCode"
          >
            注册
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="auth-register-page-footer">
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
import authApi from "@/api/auth";
import { Button, Form, Field } from "vant";

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

export default {
  data() {
    return {
      phone: null,
      id_no: null,
      password: null,
      code: null,
      key: null,
    };
  },
  methods: {
    sendCode() {
      const data = {
        phone: this.phone,
        template: "SMS_204160234",
      };
      authApi
        .sendCode(data)
        .then((response) => {
          this.key = response.data.key;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      const data = {
        phone: this.phone,
        id_no: this.id_no,
        password: this.password,
        code: this.code,
        key: this.key,
      };

      authApi
        .register(data)
        .then((response) => {
          const data = {
            name: response.data.name,
            token: response.data.meta.token,
            avatar: response.data.avatar,
          };

          this.$store.dispatch("register", data);
          this.$router.push("/home");
        });
    },
  },
};
</script>

<style scoped>
.auth-register-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.auth-register-page-body,
.auth-register-page-footer {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column-reverse;
}
.auth-register-submit-container {
  margin: 16px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.auth-register-submit-button {
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
}
.auth-register-page-footer > p {
  font-size: 14px;
  text-align: center;
}
</style>