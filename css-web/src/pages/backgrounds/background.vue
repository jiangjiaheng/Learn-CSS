<template>
  <div class>
    <div class="test"></div>
    <div class="test2"></div>
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
.test {
  width: 90%;
  height: 400px;
  margin: 0 auto;
  border: 10px solid black;
  background-image: url(../../assets/logo.png);
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: 100px 200px;
  background-size: 100px 120px;
  background-origin: content-box;
  background-clip: padding-box;
  background-color: #aaa;
}

.test2 {
  width: 90%;
  height: 400px;
  margin: 20px auto;
  border: 10px solid black;
  background: url(../../assets/logo.png) repeat-x fixed 100px 600px/100px 120px
    content-box padding-box #aaa;
}
</style>
