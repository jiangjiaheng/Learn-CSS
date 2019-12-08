<template>
  <div class="box">
    <div class="div1">
      <h1>direction</h1>
      <ul class="test">
        <li class="ltr">
          <strong>ltr：</strong>
          <p>本段文字将按照从左到右的方向进行流动。</p>
        </li>
        <li class="rtl">
          <strong>rtl：</strong>
          <p>本段文字将按照从右到左的方向进行流动。</p>
        </li>
      </ul>
    </div>
    <div class="div2">
      <h1>unicode-bidi</h1>
      <ul class="test">
        <li class="ltr">
          <strong>ltr：</strong>
          <p>本段文字将按照从左到右的方向进行流动。</p>
        </li>
        <li class="rtl">
          <strong>rtl：</strong>
          <p>本段文字将按照从右到左的方向进行流动。</p>
        </li>
      </ul>
    </div>
    <div class="div3">
      <h1>writing-mode</h1>
      <div class="test lr-tb">本段文字将按照水平从左到右的书写方向进行流动。</div>
      <div class="test tb-rl">本段文字将按照垂直从右到左的书写方向进行流动。</div>
      <div class="test tb-lr">本段文字将按照垂直从左到右的书写方向进行流动。</div>
      <ul class="tb-rl">
        <li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
        <li class="test">本段文字将按照垂直从右到左的书写方向进行流动。</li>
      </ul>
      <ul class="tb-lr">
        <li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
        <li class="test">本段文字将按照垂直从左到右的书写方向进行流动。</li>
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
  border: 10px solid black;
  margin: 20px auto;
}
.div1 {
  .test p {
    width: 320px;
    margin: 15px 0;
    border: 1px solid #000;
  }
  .ltr p {
    direction: ltr;
  }
  .rtl p {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
}
.div2 {
  .test p {
    width: 320px;
    margin: 15px 0;
    border: 1px solid #000;
  }
  .ltr p {
    direction: ltr;
  }
  .rtl p {
    direction: rtl;
    unicode-bidi: bidi-override;
  }
}
.div3 {
  .test {
    width: 100px;
    height: 100px;
    margin: 10px;
    border: 1px solid #aaa;
  }
  .lr-tb {
    -webkit-writing-mode: horizontal-tb;
    writing-mode: lr-tb;
    writing-mode: horizontal-tb;
  }
  .tb-rl {
    -webkit-writing-mode: vertical-rl;
    writing-mode: tb-rl;
    writing-mode: vertical-rl;
  }
  .tb-lr {
    -webkit-writing-mode: vertical-lr;
    writing-mode: tb-rl;
    writing-mode: vertical-lr;
  }
}
</style>
