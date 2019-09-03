<template>
  <div class>
    <div class="test">注意我离4条边框线的距离</div>
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
.test {
	padding: 10px;
	border: 1px solid #000;
  position: absolute;
  top:20%;
  left: 50%;
  transform: translate(-50%);
  background: #eee;
}
</style>
