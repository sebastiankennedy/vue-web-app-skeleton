<template>
  <div class="home-index-page">
    <div class="home-index-page-header">
        <van-image width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
    <div class="home-index-page-body">
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);

export default {
  name: "HomeIndex",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
</style>