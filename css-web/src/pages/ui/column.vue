<template>
  <div class="box">
    <div class="div1">
      <h1>列数及列宽固定:</h1>
      <div class="test">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
        <p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
      </div>
      <h1>列宽固定，根据容器宽度液态分布列数:</h1>
      <div class="test2">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
        <p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
      </div>
    </div>
    <div class="div2">
      <h1>绿色边框即是column-rule所定义：</h1>
      <div class="test">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
        <p>On the Web, tables have also been used to describe multi-column layouts. The main benefit of using CSS-based columns is flexibility; content can flow from one column to another, and the number of columns can vary depending on the size of the viewport. Removing presentation table markup from documents allows them to more easily be presented on various output devices including speech synthesizers and small mobile devices.</p>
      </div>
    </div>
    <div class="div3">
      <h1>column-span:all</h1>
      <div class="test">
        This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.
        <p>spanning element</p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.
      </div>
    </div>
    <div class="div4">
      <h1>column-fill:balance</h1>
      <div class="test">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
      </div>
    </div>
    <div class="div5">
      <h1>column-break-before:always</h1>
      <div class="test">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
        <div>不管上一列有没有填满，我都另起一列</div>
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
      </div>
    </div>
    <div class="div6">
      <h1>column-break-after:always</h1>
      <div class="test">
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
        <div>不管本列有没有填满，后面新建一列</div>
        <p>This module describes multi-column layout in CSS. By using functionality described in this document, style sheets can declare that the content of an element is to be laid out in multiple columns.</p>
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
body {
  font: 14px/1.5 georgia, serif, sans-serif;
}
p {
  margin: 0;
  padding: 5px 10px;
  background: #eee;
}
h1 {
  margin: 10px 0;
  font-size: 16px;
}
.box > div {
  border: 2px solid black;
  margin: 20px auto;
  padding: 10px;
}
.div1 {
  .test {
    width: 628px;
    border: 10px solid #000;
    -moz-columns: 200px 3;
    -webkit-columns: 200px 3;
    columns: 200px 3;
  }
  .test2 {
    border: 10px solid #000;
    -moz-columns: 200px;
    -webkit-columns: 200px;
    columns: 200px;
  }
}
.div2 {
  .test {
    border: 10px solid #000;
    -moz-column-count: 3;
    -moz-column-gap: 20px;
    -moz-column-rule: 10px solid #090;
    -webkit-column-count: 3;
    -webkit-column-gap: 20px;
    -webkit-column-rule: 10px solid #090;
    column-count: 3;
    column-gap: 20px;
    column-rule: 10px solid #090;
  }
}
.div3 {
  .test {
    width: 600px;
    border: 10px solid #000;
    -moz-column-count: 3;
    -moz-column-gap: 20px;
    -moz-column-rule: 3px solid #090;
    -webkit-column-count: 3;
    -webkit-column-gap: 20px;
    -webkit-column-rule: 3px solid #090;
    column-count: 3;
    column-gap: 20px;
    column-rule: 3px solid #090;
  }
  .test p {
    -moz-column-span: all;
    -webkit-column-span: all;
    column-span: all;
  }
}
.div4 {
  .test {
    width: 600px;
    border: 10px solid #000;
    -moz-column-count: 2;
    -moz-column-gap: 20px;
    -moz-column-rule: 3px solid #090;
    -moz-column-fill: balance;
    -webkit-column-count: 2;
    -webkit-column-gap: 20px;
    -webkit-column-rule: 3px solid #090;
    -webkit-column-fill: balance;
    column-count: 2;
    column-gap: 20px;
    column-rule: 3px solid #090;
    column-fill: balance;
  }
}

.div5 {
  .test p,
  .test div {
    margin: 0;
    padding: 5px 10px;
    background: #eee;
  }
  h1 {
    margin: 10px 0;
    font-size: 16px;
  }
  .test {
    width: 600px;
    border: 10px solid #000;
    -moz-column-count: 4;
    -moz-column-gap: 20px;
    -moz-column-rule: 3px solid #090;
    -webkit-column-count: 4;
    -webkit-column-gap: 20px;
    -webkit-column-rule: 3px solid #090;
    column-count: 4;
    column-gap: 20px;
    column-rule: 3px solid #090;
  }
  .test div {
    -moz-column-break-before: always;
    -webkit-column-break-before: always;
    column-break-before: always;
  }
}

.div6 {
  .test p,
  .test div {
    margin: 0;
    padding: 5px 10px;
    background: #eee;
  }
  h1 {
    margin: 10px 0;
    font-size: 16px;
  }
  .test {
    width: 600px;
    border: 10px solid #000;
    -moz-column-count: 4;
    -moz-column-gap: 20px;
    -moz-column-rule: 3px solid #090;
    -webkit-column-count: 4;
    -webkit-column-gap: 20px;
    -webkit-column-rule: 3px solid #090;
    column-count: 4;
    column-gap: 20px;
    column-rule: 3px solid #090;
  }
  .test div {
    -moz-column-break-after: always;
    -webkit-column-break-after: always;
    column-break-after: always;
  }
}
</style>
