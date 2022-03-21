<template>
  <div class="ex_box">
    <div class="title">Exchanges</div>
    <div class="ex_items">
      <a
        class="item"
        v-for="item in map"
        :key="item.key"
        :href="item.link"
        target="_blank"
      >
        <img :src="item.icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "exchange",
  setup() {
    const data = reactive({
      map: [
        {
          key: 0,
          icon: new URL("../assets/exchanges/biance.svg", import.meta.url),
          link: "https://www.binance.com/",
        },
        {
          key: 1,
          icon: new URL("../assets/exchanges/huobi.svg", import.meta.url),
          link: "https://www.huobi.com/",
        },
        {
          key: 2,
          icon: new URL("../assets/exchanges/okx.svg", import.meta.url),
          link: "https://www.okx.com/",
        },
        {
          key: 3,
          icon: new URL("../assets/exchanges/upbit.svg", import.meta.url),
          link: "https://upbit.com/",
        },
        {
          key: 4,
          icon: new URL("../assets/exchanges/coinbase.svg", import.meta.url),
          link: "https://www.coinbase.com/",
        },
        {
          key: 5,
          icon: new URL("../assets/exchanges/kucoin.svg", import.meta.url),
          link: "https://www.kucoin.com/",
        },
        {
          key: 6,
          icon: new URL("../assets/exchanges/gate.svg", import.meta.url),
          link: "https://www.gate.io/",
        },
      ],
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
};
</script>
<style lang='less' scoped>
.ex_box {
  width: 100%;
  margin-left: 1rem;
  margin-bottom: 5.5rem;
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    color: black;
    margin-bottom: 1.5rem;
  }
  .ex_items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    .item {
      text-decoration: none;
      &:hover {
        filter: none;
      }
      cursor: pointer;
      filter: grayscale(100%) opacity(.6);
      height: 32px;
      img {
        height: 100%;
      }
    }
  }
}
@media screen and(max-width: 540px) {
  .ex_box {
    .title {
      margin-bottom: 28px;
    }
    .ex_items {
      .item {
        filter: none;
        height: 24px;
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .ex_box {
    margin-left: 0;
  }
}
</style>