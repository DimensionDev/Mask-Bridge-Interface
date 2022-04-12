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
        <img class="pc" :src="item.micon" />
        <img class="mobile" :src="item.icon" />
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
          micon: new URL("../assets/m_exchange/biance.svg", import.meta.url),
          link: "https://www.binance.com/",
        },
        {
          key: 1,
          icon: new URL("../assets/exchanges/huobi.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/huobi.svg", import.meta.url),
          link: "https://www.huobi.com/",
        },
        {
          key: 2,
          icon: new URL("../assets/exchanges/okx.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/okx.svg", import.meta.url),
          link: "https://www.okx.com/",
        },
        {
          key: 3,
          icon: new URL("../assets/exchanges/upbit.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/upbit.svg", import.meta.url),
          link: "https://upbit.com/",
        },
        {
          key: 4,
          icon: new URL("../assets/exchanges/coinbase.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/Coinbase.svg", import.meta.url),
          link: "https://www.coinbase.com/",
        },
        {
          key: 5,
          icon: new URL("../assets/exchanges/kucoin.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/kucoin.svg", import.meta.url),
          link: "https://www.kucoin.com/",
        },
        {
          key: 6,
          icon: new URL("../assets/exchanges/gate.svg", import.meta.url),
          micon: new URL("../assets/m_exchange/gate.svg", import.meta.url),
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
      cursor: pointer;
      height: 32px;
      width: 109px;
      .pc {
        display: block;
        height: 100%;
        width: 100%;
      }
      .mobile {
        display: none;
      }
      text-decoration: none;
      &:hover {
        .mobile {
          display: block;
          height: 100%;
        }
        .pc {
          display: none;
        }
      }
    }
  }
}
@media screen and(max-width: 540px) {
  .ex_box {
    .title {
      font-size: 20px;
      margin-bottom: 16px;
    }
    .ex_items {
      justify-content: space-between;
      .item {
        .pc {
          display: none;
        }
        .mobile {
          display: block;
          height: 100%;
        }
        height: 30px;
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