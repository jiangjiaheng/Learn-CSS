<template>
  <div class>
    <h1>网格的布局</h1>
    <div class="container">
      <div class="Grid">
        <div class="Grid-cell u-full">full</div>
      </div>
      <div class="Grid">
        <div class="Grid-cell u-1of2">1of2</div>
        <div class="Grid-cell u-1of2">1of2</div>
      </div>
      <div class="Grid">
        <div class="Grid-cell u-1of3">1of3</div>
        <div class="Grid-cell u-1of3">1of3</div>
        <div class="Grid-cell u-1of3">1of3</div>
      </div>
      <div class="Grid">
        <div class="Grid-cell u-1of4">1of4</div>
        <div class="Grid-cell u-1of4">1of4</div>
        <div class="Grid-cell u-1of4">1of4</div>
        <div class="Grid-cell u-1of4">1of4</div>
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
.container {
  background-color: #fff;
  border: 4px solid lightgrey;
  border-radius: 10px;
  width: 80%;
  margin: 2% auto;
  position: relative;
}

.Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
  background-color: lightgrey;
  height: 50px;
  line-height: 50px;
  margin: 10px;
  font-size: 18px;
  font-weight: bolder;
  color:#fff;
}

.Grid-cell.u-full {
  flex: 0 0 98.3333%;
}

.Grid-cell.u-1of2 {
  flex: 0 0 48.3333%;
}

.Grid-cell.u-1of3 {
  flex: 0 0 31.6666%;
}

.Grid-cell.u-1of4 {
  flex: 0 0 23.3333%;
}
</style>
