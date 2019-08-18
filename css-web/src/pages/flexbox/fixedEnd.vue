<template>
  <div class>
    <h1>固定的底栏</h1>
    <div class="container">
      <div class="Site">
        <header>#header</header>
        <main class="Site-content">#content</main>
        <footer>#footer</footer>
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

.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
  height: 400px;
  line-height: 400px;
}

header,
footer {
  height: 100px;
  background-color: grey;
  color: #fff;
  line-height: 100px;
}
</style>
