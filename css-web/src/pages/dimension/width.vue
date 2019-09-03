<template>
  <div class>
    <div class="test">200 X 200</div>
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
	width: 400px;
  height: 400px;
  line-height: 400px;
  text-align: center;
	background: #eee;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
