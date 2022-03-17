<template>
  <div class="box">
    <Header />
    <Hero />
    <Main />
    <Exchange />
    <Footer />
  </div>
</template>

<script >
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
import Header from "../components/header.vue";
import Hero from "../components/hero.vue";
import Main from "../components/main.vue";
import Exchange from "../components/exchange.vue";
import Footer from "../components/footer.vue";
export default {
  name: "layout",
  components: {
    Header,
    Hero,
    Main,
    Exchange,
    Footer,
  }
};
</script>
<style lang='less' scoped>
.box {
  max-width: 80rem;
  min-width: 80rem;
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  margin: auto;
}
</style>