<template>
  <div class>
    <h1>输入框的布局</h1>
    <div class="container">
      <div class="InputAddOn">
        <span class="InputAddOn-item">
          <i class="el-icon-search"></i>
        </span>
        <input class="InputAddOn-field" />
        <button class="InputAddOn-item">Go</button>
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
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  position: relative;
  height: 200px;
  display: flex;
  justify-content: center;
}

.InputAddOn {
  width: 400px;
  height: 30px;
  display: flex;
}

.InputAddOn-field {
  flex: 1;
}

.InputAddOn-item:first-child {
  background-color: lightgrey;
}

.InputAddOn-item {
  width: 30px;
  line-height: 30px;
  text-align: center;
  // border: 1px solid grey;
}
</style>
