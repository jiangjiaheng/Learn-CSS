<template>
  <div class>
    <ul class="test">
      <li class="string">
        <strong>string：</strong>
        <p>你的浏览器是否支持content属性：否</p>
      </li>
      <li class="attr">
        <strong>attr：</strong>
        <p title="如果你看到我则说明你目前使用的浏览器支持content属性"></p>
      </li>
      <li class="url">
        <strong>url()：</strong>
        <p>如果你看到文字前面的图标则说明你目前使用的浏览器支持content属性</p>
      </li>
      <li class="counter1">
        <strong>counter(name)：</strong>
        <ol>
          <li>列表项</li>
          <li>列表项</li>
          <li>列表项</li>
        </ol>
      </li>
      <li class="counter2">
        <strong>counter(name,list-style-type)：</strong>
        <ol>
          <li>列表项</li>
          <li>列表项</li>
          <li>列表项</li>
        </ol>
      </li>
      <li class="counter3">
        <strong>counter(name)拓展应用：</strong>
        <ol>
          <li>
            列表项
            <ol>
              <li>
                列表项
                <ol>
                  <li>列表项</li>
                  <li>列表项</li>
                </ol>
              </li>
              <li>列表项</li>
            </ol>
          </li>
          <li>
            列表项
            <ol>
              <li>列表项</li>
              <li>列表项</li>
            </ol>
          </li>
          <li>
            列表项
            <ol>
              <li>列表项</li>
              <li>列表项</li>
            </ol>
          </li>
        </ol>
      </li>
    </ul>
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
.string p:after {
  margin-left: -16px;
  background: #fff;
  content: "是";
  color: #f00;
}
.attr p:after {
  content: attr(title);
}
.url p:before {
  content: url(../../assets/logo.png);
}
.test ol {
  margin: 16px 0;
  padding: 0;
  list-style: none;
}
.counter1 li {
  counter-increment: testname;
}
.counter1 li:before {
  content: counter(testname);
  color: #f00;
  font-family: georgia, serif, sans-serif;
}
.counter2 li {
  counter-increment: testname2;
}
.counter2 li:before {
  content: counter(testname2, lower-roman);
  color: #f00;
  font-family: georgia, serif, sans-serif;
}
.counter3 ol ol {
  margin: 0 0 0 28px;
}
.counter3 li {
  padding: 2px 0;
  counter-increment: testname3;
}
.counter3 li:before {
  content: counter(testname3, decimal) ".";
  color: #f00;
  font-family: georgia, serif, sans-serif;
}
.counter3 li li {
  counter-increment: testname4;
}
.counter3 li li:before {
  content: counter(testname3, decimal) "." counter(testname4, decimal) ".";
}
.counter3 li li li {
  counter-increment: testname5;
}
.counter3 li li li:before {
  content: counter(testname3, decimal) "." counter(testname4, decimal) "."
    counter(testname5, decimal) ".";
}
</style>
