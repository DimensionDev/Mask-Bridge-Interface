<template>
  <div class="box">
    <div class="container">
      <div class="layout">
        <Gheader />
        <Hero />
        <Gmain />
        <Exchange />
        <Gfooter />
      </div>
    </div>
  </div>
</template>

<script >
import Gheader from "../components/g_header.vue";
import Hero from "../components/hero.vue";
import Gmain from "../components/g_main.vue";
import Exchange from "../components/exchange.vue";
import Gfooter from "../components/g_footer.vue";
export default {
  name: "layout",
  components: {
    Gheader,
    Hero,
    Gmain,
    Exchange,
    Gfooter,
  },
};
</script>
<style lang='less' scoped>
.box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("../assets/bg.png") no-repeat;
  background-size: 100% 100%;
  @media screen and (max-width: 540px) {
    background: url("../assets/mb_bg.png") no-repeat;
    background-size: 100% 100%;
  }
}
.cvx {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.container {
  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    @media screen and(max-width: 1024px) {
      width: 95%;
      min-width: 280px;
    }
    @media screen and(max-width: 500px) {
      width: 90%;
    }
    width: 75rem;
    margin: auto;
  }
}
</style>