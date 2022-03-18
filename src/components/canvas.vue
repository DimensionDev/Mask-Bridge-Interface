<template>
  <canvas ref="cRef" id="flourishCanvas" />
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import TickManager from "../assets/canvas/TickerManager";
import Shader2d from "../assets/canvas/shader2d";
import circleVert from "../assets/canvas/circleVert.vert";
import circleFrag from "../assets/canvas/circleFrag.frag";
export default {
  name: "canvas",
  setup() {
    const cRef = ref(null);
    onMounted(() => {
      const ticker = typeof window !== `undefined` ? new TickManager() : null;
      if (!ticker) return;
      const shader = new Shader2d(cRef.value, circleVert, circleFrag, {
        u_mouse: {
          type: "vec2",
          value: { x: 0, y: 0 },
        },
        u_spread: {
          type: "float",
          value: 1.0,
        },
        u_speed: {
          type: "float",
          value: 1.0,
        },
        u_warp: {
          type: "float",
          value: 1.0,
        },
        u_focus: {
          type: "float",
          value: 1.0,
        },
        u_itensity: {
          type: "float",
          value: 0.5,
        },
      });

      function onTick(delta, elapsed) {
        shader.render(elapsed);
      }
      handleResize(shader);
      ticker.on(onTick);
      window.addEventListener("resize", () => handleResize(shader));
    });
    const handleResize = (shader) => {
      shader.resize(document.documentElement.clientWidth, document.documentElement.clientHeight);
    };
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });
    return {
      cRef,
    };
  },
};
</script>
<style lang='less' scoped>
</style>