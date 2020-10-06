<template>
  <div></div>
</template>

<script>
import {
  getJsonWebToken,
  getToken,
  removeJsonWebToken,
  removeToken,
} from "@/utils/auth";
export default {
  name: "AuthLogout",
  created() {
    if (getJsonWebToken()) {
      removeJsonWebToken();
    }
    if (getToken()) {
      removeToken();
    }

    this.$router.push("/auth/login");
  },
};
</script>

<style scoped>
</style>