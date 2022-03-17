<template>
  <div class="ex_box">
    <div class="title">Exchanges</div>
    <div class="ex_items" >
      <div class="item" v-for="item in map" :key="item.key" >
        <img :src="item.icon">
      </div>
    </div>
  </div>
</template>

<script lang='js'>
import { reactive,toRefs,onBeforeMount,onMounted} from 'vue'
export default {
    name: 'exchange',
      setup() {
          const data = reactive({
            map:[
              {key:0, icon:new URL('../assets/exchanges/biance.svg',import.meta.url),link:''},
              {key:1, icon:new URL('../assets/exchanges/huobi.svg',import.meta.url),link:''},
              {key:2, icon:new URL('../assets/exchanges/okx.svg',import.meta.url),link:''},
              {key:3, icon:new URL('../assets/exchanges/upbit.svg',import.meta.url),link:''},
              {key:4, icon:new URL('../assets/exchanges/coinbase.svg',import.meta.url),link:''},
              {key:5, icon:new URL('../assets/exchanges/kucoin.svg',import.meta.url),link:''},
              {key:6, icon:new URL('../assets/exchanges/gate.svg',import.meta.url),link:''}
            ]
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
    margin-bottom: 1.5rem;
  }
  .ex_items{
    display: flex;
    align-items: center;
    gap: 3rem;
    .item{
      &:hover{
        filter: none;
      }
      cursor: pointer;
      filter: grayscale(100);
      height: 1.7rem;
      img{
        height: 100%;
      }
    }
  }
}
</style>