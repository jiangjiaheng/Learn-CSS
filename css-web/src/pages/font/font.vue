<template>
  <div class>
    <ul class="test">
      <li class="font1">
        <strong>只指定字体大小和字体：</strong>
        <p>本段文字将显示为18px宋体。</p>
      </li>
      <li class="font2">
        <strong>只指定字体样式、大小和字体：</strong>
        <p>本段文字将显示为斜体的18px宋体。</p>
      </li>
      <li class="font3">
        <strong>只指定字体样式、小型大写字母、大小和字体：</strong>
        <p>本段文字将显示为斜体的带小型大写字母的18px宋体。大小型大写字母对比：AaBbCcDdEeFfGg</p>
      </li>
      <li class="font4">
        <strong>只指定字体样式、小型大写字母、粗细、大小和字体：</strong>
        <p>本段文字将显示为斜体的带小型大写字母的加粗18px宋体。</p>
      </li>
      <li class="font5">
        <strong>只指定字体样式、小型大写字母、粗细、大小、行高和字体：</strong>
        <p>本段文字将显示为行高为2的斜体的带小型大写字母的加粗18px宋体。</p>
      </li>
      <li class="caption">
        <strong>指定字体为caption：</strong>
        <p>本段文字将以caption的字体显示。</p>
      </li>
      <li class="icon">
        <strong>指定字体为icon：</strong>
        <p>本段文字将以icon的字体显示。</p>
      </li>
      <li class="menu">
        <strong>指定字体为menu：</strong>
        <p>本段文字将以menu的字体显示。</p>
      </li>
      <li class="message-box">
        <strong>指定字体为message-box：</strong>
        <p>本段文字将以message-box的字体显示。</p>
      </li>
      <li class="small-caption">
        <strong>指定字体为small-caption：</strong>
        <p>本段文字将以small-caption的字体显示。</p>
      </li>
      <li class="status-bar">
        <strong>指定字体为status-bar：</strong>
        <p>本段文字将以status-bar的字体显示。</p>
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
.test p{margin:15px 0;border:1px solid #000;}
.font1 p{font:18px Simsun,arial,sans-serif;}
.font2 p{font:italic 18px Simsun,arial,sans-serif;}
.font3 p{font:italic small-caps 18px Simsun,arial,sans-serif;}
.font4 p{font:italic small-caps bold 18px Simsun,arial,sans-serif;}
.font5 p{font:italic small-caps bold 18px/2 Simsun,arial,sans-serif;}
.caption p{font:caption;}
.icon p{font:icon;}
.menu p{font:menu;}
.message-box p{font:message-box;}
.small-caption p{font:small-caption;}
.status-bar p{font:status-bar;}
</style>
