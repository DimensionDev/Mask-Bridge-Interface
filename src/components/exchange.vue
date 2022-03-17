<template>
  <div class="ex_box">
    <div class="title">Exchanges</div>
  </div>
</template>

<script lang='js'>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
export default {
    name: '',
      setup() {
          console.log('1-开始创建组件-setup')
          const data = reactive({

          })
          onBeforeMount(() => {
              console.log('2.组件挂载页面之前执行----onBeforeMount')
          })
          onMounted(() => {
              console.log('3.-组件挂载到页面之后执行-------onMounted')
          })
          const refData = toRefs(data);
          return {
              ...refData,
          }

      }
  };
</script>
<style lang='less' scoped>
.ex_box {
  width: 100%;
  margin-left: 1rem;
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
  }
}
</style>