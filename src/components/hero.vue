<template>
  <div class="hero_box">
    <div class="left">
      <div class="title_xs">Bridge your Mask Token</div>
      <div class="title_md_box">
        <div class="title_md">CROSS-CHAIN</div>
        <div class="title_bg">
          <img src="../assets/btn_bg.png" alt="" />
          <div class="text">BRIDGES</div>
          <img class="badge" src="../assets/badge_bottom.svg" alt="">
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
import { reactive, toRefs } from "vue";
export default {
  name: "hero",
  setup() {
    const data = reactive({});
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
  margin-bottom: 4rem;
  @media screen and (max-width: 500px) {
    padding-left: 0;
    flex-direction: column;
    align-items: flex-start;
  }
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
      font-size: 3rem;
      .title_md {
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.125em;
        color: #1c68f3;
      }
      .title_bg {
        width: fit-content;
        position: relative;
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        img {
          width: 20rem;
        }
        .text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          letter-spacing: 0.085em;
          color: #ffffff;
          display: flex;
          align-items: center;
          text-align: center;
        }
        .badge{
          position: absolute;
          right: 0;
          bottom: 0;
          width: 10rem;
          transform: translate(60%,35%);
        }
      }
      .title_sub {
        color: black;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
      }
    }
    @media screen and (max-width: 500px) {
      margin-bottom: 3rem;
      .title_xs{
        font-size: 1.5rem;
      }
      .title_md_box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 3rem;
        .title_bg {
          width: 45%;
          min-width: 150px;
          margin: 0;
          img {
            width: 100%;
          }
          .badge{
            display: none;
          }
        }
        .title_md {
          white-space: nowrap;
        }
      }
      .title_sub {
        display: none;
      }
    }
    @media screen and(max-width: 400px) {
      .title_md_box {
        font-size: 2.5rem;
      }
    }
  }
  .right {
    @media screen and(max-width: 500px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .right_img {
      @media screen and (max-width: 500px) {
        width: 80vmin;
        min-width: 280px;
      }
      width: 30rem;
    }
  }
}
</style>