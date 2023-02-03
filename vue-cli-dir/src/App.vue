<template>
  <div class="container">
    <button @click="isShow = !isShow">测试</button>
    <Transition>
      <HelloWorld v-if="isShow" />
    </Transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const isShow = ref(false)
    return {
      isShow
    }
  }
}
</script>

<style>
.container {
  height: 400px;
  overflow: hidden;
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
</style>
