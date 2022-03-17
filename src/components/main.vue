<template>
  <div class="main_box">
    <div class="title">Cross-chain services</div>
    <div class="main_ctx">
      <div class="item" v-for="item in mainItems" :key="item.key">
        <img :src="item.icon" alt="" />
        <div class="ctx">
          <div class="ctx_title"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "main",
  setup() {
    const data = reactive({
      mainItems: [
        {
          key: 0,
          icon: new URL("../assets/item0.png", import.meta.url),
          des: "To bridge between ETH and Polygon Chain, click to go to Polygon Bridge.",
        },
        {
          key: 1,
          icon: new URL("../assets/item1.png", import.meta.url),
          des: "To bridge between ETH, BNB Chain, Polygon, Avalanche, etc., click to go to cBridge.",
        },
      ],
    });
    onBeforeMount(() => {});
    onMounted(() => {});
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style lang='less' scoped>
.main_box {
  width: 100%;
  margin-left: 1rem;
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
  }
  .main_ctx {
    display: flex;
    align-items: center;
    .item {
      width: 32.125rem;
      height: 9.625rem;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      align-items: flex-start;
    }
  }
}
</style>