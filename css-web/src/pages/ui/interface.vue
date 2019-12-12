<template>
  <div class="box">
    <div class="div1">
      <div class="test">
        注意虚线轮廓偏移容器的距离
        <br />outline-offset:4px;
      </div>
    </div>
    <div class="div2">
      <div class="test">
        <button id="b1">button1</button>
        <button id="b2">button2</button>
        <button id="b3">button3</button>
        <button id="b4">button4</button>
      </div>
    </div>
    <div class="div3">
      <table class="test">
        <caption>cursor光标类型</caption>
        <tbody>
          <tr>
            <td class="auto">auto</td>
            <td class="default">default</td>
            <td class="none">none</td>
            <td class="context-menu">context-menu</td>
            <td class="help">help</td>
            <td class="pointer">pointer</td>
            <td class="progress">progress</td>
          </tr>
          <tr>
            <td class="wait">wait</td>
            <td class="cell">cell</td>
            <td class="crosshair">crosshair</td>
            <td class="text">text</td>
            <td class="vertical-text">vertical-text</td>
            <td class="alias">alias</td>
            <td class="copy">copy</td>
          </tr>
          <tr>
            <td class="move">move</td>
            <td class="no-drop">no-drop</td>
            <td class="not-allowed">not-allowed</td>
            <td class="e-resize">e-resize</td>
            <td class="n-resize">n-resize</td>
            <td class="ne-resize">ne-resize</td>
            <td class="nw-resize">nw-resize</td>
          </tr>
          <tr>
            <td class="s-resize">s-resize</td>
            <td class="se-resize">se-resize</td>
            <td class="sw-resize">sw-resize</td>
            <td class="w-resize">w-resize</td>
            <td class="ew-resize">ew-resize</td>
            <td class="ns-resize">ns-resize</td>
            <td class="nesw-resize">nesw-resize</td>
          </tr>
          <tr>
            <td class="nwse-resize">nwse-resize</td>
            <td class="col-resize">col-resize</td>
            <td class="row-resize">row-resize</td>
            <td class="all-scroll">all-scroll</td>
            <td class="url">url</td>
            <td class="zoom-in">zoom-in</td>
            <td class="zoom-out">zoom-out</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="div4">
      <h1 class="title">在下列输入框输入试试每个值的作用：</h1>
      <form id="test" action="#" method="post">
        <fieldset>
          <legend>简单的表单</legend>
          <ul>
            <li>
              <label>
                auto：
                <input type="text" class="writebox auto" />
              </label>
            </li>
            <li>
              <label>
                normal：
                <input type="text" class="writebox normal" />
              </label>
            </li>
            <li>
              <label>
                active：
                <input type="text" class="writebox active" />
              </label>
            </li>
            <li>
              <label>
                inactive：
                <input type="text" class="writebox inactive" />
              </label>
            </li>
            <li>
              <label>
                disabled：
                <input type="text" class="writebox disabled" />
              </label>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
    <div class="div5">
      <div class="test" onselectstart="return false;" unselectable="on">选择我试试，你会发现怎么也选择不到我，哈哈哈哈</div>
    </div>
    <div class="div6">
      <ul>
        <li>
          <a href="https://developer.mozilla.org/">MDN</a>
        </li>
        <li>
          <a href="http://example.com">一个不能点击的链接</a>
        </li>
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

