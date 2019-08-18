<template>
  <div class>
    <h1>悬挂式布局</h1>
    <div class="Media">
        <img class="Media-figure" src="../../assets/logo.png" alt="logo" />
        <p class="Media-body">
          <span>Vue.js 是什么</span>
          Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
          如果你想在深入学习 Vue 之前对它有更多了解，我们制作了一个视频，带您了解其核心概念和一个示例工程。
          如果你已经是有经验的前端开发者，想知道 Vue 与其它库/框架有哪些区别，请查看对比其它框架。
        </p>
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

.Media {
  display: flex;
  align-items: flex-start;
  width: 50%;
  margin: 1% auto;
  background-color:#f0f0f0;
  padding: 1%;
}

.Media-figure {
  margin-right: 1em;
  width: 100px;
}

.Media-body {
  flex: 1;
  text-align: left;
  span{
    display: block;
    font-weight: bolder;
  }
}
</style>
