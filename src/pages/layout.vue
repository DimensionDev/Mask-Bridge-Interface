<template>
  <div class="box" >
      <Header />
      <Hero />
  </div>
</template>

<script >
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
import Header from '../components/header.vue'
import Hero from '../components/hero.vue'
export default {
    name: 'layout',
    components:{
        Header,
        Hero
    },
      setup() {
          const data = reactive({

          })
          onBeforeMount(() => {
          })
          onMounted(() => {
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style lang='less' scoped>
.box{
    max-width: 80rem;
    min-width: 80rem;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin: auto;
}
</style>