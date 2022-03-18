<template>
  <div class="header_box">
    <img class="logo" src="../assets/logo.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "g_header",
  setup() {},
};
</script>
<style lang='less' scoped>
.header_box {
  padding: 1.5rem 0;
  .logo {
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
</style>