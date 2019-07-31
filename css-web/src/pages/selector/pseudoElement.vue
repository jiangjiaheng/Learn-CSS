<template>
  <div class>
    <el-card class="demo-box demo1">
      <h1>杂志常用的首字下沉效果</h1>
      <p>今天，阳光明媚，晴空万里，非常适合户外活动，如踏青、远足之类的。长期坐在办公室的同学们要多注意运动。</p>
    </el-card>
    <el-card class="demo-box demo2">
      <h1>第一行文字的颜色与其它不同</h1>
      <p>今天，阳光明媚，晴空万里，非常适合户外活动，如踏青、远足之类的。长期坐在办公室的同学们要多注意运动。</p>
    </el-card>
    <el-card class="demo-box demo3">
      <h1>p:before and p::before</h1>
      <p></p>
    </el-card>
    <el-card class="demo-box demo4">
      <h1>p:after and p::after</h1>
      <p></p>
    </el-card>
    <el-card class="demo-box demo5">
      <h1>占位符PlaceHolder</h1>
      <input id="test" placeholder="Placeholder text!" />
    </el-card>
    <el-card class="demo-box demo6">
      <h1>选中下面的文字，看看它的颜色</h1>
      <p>你选中这段文字后，看看它们的文本颜色和背景色，就能明白::selection的作用。</p>
    </el-card>
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
.demo-box {
  width: 300px;
  height: 200px;
  float: left;
  margin-right: 20px;
}

h1 {
  font-size: 16px;
}
p {
  width: 200px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  font: 14px/1.5 simsun, serif, sans-serif;
}

.demo1 p:first-letter {
  float: left;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
}
.demo1 p::first-letter {
  float: left;
  font-size: 40px;
  font-weight: bold;
  line-height: 1;
}

.demo2 p:first-line {
  color: #090;
}
.demo2 p::first-line {
  color: #090;
}

.demo3 p:before {
  background: #fff;
  color: #000;
  content: "如果你的能看到这段文字，说明你的浏览器只支持E:before";
  font-size: 14px;
}
.demo3 p::before {
  background: #fff;
  color: #000;
  content: "如果你的能看到这段文字，说明你的浏览器支持E:before和E::before";
  font-size: 14px;
}

.demo4 p:after {
  background: #fff;
  color: #000;
  content: "如果你的能看到这段文字，说明你的浏览器只支持E:after";
  font-size: 14px;
}
.demo4 p::after {
  background: #fff;
  color: #000;
  content: "如果你的能看到这段文字，说明你的浏览器支持E:after和E::after";
  font-size: 14px;
}

.demo5 input::-webkit-input-placeholder {
  color: green;
}

.demo6 p::selection {
  background: #000;
  color: #f00;
}
</style>
