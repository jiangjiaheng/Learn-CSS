!<template>
  <div class>
    <div class="demo1">
      <ul>
        <li>
          <a href="#">链接</a>
        </li>
      </ul>
    </div>
    <div class="demo2">
      <p class="abc">否定伪类选择符 E:not(s)</p>
      <p id="abc">否定伪类选择符 E:not(s)</p>
      <p class="abcd">否定伪类选择符 E:not(s)</p>
      <p>否定伪类选择符 E:not(s)</p>
    </div>
    <div class="demo3">
      <h1>结构性伪类选择符 E:empty</h1>
      <p>
        <!--我是一个空节点p，请注意我与其它非空节点p的外观有什么不一样-->
      </p>
    </div>
    <div class="demo4">
      <form action="#">
        <ul>
          <li>
            <input value="姓名" />
          </li>
          <li>
            <input value="单位" />
          </li>
          <li>
            <input type="text" value="可用状态" />
          </li>
          <li>
            <input type="text" value="禁用状态" disabled="disabled" />
          </li>
        </ul>
        <fieldset>
          <legend>选中下面的项试试</legend>
          <ul>
            <li>
              <label>
                <input type="radio" name="colour-group" value="0" />
                <span>蓝色</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="colour-group" value="1" />
                <span>红色</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="colour-group" value="2" />
                <span>黑色</span>
              </label>
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>选中下面的项试试</legend>
          <ul>
            <li>
              <label>
                <input type="checkbox" name="colour-group2" value="0" />
                <span>蓝色</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="colour-group2" value="1" />
                <span>红色</span>
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" name="colour-group2" value="2" />
                <span>黑色</span>
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
    <div class="demo5">
      <h1>只有唯一一个子元素</h1>
      <ul>
        <li>结构性伪类选择符 E:only-child</li>
      </ul>
      <h1>注意是li:first-child，而不是ul:first-child</h1>
      <ul>
        <li>结构性伪类选择符 E:first-child</li>
        <li>结构性伪类选择符 E:nth-child(2)</li>
        <li>结构性伪类选择符 E:nth-last-child(2)</li>
        <li>结构性伪类选择符 E:last-child</li>
      </ul>
    </div>
    <div class="demo6">
      <h1>只有唯一一个子元素</h1>
      <ul>
        <li>结构性伪类选择符 E:only-of-type</li>
      </ul>
      <h1>注意是li:first-of-type，而不是ul:first-of-type</h1>
      <ul>
        <li>结构性伪类选择符 E:first-of-type</li>
        <li>结构性伪类选择符 E:nth-of-type(2)</li>
        <li>结构性伪类选择符 E:nth-last-of-type(2)</li>
        <li>结构性伪类选择符 E:last-of-type</li>
      </ul>
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
.demo1 a:link {
  color: #03c;
}

.demo1 a:visited {
  color: #f00;
}

.demo1 a:hover {
  background: #ddd;
  color: #f00;
}

.demo1 a:active {
  background: #ddd;
  color: #f00;
}

.demo2 p:not(.abc) {
  color: #f00;
}

.demo3 p:empty {
  height: 25px;
  border: 1px solid #ddd;
  background: #eee;
}

.demo4 input:focus {
  background: #f6f6f6;
  color: #f60;
  border: 1px solid #f60;
  outline: none;
}

.demo4 input[type="text"]:enabled {
  border: 1px solid #090;
  background: #fff;
  color: #000;
}
.demo4 input[type="text"]:disabled {
  border: 1px solid #ccc;
  background: #eee;
  color: #ccc;
}

.demo4 input:checked + span {
  background: #f00;
}
.demo4 input:checked + span:after {
  content: " 我被选中了";
}

.demo5 li:first-child {
  color: #f00;
}

.demo5 li:last-child {
  color: #f00;
}

.demo5 li:only-child {
  color: #f00;
}

.demo5 li:nth-child(2) {
  color: #f00;
}

.demo5 li:nth-last-child(2) {
  color: #f00;
}

.demo6 li:first-of-type {
  color: #f00;
}

.demo6 li:last-of-type {
  color: #f00;
}

.demo6 li:only-of-type {
  color: #f00;
}

.demo6 li:nth-of-type(2) {
  color: #f00;
}

.demo6 li:nth-last-of-type(2) {
  color: #f00;
}
</style>
