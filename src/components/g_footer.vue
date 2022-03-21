<template>
  <div class="title">Community</div>
  <div class="footer_box">
    <div class="left">
      <div class="up">© 2022 Mask Network</div>
      <div class="bottom">All Rights Reserved</div>
    </div>
    <div class="right">
      <a
        class="icon"
        v-for="item in socialMediaBox"
        :key="item.key"
        @click="(e) => handleClick(e, item)"
      >
        <img :src="item.icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "g_footer",
  setup() {
    const data = reactive({
      socialMediaBox: [
        {
          key: 0,
          icon: new URL("../assets/media/twitter.svg", import.meta.url),
          link: "https://twitter.com/realMaskNetwork",
        },
        {
          key: 1,
          icon: new URL("../assets/media/Telegram.svg", import.meta.url),
          link: "https://t.me/maskbook_group#telegram",
        },
        {
          key: 2,
          icon: new URL("../assets/media/Negative.svg", import.meta.url),
          link: "https://discord.com/invite/4SVXvj7",
        },
        {
          key: 3,
          icon: new URL("../assets/media/facebook.svg", import.meta.url),
          link: "https://www.facebook.com/masknetwork",
        },
        {
          key: 4,
          icon: new URL("../assets/media/reddit.svg", import.meta.url),
          link: "https://www.reddit.com/r/MaskNetwork/",
        },
        {
          key: 5,
          icon: new URL("../assets/media/github.svg", import.meta.url),
          link: "https://github.com/DimensionDev",
        },
        {
          key: 6,
          icon: new URL("../assets/media/Youtube.svg", import.meta.url),
          link: "https://www.youtube.com/c/MaskNetwork",
        },
        // {
        //   key: 7,
        //   icon: new URL("../assets/media/Medium.svg", import.meta.url),
        //   link: "",
        // },
      ],
    });
    const handleClick = (e, item) => {
      e.preventDefault();
      if (item.link) {
        window.open(item.link, "_blank");
      }
    };
    const refData = toRefs(data);
    return {
      ...refData,
      handleClick,
    };
  },
};
</script>
<style lang='less' scoped>
.title {
  display: none;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1.5rem;
}
.footer_box {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2rem;
}
.left {
  color: black;
  font-family: "PingFang SC";
  line-height: 1.5;
  .up {
    margin-bottom: 6px;
  }
  .bottom {
    font-size: 0.8rem;
    opacity: 0.7;
  }
}
.right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  .icon {
    text-decoration: none;
    &:hover {
      opacity: 1;
    }
    opacity: 0.7;
    cursor: pointer;
  }
}
@media screen and(max-width: 500px) {
  .title{
    display: block;
    margin-bottom: 28px;
  }
  .footer_box {
    flex-direction: column-reverse;
    .left{
      place-self: center;
      text-align: center;
      margin-bottom: 36px;
    }
    .right{
      margin-bottom: 50px;
      .icon{
        opacity: 1;
      }
    }
  }
}
</style>