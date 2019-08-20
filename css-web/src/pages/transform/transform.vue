<template>
  <div class>
    <div class="demo1">
      <h1>矩阵变换：matrix()</h1>
      <ul class="test">
        <li class="matrix">
          <p>transform:matrix(0,1,1,1,10,10)</p>
        </li>
      </ul>
      <h1>平移：translate(), translateX(), translateY()</h1>
      <ul class="test">
        <li class="translate">
          <p>transform:translate(5%,10px)</p>
        </li>
        <li class="translate2">
          <p>transform:translate(-10px,-10px)</p>
        </li>
        <li class="translateX">
          <p>transform:translateX(20px)</p>
        </li>
        <li class="translate3">
          <p>transform:translate(20px)</p>
        </li>
        <li class="translateY">
          <p>transform:translateY(10px)</p>
        </li>
        <li class="translate4">
          <p>transform:translate(0,10px)</p>
        </li>
      </ul>
      <h1>旋转：rotate()</h1>
      <ul class="test">
        <li class="rotate">
          <p>transform:rotate(-15deg)</p>
        </li>
        <li class="rotate2">
          <p>transform:rotate(15deg)</p>
        </li>
      </ul>
      <h1>缩放：scale()</h1>
      <ul class="test">
        <li class="scale">
          <p>transform:scale(.8)</p>
        </li>
        <li class="scale2">
          <p>transform:scale(1.2)</p>
        </li>
      </ul>
      <h1>扭曲：skew()</h1>
      <ul class="test">
        <li class="skew">
          <p>transform:skew(-5deg)</p>
        </li>
        <li class="skew2">
          <p>transform:skew(-5deg,-5deg)</p>
        </li>
      </ul>
    </div>
    <div class="demo2">
      <ul class="test">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
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
.demo1 {
  h1 {
    clear: both;
    padding-top: 10px;
    font-size: 16px;
    font-family: Arial;
  }
  .test {
    zoom: 1;
    width: 100%;
    margin: 100px auto;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .test li {
    float: left;
    margin: 20px 30px 0 0;
    border: 1px solid #000;
  }
  .test li p {
    width: 300px;
    height: 100px;
    margin: 0;
    background: #ddd;
  }
  .test .matrix {
    transform: matrix(0, 1, 1, 1, 10, 10);
  }
  .test .translate p {
    transform: translate(10px, 10px);
  }
  .test .translate2 p {
    transform: translate(-10px, -10px);
  }
  .test .translateX p {
    transform: translateX(20px);
  }
  .test .translate3 p {
    transform: translate(20px);
  }
  .test .translateY p {
    transform: translateY(10px);
  }
  .test .translate4 p {
    transform: translate(0, 10px);
  }
  .test .rotate {
    transform: rotate(-5deg);
  }
  .test .rotate2 {
    transform: rotate(5deg);
  }
  .test .scale {
    transform: scale(0.8);
  }
  .test .scale2 {
    transform: scale(1.2);
  }
  .test .skew {
    transform: skew(-5deg);
  }
  .test .skew2 {
    transform: skew(-5deg, -5deg);
  }
}
.demo2 {
  .test {
    margin: 0;
    padding: 0;
    list-style: none;
    border: 1px solid #000;
  }
  .test li {
    width: 50px;
    height: 50px;
    border: 1px solid #000;
    background: #ddd;
    transform-origin: 0 0;
    transform: rotate(45deg);
  }
}
</style>
