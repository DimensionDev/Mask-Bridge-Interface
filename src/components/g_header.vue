<template>
  <div class="header_box">
    <img @click="toMask" class="logo" src="../assets/logo.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "g_header",
  setup() {
    const toMask = () => {
      window.open("//mask.io", "_blank");
    };
    return {
      toMask,
    };
  },
};
</script>
<style lang='less' scoped>
.header_box {
  padding: 1.5rem 0;
  .logo {
    cursor: pointer;
    width: 7rem;
  }
}
@media screen and (max-width: 1024px) {
  .header_box {
    .logo {
      width: 103px;
    }
  }
}
@media screen and(max-width: 500px) {
  .header_box{
    padding: 3rem 0;
  }
}
</style>