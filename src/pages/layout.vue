<template>
  <div class="box">
    <CanvasBg />
    <div class="content">
      <Header />
      <Hero />
      <Main />
      <Exchange />
      <Footer />
    </div>
  </div>
</template>

<script >
import Header from "../components/header.vue";
import Hero from "../components/hero.vue";
import Main from "../components/main.vue";
import Exchange from "../components/exchange.vue";
import Footer from "../components/footer.vue";
import CanvasBg from "../components/canvas.vue";
export default {
  name: "layout",
  components: {
    Header,
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
  position: relative;
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75rem;
    margin: auto;
  }
}
</style>