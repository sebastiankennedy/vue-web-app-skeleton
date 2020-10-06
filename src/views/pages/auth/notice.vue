<template>
  <div>
    <van-nav-bar right-text="返回" @click-right="onClickRight" />
    <van-skeleton title title-width="30%" :row="16" :loading="isLoading">
      <div>
        <h4 class="auth-notice-title">{{ title }}</h4>
        <div class="auth-notice-rich-text-content" v-html="richContent"></div>
        <div class="auth-notice-agree">
          <van-checkbox disabled shape="square" v-model="checked">我已阅读并同意该协议</van-checkbox>
        </div>
      </div>
    </van-skeleton>
  </div>
</template>

<script>
import Vue from "vue";
import { goBack } from "@/router";
import configApi from "@/api/config";
import { NavBar, Skeleton, Checkbox, CheckboxGroup, Field } from "vant";

Vue.use(Field);
Vue.use(NavBar);
Vue.use(Skeleton);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);

export default {
  data() {
    return {
      title: "",
      checked: true,
      richContent: "",
    };
  },
  created() {
    configApi
      .getAuthNotice()
      .then((response) => {
        this.title = response.data.title;
        this.richContent = response.data.rich_text_content;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onClickRight() {
      goBack("/auth/login");
    },
  },
  computed: {
    isLoading() {
      return this.$store.getters.getIsLoading;
    },
  },
};
</script>

<style scoped>
.van-skeleton__title {
  margin: 0 auto;
  margin-top: 12px;
}
.auth-notice-title {
  text-align: center;
}
.auth-notice-rich-text-content {
  padding: 0 2rem;
  padding-bottom: 2rem;
  max-width: 100vw;
  height: 100%;
}
.auth-notice-agree {
  padding: 0 2rem;
  padding-bottom: 2rem;
}
</style>