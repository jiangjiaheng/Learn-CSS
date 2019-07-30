<template>
  <div class>
    <ul>
      <li>包含选择符</li>
    </ul>
    <ul class="test">
      <li>
        <a href="?">子选择符</a>
        <ul>
          <li>
            <a href="?">子选择符</a>
          </li>
          <li>
            <a href="?">子选择符</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="test">
      <h3>相邻选择符</h3>
      <p>相邻选择符</p>
      <p>相邻选择符</p>
      <h3>相邻选择符</h3>
      <p>相邻选择符</p>
      <h3>相邻选择符</h3>
      <p>相邻选择符</p>
      <p>相邻选择符</p>
    </div>
    <div class="test2">
      <h3>兄弟选择符</h3>
      <p>兄弟选择符</p>
      <p>兄弟选择符</p>
      <h3>兄弟选择符</h3>
      <p>兄弟选择符</p>
      <h3>兄弟选择符</h3>
      <p>兄弟选择符</p>
      <p>兄弟选择符</p>
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

<style scoped>
ul li {
  color: #f00;
}

.test > li > a {
  color: #f00;
}

p + p {
  color: #f00;
}

.test2 p ~ p {
  color: #f00;
}
</style>
