<template>
  <div class>
    <h1>请将鼠标移动到下面的矩形上：</h1>
    <ul class="test">
      <li>背景色过渡</li>
      <li>背景色过渡</li>
      <li>背景色过渡</li>
      <li>背景色过渡</li>
      <li>背景色过渡</li>
    </ul>
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
h1 {
  font-size: 16px;
}
.test {
  overflow: hidden;
  width: 100%;
  margin: 20px auto;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
}
.test li {
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 5px;
  border: 1px solid #ddd;
  background-color: #eee;
  text-align: center;
  line-height: 100px;
  cursor: pointer;
  transition: all 0.5s ease-in 0.2s;
}

.test li:hover {
  color: #fff;
  font-weight: bolder;
}

.test li:nth-child(1):hover {
  background-color: #bbb;
}
.test li:nth-child(2):hover {
  background-color: #999;
}
.test li:nth-child(3):hover {
  background-color: #630;
}
.test li:nth-child(4):hover {
  background-color: #090;
}
.test li:nth-child(5):hover {
  background-color: #f00;
}
</style>
