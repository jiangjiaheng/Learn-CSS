<template>
  <div class>
    <el-menu class="el-menu-demo" mode="horizontal"
    @select="handleSelect" :default-active="activeIndex">
        <el-menu-item index="1">Home</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$router.push('about');
    },
  },
};
</script>

<style scoped>
</style>
