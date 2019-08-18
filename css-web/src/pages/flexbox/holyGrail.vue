<template>
  <div class>
    <h1>圣杯的布局</h1>
    <div class="container">
      <div class="HolyGrail">
        <div class="Header">#header</div>
        <div class="HolyGrail-body">
          <div class="HolyGrail-content">#center</div>
          <div class="HolyGrail-nav">#left</div>
          <div class="HolyGrail-ads">#right</div>
        </div>
        <div class="Footer">#footer</div>
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

.HolyGrail {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Header,
.Footer {
  flex: 1;
  height: 100px;
  background-color: grey;
  color: #fff;
  line-height: 100px;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}

.HolyGrail-content {
  background-color: lightgrey;
  height: 600px;
  line-height: 600px;
  color: #fff;
  flex: 1;
}

.HolyGrail-nav,
.HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  background-color: skyblue;
  height: 600px;
  line-height: 600px;
  color: #fff;
  flex: 0 0 12em;
}

.HolyGrail-nav {
  /* 导航放到最左边 */
  background-color: orange;
  order: -1;
}

@media (max-width: 768px) {
  .HolyGrail-body {
    flex-direction: column;
    flex: 1;
  }
  .HolyGrail-nav,
  .HolyGrail-ads,
  .HolyGrail-content {
    flex: auto;
  }
}
</style>
