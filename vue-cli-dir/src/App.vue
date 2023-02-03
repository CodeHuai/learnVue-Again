<template>
  <button @click="jump('/helloWorld')">动画</button>
  <button @click="jump('/home')">home</button>

  <router-view></router-view>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter()

    const jump = function (flag) {
      router.push(flag)
    }
    return {
      jump
    }
  }
}
</script>

<style>

</style>
