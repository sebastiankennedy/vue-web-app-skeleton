<template>
  <div class="auth-forget-password-page">
    <div class="auth-forget-password-page-body">
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
          v-model="password"
          type="password"
          name="密码"
          label="新的密码"
          placeholder="请输入新的密码"
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
              loading-type="spinner"
              v-on:click="sendCode"
              v-bind:disabled="sendCodeDisabled"
              v-bind:loading="sendCodeLoading"
              v-bind:loading-text="sendCodeLoadingText"
            >
              发送验证码
            </van-button>
          </template>
        </van-field>
        <div class="auth-forget-password-submit-container">
          <van-button
            class="auth-forget-password-submit-button"
            size="normal"
            type="info"
            native-type="submit"
            click="sendCode"
          >
            修改密码
          </van-button>
        </div>
      </van-form>
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
  name: "AuthForgetPassword",
  data() {
    return {
      key: null,
      code: null,
      phone: null,
      password: null,
      seconds: 90,
      sendCodeDisabled: false,
      sendCodeLoading: false,
      sendCodeLoadingText: "90秒后可重发",
    };
  },
  methods: {
    sendCode() {
      if (!this.phone) {
        this.$toast.fail("手机号码不能为空");
        return;
      }

      const data = {
        phone: this.phone,
        template: "SMS_204160233",
      };

      authApi
        .sendCode(data)
        .then((response) => {
          this.key = response.data.key;
          this.sendCodeLoading = true;
          this.sendCodeDisabled = true;

          let that = this;
          let timer = setInterval(function () {
            that.seconds--;
            if (that.seconds === 0) {
              that.seconds = 90;
              that.sendCodeLoading = false;
              that.sendCodeDisabled = false;
              clearInterval(timer);
            }
            that.sendCodeLoadingText = that.seconds + "秒后可重发";
          }, 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onSubmit() {
      const data = {
        key: this.key,
        code: this.code,
        phone: this.phone,
        password: this.password,
      };

      authApi.changePassword(data).then((response) => {
        console.log(response);
        if (response.status_code === 0) {
          this.$router.push("/auth/logout?from=forget_password");
        }
      });
    },
  },
};
</script>

<style scoped>
.auth-forget-password-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.auth-forget-password-page-body,
.auth-forget-password-page-footer {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-forget-password-submit-container {
  margin: 16px;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.auth-forget-password-submit-button {
  width: 6rem;
  height: 2rem;
  border-radius: 5px;
}
</style>