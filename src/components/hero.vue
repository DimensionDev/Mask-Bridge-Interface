<template>
  <div class="hero_box">
    <div class="left">
      <div class="title_xs">Bridge your Mask Token</div>
      <div class="title_md_box">
        <div class="title_md">CROSS-CHAIN</div>
        <div class="title_bg">
            <img src="../assets/btn_bg.png" alt="">
          <div class="text">BRIDGES</div>
        </div>
      </div>
      <div class="title_sub">Using services provided below</div>
    </div>
    <div class="right">
      <img class="right_img" src="../assets/hero_img.png" alt="" />
    </div>
  </div>
</template>

<script >
import { reactive, toRefs, onBeforeMount, onMounted } from "vue";
export default {
  name: "hero",
  setup() {
    const data = reactive({});
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
.hero_box {
  width: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title_xs {
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.13em;
      color: #1c68f3;
      margin-bottom: 1rem;
    }
    .title_md_box {
      .title_md {
        font-weight: 700;
        font-size: 3rem;
        line-height: 1.3;
        letter-spacing: 0.125em;
        color: #1c68f3;
      }
      .title_bg {
          width: fit-content;
        position: relative;
        margin-bottom: 1rem;
        img{
            width: 21.5rem;
        }
        .text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
          font-size: 3rem;
          letter-spacing: 0.085em;
          color: #ffffff;
        }
      }
    }
    .title_sub {
      color: black;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5;
    }
  }
  .right {
    .right_img {
      width: 30rem;
    }
  }
}
</style>