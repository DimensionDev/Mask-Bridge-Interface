<template>
  <div class="box">
    <CanvasBg class="cvx" />
    <div class="container">
      <div class="layout">
        <BridgeHeader />
        <Hero />
        <Main />
        <Exchange />
        <Footer />
      </div>
    </div>
  </div>
</template>

<script >
import BridgeHeader from "../components/header.vue";
import Hero from "../components/hero.vue";
import Main from "../components/main.vue";
import Exchange from "../components/exchange.vue";
import Footer from "../components/footer.vue";
import CanvasBg from "../components/canvas.vue";
export default {
  name: "layout",
  components: {
    BridgeHeader,
    Hero,
    Main,
    Exchange,
    Footer,
    CanvasBg,
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
  .layout{
    width: 75rem;
    margin: auto;
  }
}
</style>