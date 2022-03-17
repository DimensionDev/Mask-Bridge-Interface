<template>
  <div class="footer_box">
    <div class="left">
      <div class="up">© 2022 Mask Network</div>
      <div class="bottom">All Rights Reserved</div>
    </div>
    <div class="right">
        <div class="icon" v-for="item in socialMediaBox" :key="item.key" >
            <img :src="item.icon" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "footer",
  setup() {
    const data = reactive({
        socialMediaBox:[
            {key:0,icon: new URL('../assets/media/twitter.png',import.meta.url),link:'' },
            {key:1,icon: new URL('../assets/media/Telegram.png',import.meta.url),link:'' },
            {key:2,icon: new URL('../assets/media/discord.png',import.meta.url),link:'' },
            {key:3,icon: new URL('../assets/media/facebook.png',import.meta.url),link:'' },
            {key:4,icon: new URL('../assets/media/reddit.png',import.meta.url),link:'' },
            {key:5,icon: new URL('../assets/media/github.png',import.meta.url),link:'' },
            {key:6,icon: new URL('../assets/media/Youtube.png',import.meta.url),link:'' },
            {key:7,icon: new URL('../assets/media/Medium.png',import.meta.url),link:'' },
        ]
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
.footer_box {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.left {
  color: black;
  font-family: "PingFang SC";
  line-height: 1.5;
  .up {
    margin-bottom: 0.2rem;
  }
  .bottom {
    font-size: 0.9rem;
    opacity: 0.7;
  }
}
.right{
    display: flex;
    align-items: center;
    gap: 1.5rem;
    .icon{
        &:hover{
            opacity: 1;
        }
        opacity: .7;
        cursor: pointer;
    }
}
</style>