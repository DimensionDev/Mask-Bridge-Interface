<template>
  <div class="main_box">
    <div class="title">Cross-chain services</div>
    <div class="main_ctx">
      <a
        class="item"
        v-for="item in mainItems"
        :key="item.key"
        :href="item.link"
        target="_blank"
      >
        <div class="inner">
          <img class="chain_icon" :src="item.icon" alt="" />
          <div class="ctx">
            <div v-if="item.key == 0" class="ctx_title">
              ETH
              <img class="arrow" src="../assets/item0_arrow.svg" alt="" />
              Polygon
            </div>
            <div v-else class="ctx_title">cBridge Multichain Services</div>
            <div class="ctx_des">{{ item.des }}</div>
            <div class="ctx_arrow">
              <img src="../assets/arrow.png" alt="" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script >
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "g_main",
  setup() {
    const data = reactive({
      mainItems: [
        {
          key: 0,
          icon: new URL("../assets/item0.svg", import.meta.url),
          des: "To bridge between ETH and Polygon Chain, click to go to Polygon Bridge.",
          link: "https://wallet.polygon.technology/",
        },
        {
          key: 1,
          icon: new URL("../assets/item1.svg", import.meta.url),
          des: "To bridge between ETH, BNB Chain, Polygon, Avalanche, etc., click to go to cBridge.",
          link: "https://cbridge.celer.network/",
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
  margin-bottom: 4rem;
  @media screen and(max-width: 500px) {
    margin-left: 0;
  }
  .title {
    @media screen and(max-width: 500px) {
      margin-bottom: 28px;
    }
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1.5rem;
  }
  .main_ctx {
    display: flex;
    align-items: center;
    gap: 2rem;
    .item {
      text-decoration: none;
      &:hover {
        background-image: linear-gradient(#fff, #fff),
          linear-gradient(94.88deg, #27ffd9 1.96%, #4048ff 100%);
        padding: 2px;
        background-clip: content-box, padding-box;
        transition: filter 0.5s ease;
      }
      cursor: pointer;
      width: 33rem;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
      border-radius: 20px;
      padding: 2px;
      border: 2px solid transparent;
      box-sizing: margin-box;
      .inner {
        margin: 0.5rem 1rem;
        display: flex;
        align-items: flex-start;
        .chain_icon {
          width: 3rem;
          margin-right: 10px;
        }
        .ctx {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          .ctx_title {
            font-family: "PingFang SC";
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 2;
            color: #111432;
            display: flex;
            align-items: center;
            gap: 1rem;
            img {
              width: 1.5rem;
            }
          }
          .ctx_des {
            font-family: "PingFang SC";
            font-weight: 500;
            font-size: 0.8rem;
            line-height: 1.5;
            margin-top: 6px;
            margin-bottom: 12px;
            color: #7b8192;
          }
          .ctx_arrow {
            width: 1.3rem;
            img {
              width: 100%;
            }
          }
        }
      }
    }
    @media screen and (max-width: 1024px) {
      .item {
        min-height: 15rem;
      }
    }
    @media screen and (max-width: 768px) {
      justify-content: center;
    }
    @media screen and (max-width: 540px) {
      flex-direction: column;
      .item {
        width: 90vmin;
        background-image: linear-gradient(#fff, #fff),
          linear-gradient(94.88deg, #27ffd9 1.96%, #4048ff 100%);
        padding: 2px;
        background-clip: content-box, padding-box;
        transition: filter 0.5s ease;
      }
    }
    @media screen and (max-width: 500px) {
      .item {
        width: 95%;
      }
    }
  }
}
</style>