<style lang="scss" scoped>
.box > div {
  border: 2px solid black;
  margin: 20px auto;
  padding: 10px;
}
.div1 {
  .test {
    width: 220px;
    padding: 10px;
    outline: 1px dashed #333;
    outline-offset: 4px;
    border: 3px solid #333;
  }
}
.div2 {
  position: relative;
  width: 400px;
  height: 400px;
  button {
    position: absolute;
  }
  button#b1 {
    top: 0;
    left: 50%;
    nav-index: 1;
    nav-right: #b2;
    nav-left: #b4;
    nav-down: #b2;
    nav-up: #b4;
  }
  button#b2 {
    top: 50%;
    right: 0;
    nav-index: 2;
    nav-right: #b3;
    nav-left: #b1;
    nav-down: #b3;
    nav-up: #b1;
  }
  button#b3 {
    left: 50%;
    bottom: 0;
    nav-index: 3;
    nav-right: #b4;
    nav-left: #b2;
    nav-down: #b4;
    nav-up: #b2;
  }
  button#b4 {
    top: 50%;
    left: 0;
    nav-index: 4;
    nav-right: #b1;
    nav-left: #b3;
    nav-down: #b1;
    nav-up: #b3;
  }
}
.div3 {
  .test {
    width: 400px;
    border-collapse: collapse;
    font: 14px/1.5 georgia, arial, serif, sans-serif;
  }
  .test td {
    padding: 2px 10px;
    border: 1px solid #ddd;
  }
  .test td:hover {
    background: #eee;
  }
  .auto {
    cursor: auto;
  }
  .default {
    cursor: default;
  }
  .none {
    cursor: none;
  }
  .context-menu {
    cursor: context-menu;
  }
  .help {
    cursor: help;
  }
  .pointer {
    cursor: pointer;
  }
  .progress {
    cursor: progress;
  }
  .wait {
    cursor: wait;
  }
  .cell {
    cursor: cell;
  }
  .crosshair {
    cursor: crosshair;
  }
  .text {
    cursor: text;
  }
  .vertical-text {
    cursor: vertical-text;
  }
  .alias {
    cursor: alias;
  }
  .copy {
    cursor: copy;
  }
  .move {
    cursor: move;
  }
  .no-drop {
    cursor: no-drop;
  }
  .not-allowed {
    cursor: not-allowed;
  }
  .e-resize {
    cursor: e-resize;
  }
  .n-resize {
    cursor: n-resize;
  }
  .ne-resize {
    cursor: ne-resize;
  }
  .nw-resize {
    cursor: nw-resize;
  }
  .s-resize {
    cursor: s-resize;
  }
  .se-resize {
    cursor: se-resize;
  }
  .sw-resize {
    cursor: sw-resize;
  }
  .w-resize {
    cursor: w-resize;
  }
  .ew-resize {
    cursor: ew-resize;
  }
  .ns-resize {
    cursor: ns-resize;
  }
  .nesw-resize {
    cursor: nesw-resize;
  }
  .nwse-resize {
    cursor: nwse-resize;
  }
  .col-resize {
    cursor: col-resize;
  }
  .row-resize {
    cursor: row-resize;
  }
  .all-scroll {
    cursor: all-scroll;
  }
  .zoom-in {
    cursor: zoom-in;
  }
  .zoom-out {
    cursor: zoom-out;
  }
}
.div4 {
  #test {
    padding: 50px;
    font: 14px/1.231 georgia, 宋体, arial, verdana, helvetica, sans-serif;
  }
  #test fieldset {
    margin: 0;
    padding: 10px;
    border-radius: 5px;
  }
  #test fieldset legend {
    padding: 3px 6px;
    border-radius: 3px;
    background: #ddd;
  }
  #test ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  #test li {
    padding: 5px 10px;
  }
  #test .writebox {
    position: relative;
    overflow: visible;
    outline: none;
    width: 200px;
    padding: 4px 3px 5px;
    border: 1px solid #999;
    border-radius: 3px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2) inset;
    background-color: #ffffff;
    color: #666666;
    font: 14px/1.231 georgia, 宋体, arial, verdana, helvetica, sans-serif;
  }
  #test .writebox:hover {
    border-color: #777;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4) inset;
  }
  #test .writebox:focus {
    border-color: #666;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  .auto {
    ime-mode: auto;
  }
  .normal {
    ime-mode: normal;
  }
  .active {
    ime-mode: active;
  }
  .inactive {
    ime-mode: inactive;
  }
  .disabled {
    ime-mode: disabled;
  }
  .title {
    font: bold 16px/1.5 georgia, simsun, sans-serif;
  }
}
.div5 {
  .test {
    padding: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    background: #eee;
  }
}
.div6 {
  a[href="http://example.com"] {
    pointer-events: none;
  }
}
</style>
