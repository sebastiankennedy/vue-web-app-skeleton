<template>
  <div class="auth-logout-page" v-if="showChangePasswordSuccess">
    <van-nav-bar right-text="返回" @click-right="onClickRight" />
    <div class="auth-logout-page-body">
      <h3 style="text-align:center">您已成功修改密码<br />请返回首页重新登录</h3>
      <div><van-icon name="passed" size="6rem" color="#07c160" /></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { NavBar, Icon } from "vant";
import {
  getJsonWebToken,
  getToken,
  removeJsonWebToken,
  removeToken,
} from "@/utils/auth";

Vue.use(Icon);
Vue.use(NavBar);

export default {
  name: "AuthLogout",
  data() {
    return {
      showChangePasswordSuccess: false,
    };
  },
  created() {
    if (getJsonWebToken()) {
      removeJsonWebToken();
    }
    if (getToken()) {
      removeToken();
    }

    if (this.$route.query.from === "forget_password") {
      this.showChangePasswordSuccess = true;
    } else {
      this.$router.push("/auth/login");
    }
  },
  methods: {
    onClickRight() {
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style scoped>
.auth-logout-page {
  width: 100vw;
  height: 100vh;
}
.auth-logout-page-body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -6rem
}
</style>