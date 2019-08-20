<template>
  <div class>
    <div class="demo1">
      <span class="a1">CSS3 Animations</span>
      <span class="a2">CSS3 Animations</span>
      <span class="a3">CSS3 Animations</span>
    </div>
    <div class="demo2">
      <h1>弹性运动的太阳：</h1>
      <div></div>
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
div.demo1 {
  position: absolute;
  top: 60%;
  left: 50%;
  overflow: hidden;
  width: 300px;
  height: 150px;
  margin: -75px 0 0 -150px;
  border: 3px solid #eee;
  background: #e0e0e0;
  span {
    display: block;
    height: 50px;
    font: bold 14px/50px Georgia;
  }
  .a1 {
    -webkit-transform: translate(60px);
    -moz-transform: translate(60px);
    transform: translate(60px);
    -webkit-animation: animations1 2s ease-out forwards;
    -moz-animation: animations1 2s ease-out forwards;
    animation: animations1 2s ease-out forwards;
  }

  .a2 {
    opacity: 0;
    text-align: center;
    font-size: 26px;
    -webkit-animation: animations2 5s ease-in-out 4s forwards;
    -moz-animation: animations2 5s ease-in-out 4s forwards;
    animation: animations2 5s ease-in-out 4s forwards;
  }

  .a3 {
    opacity: 0;
    -webkit-transform: translate(100px);
    -moz-transform: translate(100px);
    transform: translate(100px);
    -webkit-animation: animations3 2s ease-out 2s forwards;
    -moz-animation: animations3 2s ease-out 2s forwards;
    animation: animations3 2s ease-out 2s forwards;
  }

  @keyframes animations1 {
    0% {
      transform: translate(0);
      opacity: 0;
    }
    50% {
      transform: translate(30px);
      opacity: 1;
    }
    70% {
      transform: translate(35px);
      opacity: 1;
    }
    100% {
      transform: translate(60px);
      opacity: 0;
    }
  }

  @keyframes animations2 {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0.8;
    }
    45% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.8;
    }
    55% {
      opacity: 0.3;
    }
    60% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes animations3 {
    0% {
      transform: translate(160px);
      opacity: 0;
    }
    50% {
      transform: translate(130px);
      opacity: 1;
    }
    70% {
      transform: translate(125px);
      opacity: 1;
    }
    100% {
      transform: translate(100px);
      opacity: 0;
    }
  }
}

div.demo2 {
  div {
    width: 100px;
    height: 100px;
    padding: 10px;
    border-radius: 61px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(204, 102, 0, 0.8);
    background: #f6d66e;
    background: linear-gradient(to bottom, #fff, #f6d66e);
    animation: animations 1.5s ease infinite alternate;
  }
  div:hover {
    animation-play-state: paused;
  }
  @keyframes animations {
    0% {
      transform: translate(0, 0);
    }
    50% {
      ransform: translate(100px, 100px);
    }
    100% {
      transform: translate(100px, 0);
    }
  }
}
</style>
