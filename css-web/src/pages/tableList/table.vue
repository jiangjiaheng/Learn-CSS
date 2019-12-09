<template>
  <div class="box">
    <div class="div1">
      <h1>auto: 表格自动算法</h1>
      <table border="1" class="auto">
        <tbody>
          <tr>
            <td>表格自动算法，宽度将基于单元格的内容自动拉伸</td>
            <td>表格自动算法</td>
            <td>表格自动算法</td>
          </tr>
          <tr>
            <td>表格自动算法</td>
            <td>表格自动算法</td>
            <td>表格自动算法</td>
          </tr>
        </tbody>
      </table>

      <h1>fixed: 表格固定算法</h1>
      <table border="1" class="fixed">
        <tbody>
          <tr>
            <td>表格固定算法布局</td>
            <td>表格固定算法</td>
            <td>表格固定算法</td>
          </tr>
          <tr>
            <td>表格固定算法</td>
            <td>表格固定算法</td>
            <td>表格固定算法</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="div2">
      <h1>separate: 边框独立</h1>
      <table border="1" class="separate">
        <tbody>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
        </tbody>
      </table>

      <h1>collapse: 相邻边被合并</h1>
      <table border="1" class="collapse">
        <tbody>
          <tr>
            <td>合并边框</td>
            <td>合并边框</td>
            <td>合并边框</td>
          </tr>
          <tr>
            <td>合并边框</td>
            <td>合并边框</td>
            <td>合并边框</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="div3">
      <h1>边框独立时border-spacing生效(IE6/7 是无效的)</h1>
      <table border="1" class="test1">
        <tbody>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
        </tbody>
      </table>

      <h1>相邻边被合并时border-spacing无效</h1>
      <table border="1" class="test2">
        <tbody>
          <tr>
            <td>合并边框</td>
            <td>合并边框</td>
            <td>合并边框</td>
          </tr>
          <tr>
            <td>合并边框</td>
            <td>合并边框</td>
            <td>合并边框</td>
          </tr>
        </tbody>
      </table>
      <h1>边框独立时border-spacing生效（IE6/7 通过标签属性 cellspacing="20" 设置）</h1>
      <table border="1" class="test3" cellspacing="20">
        <tbody>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
          <tr>
            <td>独立边框</td>
            <td>独立边框</td>
            <td>独立边框</td>
          </tr>
        </tbody>
      </table>
      <p>IE6/7下通过标签属性 cellspacing="20" 替代 border-spacing:10px 20px; 设置单元格边距，可能你也注意到了 border-spacing 可以设置两个值，但是标签属性cellspacing只能设一个值，但通常情况下，我们最常用的是设置 cellspacing="0" 清除单元格边距。</p>
    </div>
    <div class="div4">
      <h1>caption在上边</h1>
      <table border="1" class="test1">
        <caption>caption在上边</caption>
        <tbody>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
        </tbody>
      </table>

      <h1>caption在右边</h1>
      <table border="1" class="test2">
        <caption>caption在右边</caption>
        <tbody>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
        </tbody>
      </table>

      <h1>caption在下边</h1>
      <table border="1" class="test3">
        <caption>caption在下边</caption>
        <tbody>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
        </tbody>
      </table>

      <h1>caption在左边</h1>
      <table border="1" class="test4">
        <caption>caption在左边</caption>
        <tbody>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
          <tr>
            <td>这是某一单元格</td>
            <td>这是某一单元格</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="div5">
      <h1>show:</h1>
      <table border="1" class="test">
        <tbody>
          <tr>
            <td>序号</td>
            <td>姓名</td>
            <td>年龄</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Joy</td>
            <td>26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kate</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <h1>hide:</h1>
      <table border="1" class="test2">
        <tbody>
          <tr>
            <td>序号</td>
            <td>姓名</td>
            <td>年龄</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Joy</td>
            <td>26</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Kate</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
.box > div {
  border: 10px solid black;
  margin: 20px auto;
}
.div1 {
  h1 {
    font-size: 16px;
    font-family: Arial;
  }
  .auto {
    table-layout: auto;
    width: 350px;
  }
  .fixed {
    table-layout: fixed;
    width: 350px;
  }
}
.div2 {
  h1 {
    font-size: 16px;
    font-family: Arial;
  }
  .separate {
    border-collapse: separate;
  }
  .collapse {
    border-collapse: collapse;
  }
}
.div3 {
  h1 {
    font-size: 16px;
    font-family: Arial;
  }
  .test1,
  .test3 {
    border-collapse: separate;
    border-spacing: 10px 20px;
  }
  .test2 {
    border-collapse: collapse;
    border-spacing: 10px 20px;
  }
}
.div4 {
  h1 {
    font-size: 16px;
    font-family: Arial;
  }
  .test1 {
    caption-side: top;
  }
  .test2 {
    caption-side: right;
  }
  .test3 {
    caption-side: bottom;
  }
  .test4 {
    caption-side: left;
  }
}
.div5 {
  h1 {
    font-size: 16px;
    font-family: Arial;
  }
  .test {
    empty-cells: show;
  }
  .test2 {
    empty-cells: hide;
  }
}
</style>