<template>
  <div class>
    <div class="demo1">
      <h1>display构造的table小例子，IE7及以下浏览器不支持本示例</h1>
      <div class="table">
        <h2 class="table-caption">花名册：</h2>
        <div class="table-column-group">
          <div class="table-column"></div>
          <div class="table-column"></div>
          <div class="table-column"></div>
        </div>
        <div class="table-header-group">
          <ul class="table-row">
            <li class="table-cell">序号</li>
            <li class="table-cell">姓名</li>
            <li class="table-cell">年龄</li>
          </ul>
        </div>
        <div class="table-footer-group">
          <ul class="table-row">
            <li class="table-cell">footer</li>
            <li class="table-cell">footer</li>
            <li class="table-cell">footer</li>
          </ul>
        </div>
        <div class="table-row-group">
          <ul class="table-row">
            <li class="table-cell">1</li>
            <li class="table-cell">John</li>
            <li class="table-cell">19</li>
          </ul>
          <ul class="table-row">
            <li class="table-cell">2</li>
            <li class="table-cell">Mark</li>
            <li class="table-cell">21</li>
          </ul>
          <ul class="table-row">
            <li class="table-cell">3</li>
            <li class="table-cell">Kate</li>
            <li class="table-cell">26</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="demo2">
      <div class="test">我将出现在屏幕右方</div>
      <div class="test2">注意我出现的位置</div>
    </div>
    <div class="demo3">
      <div>你看不见这下面的字</div>
      <div class="test">我不会出现在屏幕上</div>
    </div>
    <div class="demo4">
      <p>苏打速度</p>
      <p>苏打速度</p>
      <p>苏打速度</p>
      <p>苏打速度</p>
      <p>苏打速度</p>
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
body {
  font: 14px/1.5 georgia, simsun, arial;
}
h1 {
  margin: 10px 0;
  font-size: 20px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.table {
  display: table;
  border-collapse: collapse;
  border: 1px solid #ccc;
}
.table-caption {
  display: table-caption;
  margin: 0;
  padding: 0;
  font-size: 16px;
}
.table-column-group {
  display: table-column-group;
}
.table-column {
  display: table-column;
  width: 100px;
}
.table-row-group {
  display: table-row-group;
}
.table-row {
  display: table-row;
}
.table-row-group .table-row:hover,
.table-footer-group .table-row:hover {
  background: #f6f6f6;
}
.table-cell {
  display: table-cell;
  padding: 0 5px;
  border: 1px solid #ccc;
}
.table-header-group {
  display: table-header-group;
  background: #eee;
  font-weight: bold;
}
.table-footer-group {
  display: table-footer-group;
}

.demo2 .test {
  float: right;
  background: #eee;
}

.demo2 .test2 {
  clear: right;
  background: #ddd;
}

.demo3 .test {
  visibility: hidden;
}

.demo4 {
  overflow: auto;
  width: 200px;
  height: 100px;
  background: #eee;
}
</style>
