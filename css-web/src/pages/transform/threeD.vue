<template>
  <div class>
    <div class="demo1">
      <div class="wrapper w1">
        <div>1</div>
      </div>
      <div class="wrapper w2">
        <div>2</div>
      </div>
    </div>
    <div class="demo2">
      <div class="cube c1">
        <div class="front">1</div>
        <div class="back">2</div>
        <div class="right">3</div>
        <div class="left">4</div>
        <div class="top">5</div>
        <div class="bottom">6</div>
      </div>

      <div class="cube c2">
        <div class="front">1</div>
        <div class="back">2</div>
        <div class="right">3</div>
        <div class="left">4</div>
        <div class="top">5</div>
        <div class="bottom">6</div>
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
.demo1 {
  .wrapper {
    display: inline-block;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 1px solid #000;
    -webkit-perspective: 150px;
    perspective: 150px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    animation: test 10s infinite;
  }
  .w1 {
    -webkit-perspective-origin: top;
    perspective-origin: top;
  }
  .w2 {
    -webkit-perspective-origin: bottom;
    perspective-origin: bottom;
  }
  .wrapper > div {
    width: 180px;
    height: 120px;
    margin: 40px 10px;
    background-color: #ccc;
    -webkit-transform: rotatex(90deg);
    transform: rotatex(90deg);
  }
  @-webkit-keyframes test {
    from {
      -webkit-perspective: 50px;
    }
    to {
      -webkit-perspective: 300px;
    }
  }
  @keyframes test {
    from {
      perspective: 50px;
    }
    to {
      perspective: 300px;
    }
  }
}

.demo2 {
  body {
    -webkit-perspective: 800px;
    perspective: 800px;
    -webkit-perspective-origin: 50%;
    perspective-origin: 50%;
  }
  .cube {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin: 50px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-animation: rotate 5s infinite;
    animation: rotate 5s infinite;
  }
  .cube > div {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
    color: gray;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
  }
  .front {
    -webkit-transform: translatez(50px);
    transform: translatez(50px);
  }
  .back {
    -webkit-transform: rotatey(180deg) translatez(50px);
    transform: rotatey(180deg) translatez(50px);
  }
  .right {
    -webkit-transform: rotatey(90deg) translatez(50px);
    transform: rotatey(90deg) translatez(50px);
  }
  .left {
    -webkit-transform: rotatey(-90deg) translatez(50px);
    transform: rotatey(-90deg) translatez(50px);
  }
  .top {
    -webkit-transform: rotatex(90deg) translatez(50px);
    transform: rotatex(90deg) translatez(50px);
  }
  .bottom {
    -webkit-transform: rotatex(-90deg) translatez(50px);
    transform: rotatex(-90deg) translatez(50px);
  }
  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotatey(0);
    }
    to {
      -webkit-transform: rotatey(360deg);
    }
  }
  @keyframes rotate {
    from {
      transform: rotatey(0);
    }
    to {
      transform: rotatey(360deg);
    }
  }
  .c1 > div {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
  .c2 > div {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
}
</style>
