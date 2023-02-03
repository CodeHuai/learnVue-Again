<template>
  <div class="pic-container">
    <img src="../assets/img/logo.png">
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
.pic-container {
  position: absolute;
  overflow: hidden;
  width: 200px;
  height: 200px;
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