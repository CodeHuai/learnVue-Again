<template>
  <div class="container">
    <button @click="isShow = !isShow">测试</button>
    <Transition>
      <div v-if="isShow" class="pic-container">
        <img src="../../assets/img/logo.png">
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'HelloWorld',
  setup() {
    const isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
}

.v-enter-active {
  transition: all 3s ease;
}

.v-enter-from {
  transform: translateX(100%);
}

.v-leave-to {
  transform: translateX(100%);
}

.pic-container {
  position: absolute;
  overflow: hidden;
  width: 200px;
  height: 200px;
  /* 注意这里的，不要着眼在动画开始和动画结束 */
  /* 要动态的改变动画开始和动画结束的位置，要和初识位置作比较，不要看整个动画过程 */
  right: 10px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}

img {
  width: 100px;
}
</style>