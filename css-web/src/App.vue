<template>
  <div id="app">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import MyHeader from './layout/MyHeader.vue';

export default {
  name: 'app',
  components: {
    MyHeader,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
