<template>
  <div class>
    <h1>流式布局</h1>
    <div class="container">
      <div class="parent">
        <div class="child" v-for="(i,index) in 10" :key="index">{{i}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  border: 4px solid lightgrey;
  border-radius: 10px;
  width: 40%;
  margin: 2% auto;
  position: relative;
}

.parent {
  width: 200px;
  height: 150px;
  margin: 10% auto;
  background-color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
}

.child {
  box-sizing: border-box;
  height: 50px;
  line-height: 50px;
  flex: 0 0 25%;
  background-color: white;
  border: 1px solid red;
}
</style>
