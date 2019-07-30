<template>
  <div class>
    <h1>类型选择器</h1>
    <p>类型选择器</p>
    <h1 id="subtitle">ID选择器</h1>
    <p id="content">ID选择器</p>
    <h1 class="title">类选择器</h1>
    <p class="content">类选择器</p>
    <p class="content note">类选择器</p>
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
* {
  color: #f00;
}

h1 {
  font-size: 20px;
}
p {
  font-size: 13px;
}

#subtitle {
  font-size: 20px;
}
p#content {
  font-size: 13px;
}

.title {
  font-size: 20px;
}
p.content {
  font-size: 13px;
}
.content.note {
  font-size: 30px;
}
</style>
