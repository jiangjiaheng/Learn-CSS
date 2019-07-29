<template>
  <div class="container">
    <!-- demo1 -->
    <div class="box-container">
      <div class="box box1">1</div>
      <div class="box box2">2</div>
      <div class="box box3">3</div>
      <div class="box box4">4</div>
    </div>
    <!-- demo2 -->
    <div class="parent">
      <div class="child">child</div>
    </div>
    <!-- demo3 -->
    <div class="zIndex">
      <div class="z1">z-index:1</div>
      <div class="z2">z-index:2</div>
      <div class="z3">z-index:3</div>
    </div>
    <!-- demo4 -->
    <div class="sticker">
      <div class="sticky">sticky</div>
      <div class="fixed">fixed</div>
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

<style scoped>
.container {
  position: relative;
  border: 2px solid #e3e3e3;
  height: 600px;
}

.box {
  position: absolute;
  height: 100px;
  width: 100px;
  text-align: center;
  line-height: 100px;
  color: #e3e3e3;
  background-color: #000;
}

.box1 {
  top: 0;
  left: 0;
}

.box2 {
  top: 0;
  right: 0;
}

.box3 {
  bottom: 0;
  left: 0;
}

.box4 {
  bottom: 0;
  right: 0;
}

.parent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  border: 1px solid black;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 40px;
  border: 1px solid black;
  line-height: 40px;
  text-align: center;
}

.zIndex {
  position: relative;
  margin: 0 40%;
}

.z1,
.z2,
.z3 {
  position: absolute;
  width: 200px;
  height: 100px;
  padding: 5px 10px;
  color: #fff;
  text-align: right;
}
.z1 {
  z-index: 1;
  background: #000;
}
.z2 {
  z-index: 2;
  top: 30px;
  left: 30px;
  background: #c00;
}
.z3 {
  z-index: 3;
  top: 60px;
  left: 60px;
  background: #999;
}

.sticky {
  position: sticky;
  left: 20%;
  width: 150px;
  height: 40px;
  border: 1px solid black;
  line-height: 40px;
  text-align: center;
}

.fixed {
  position: fixed;
  right: 20%;
  width: 150px;
  height: 40px;
  border: 1px solid black;
  line-height: 40px;
  text-align: center;
}
</style>
