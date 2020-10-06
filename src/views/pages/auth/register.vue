<template>
  <div class="auth-register-page">
    <div class="auth-register-body">
      <van-cell-group>
        <van-field
          v-model="value1"
          label="手机号码"
          placeholder="请输入手机号码"
        />
        <van-field
          v-model="value2"
           label="身份证号"
          placeholder="请输入身份证号码"
        />
        <van-field
          v-model="value2"
           label="密码"
          placeholder="请输入密码"
        />
        <van-field
          v-model="value2"
           label="验证码"
          placeholder="请输入验证码"
        />
      </van-cell-group>
    </div>
    <div class="auth-footer-body"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Cell, CellGroup, Field } from "vant";

Vue.use(Cell);
Vue.use(Field);
Vue.use(CellGroup);

export default {
  data() {
    return {
      phone: null,
      id_no: null,
      password: null,
      confirmation_password: null,
      code: null,
    };
  },
  methods: {
    sendCode() {},
    onSubmit() {},
  },
};
</script>

<style scoped>
</style>