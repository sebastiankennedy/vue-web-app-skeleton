<template>
  <div></div>
</template>

<script>
import configApi from "@/api/config";
export default {
  data() {
    return {
      richContent: null,
    };
  },
  created() {
    configApi
      .getAuthNotice()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style>
</style>