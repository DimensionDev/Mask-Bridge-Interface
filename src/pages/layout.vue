<template>
  <div class="box">
    <BgCanvas class="cvx" />
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
import BgCanvas from "../components/bg_canvas.vue";
export default {
  name: "layout",
  components: {
    Gheader,
    Hero,
    Gmain,
    Exchange,
    Gfooter,
    BgCanvas,
  },
};
</script>
<style lang='less' scoped>
.box {
  width: 100%;
  height: 100vh;
  overflow: hidden;
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
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 1;
  .layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    @media screen and(max-width: 1024px) {
      width: 95%;
      min-width: 300px;
    }
    width: 75rem;
    margin: auto;
  }
}
</style>