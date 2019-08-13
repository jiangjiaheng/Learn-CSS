<template>
  <div>
    <h1>骰子的布局</h1>
    <div class="container">
      <div class="demo1 dice">
        <span class="dice-point"></span>
      </div>
      <div class="demo2 dice">
        <span class="dice-point"></span>
        <span class="dice-point"></span>
      </div>
      <div class="demo3 dice">
        <span class="dice-point"></span>
        <span class="dice-point"></span>
        <span class="dice-point"></span>
      </div>
      <div class="demo4 dice">
        <div class="row">
          <span class="dice-point"></span>
          <span class="dice-point"></span>
        </div>
        <div class="row">
          <span class="dice-point"></span>
          <span class="dice-point"></span>
        </div>
      </div>
      <div class="demo5 dice">
        <div class="row">
          <span class="dice-point"></span>
          <span class="dice-point"></span>
        </div>
        <div class="row">
          <span class="dice-point"></span>
        </div>
        <div class="row">
          <span class="dice-point"></span>
          <span class="dice-point"></span>
        </div>
      </div>
      <div class="demo6 dice">
        <span class="dice-point"></span>
        <span class="dice-point"></span>
        <span class="dice-point"></span>
        <span class="dice-point"></span>
        <span class="dice-point"></span>
        <span class="dice-point"></span>
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
h1 {
  font-weight: bolder;
  text-align: center;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 100px;
}

.dice{
    width: 100px;
    height:100px;
    border-radius: 10px;
    background-color: #000;
    display: flex;
}

.dice-point{
    width: 22px;
    height: 22px;
    border-radius: 22px;
    margin:5px;
    background-color: #fff;
}

.demo1{
    justify-content: center;
    align-items: center;
}

.demo2{
    justify-content: space-between;
    align-items: center;
}

.demo3{
    .dice-point:nth-child(2){
        align-self: center;
    }
    .dice-point:nth-child(3){
        align-self: flex-end;
    }
}

.demo4, .demo5{
    flex-wrap: wrap;
}

.demo4 .row, .demo5 .row{
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
}

.demo4 .row:nth-child(2){
  align-items: flex-end;
}

.demo5 .row:nth-child(2){
  justify-content: center;
}

.demo6{
    flex-flow: column wrap;
    justify-content: space-between;
    align-content: space-between;
}
</style>
