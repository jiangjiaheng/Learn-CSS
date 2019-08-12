<template>
  <div class="container">
    <div class="demo-box demo1">
      <h1>flex示例：</h1>
      <ul class="box">
        <li>flex:1 1 400px;</li>
        <li>flex:1 2 400px;</li>
        <li>flex:1 2 400px;</li>
      </ul>
    </div>
    <div class="demo-box demo2">
      <h1>flex-grow示例：</h1>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
      </ul>
    </div>
    <div class="demo-box demo3">
      <h1>flex-shrink示例：</h1>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="demo-box demo4">
      <h1>flex-basis示例：</h1>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
      </ul>
    </div>
    <div class="demo-box demo5">
      <h1>align-self示例：</h1>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
        <li>e</li>
        <li>f</li>
        <li>g</li>
        <li>h</li>
        <li>i</li>
      </ul>
    </div>
    <div class="demo-box demo6">
      <h1>order示例：</h1>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
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
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.demo-box {
  width: 440px;
  margin-bottom: 10px;
  padding-bottom: 20px;
  border: 1px solid black;
}

h1 {
  font: bold 20px/1.5 georgia, simsun, sans-serif;
}

.box {
  display: -webkit-flex;
  display: flex;
  width: 400px;
  height: 100px;
  margin: 10px auto;
  padding: 0;
  border-radius: 5px;
  list-style: none;
  background-color: #eee;
  li {
    background: #aaa;
    text-align: center;
  }
}
.box li:nth-child(1) {
  background: #999;
}
.box li:nth-child(2) {
  background: #aaa;
}
.box li:nth-child(3) {
  background: #ccc;
}

.demo1 {
  .box {
    li:nth-child(1) {
      -webkit-flex: 1 1 400px;
      flex: 1 1 400px;
    }
    li:nth-child(2) {
      -webkit-flex: 1 2 400px;
      flex: 1 2 400px;
    }
    li:nth-child(3) {
      -webkit-flex: 1 2 400px;
      flex: 1 2 400px;
    }
  }
}

.demo2 {
  .box {
    li:nth-child(2) {
      -webkit-flex-grow: 1;
      flex-grow: 1;
    }
    li:nth-child(3) {
      -webkit-flex-grow: 2;
      flex-grow: 2;
    }
  }
}

.demo3 {
  .box {
    li {
      width: 200px;
    }
    li:nth-child(1) {
      background: #888;
    }
    li:nth-child(2) {
      background: #ccc;
    }
    li:nth-child(3) {
      -webkit-flex-shrink: 3;
      flex-shrink: 3;
      background: #aaa;
    }
  }
}

.demo4 {
  .box {
    li {
      width: 100px;
      height: 100px;
      border: 1px solid #aaa;
      text-align: center;
    }
    li:nth-child(3) {
      -webkit-flex-basis: 600px;
      flex-basis: 600px;
    }
  }
}

.demo5 {
  .box {
    display: -webkit-flex;
    display: flex;
    height: 100px;
    margin: 0;
    padding: 10px;
    border-radius: 5px;
    list-style: none;
    background-color: #eee;
  }
  .box li {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: #aaa;
    text-align: center;
  }
  .box li:nth-child(1) {
    -webkit-align-self: flex-end;
    align-self: flex-end;
  }
  .box li:nth-child(2) {
    -webkit-align-self: center;
    align-self: center;
  }
  .box li:nth-child(3) {
    -webkit-align-self: flex-start;
    align-self: flex-start;
  }
  .box li:nth-child(4) {
    -webkit-align-self: baseline;
    align-self: baseline;
    padding: 20px 10px;
  }
  .box li:nth-child(5) {
    -webkit-align-self: baseline;
    align-self: baseline;
  }
  .box li:nth-child(6) {
    -webkit-align-self: stretch;
    align-self: stretch;
  }
  .box li:nth-child(7) {
    -webkit-align-self: auto;
    align-self: auto;
  }
}

.demo6 {
  .box {
    li {
      width: 100px;
      height: 100px;
      border: 1px solid #aaa;
      text-align: center;
    }
    li:nth-child(3) {
      -webkit-order: -1;
      order: -1;
    }
  }
}
</style>
