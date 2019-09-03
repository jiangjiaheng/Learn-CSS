<template>
  <div class>
    <div class="parent">
      <div class="test">注意我距上、右、下、左的距离</div>
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
.parent{
  width: 90%;
  margin: 20px auto;
  border: 1px solid black;
}
.test {
  margin: 20px;
  background: #eee;
}
</style>
