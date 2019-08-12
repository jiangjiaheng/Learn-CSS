<template>
  <div class="container">
    <div class="demo-box demo1">
      <h1>flex-flow示例：</h1>
      <h2>flex-flow:column wrap-reverse;</h2>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="demo-box demo2">
      <h1>flex-direction示例：</h1>
      <h2>flex-direction:row-reverse</h2>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="demo-box demo3">
      <h1>flex-wrap示例：</h1>
      <h2>flex-wrap:wrap</h2>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="demo-box demo4">
      <h1>align-content示例：</h1>
      <h2>align-content:space-around</h2>
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
      <h1>align-items示例：</h1>
      <h2>align-items:flex-start</h2>
      <ul class="box">
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </div>
    <div class="demo-box demo6">
      <h1>justify-content示例：</h1>
      <h2>justify-content:space-between</h2>
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
  width: 220px;
  margin: 0 auto;
  padding: 10px;
  list-style: none;
  background-color: #eee;
}
.box li {
  width: 100px;
  height: 100px;
  border: 1px solid #aaa;
  text-align: center;
}

.demo1 {
  .box {
    height: 220px;
    -webkit-flex-flow: column wrap-reverse;
    flex-flow: column wrap-reverse;
  }
}

.demo2 {
  .box {
    -webkit-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }
}

.demo3 {
  .box {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
}

.demo4 {
  .box {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    list-style: none;
    background-color: #eee;
    -webkit-align-content: space-around;
    align-content: space-around;
  }

  .box li {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: #aaa;
    text-align: center;
    width: 10px;
    height: 10px;
  }
}

.demo5 {
  .box {
    width: 200px;
    height: 100px;
    border-radius: 5px;
    list-style: none;
    background-color: #eee;
    -webkit-align-items: flex-start;
    align-items: flex-start;
  }

  .box li {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: #aaa;
    text-align: center;
    width: 10px;
    height: 10px;
  }
}

.demo6 {
  .box {
    -webkit-justify-content: space-between;
    justify-content: space-between;
  }

  .box li {
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    background: #aaa;
    text-align: center;
    width: 10px;
    height: 10px;
  }
}
</style>
