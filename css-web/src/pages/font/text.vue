<template>
  <div class="box">
    <div class="div1">
      <h1>text-transform</h1>
      <ul class="test">
        <li>
          <strong>将每个单词的首字母转换成大写</strong>
          <div>
            原 文：
            <span>how do you do.</span>
          </div>
          <div class="capitalize">
            转换后：
            <span>how do you do.</span>
          </div>
        </li>
        <li>
          <strong>转换成大写</strong>
          <div>
            原 文：
            <span>how do you do.</span>
          </div>
          <div class="uppercase">
            转换后：
            <span>how do you do.</span>
          </div>
        </li>
        <li>
          <strong>转换成小写</strong>
          <div>
            原 文：
            <span>HOW ARE YOU.</span>
          </div>
          <div class="lowercase">
            转换后：
            <span>HOW ARE YOU.</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="div2">
      <h1>white-space</h1>
      <ul class="test">
        <li class="normal">
          <strong>normal：</strong>
          <p>
            轻轻地我走了
            正如我轻轻地来
          </p>
        </li>
        <li class="pre">
          <strong>pre：</strong>
          <p>
            轻轻地我走了（这里接很多测试文字）
            正如我轻轻地来
          </p>
        </li>
        <li class="pre-wrap">
          <strong>pre-wrap：</strong>
          <p>
            轻轻地 我走了（这里接很多测试文字）
            正如我轻轻地来
          </p>
        </li>
        <li class="pre-line">
          <strong>pre-line</strong>
          <p>
            轻轻地 我走了（这里接很多测试文字）
            正如我轻轻地来
          </p>
        </li>
        <li class="nowrap">
          <strong>nowrap：</strong>
          <p>
            轻轻地我走了
            正如我轻轻地来
          </p>
        </li>
      </ul>
    </div>
    <div class="div3">
      <h1>tab-size</h1>
      <pre>
        你站在桥上看风景，
            看风景的人在楼上看你。
        明月装饰了你的窗子，
            你装饰了别人的梦。
        </pre>
    </div>
    <div class="div4">
      <h1>word-break</h1>
      <ul class="test">
        <li class="normal">
          <strong>normal：</strong>
          <p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
        <li class="break-all">
          <strong>break-all：</strong>
          <p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
        <li class="keep-all">
          <strong>keep-all：</strong>
          <p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
        <li class="break-word">
          <strong>break-word：</strong>
          <p>测试效果aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
      </ul>
    </div>
    <div class="div5">
      <h1>word-wrap/overflow-wrap</h1>
      <ul class="test">
        <li class="normal">
          <strong>normal：</strong>
          <p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
        <li class="break-word">
          <strong>break-word：</strong>
          <p>aaabbbcccdddeeefffggghhhiiijjjkkklllmmmnnn</p>
        </li>
        <li class="break-word">
          <strong>break-word：</strong>
          <p>中英混排的时候abcdefghijklmnopqrst</p>
        </li>
      </ul>
    </div>
    <div class="div6">
      <h1>text-align</h1>
      <ul class="test">
        <li class="left">
          <strong>left</strong>
          <p>我是左对齐内容</p>
        </li>
        <li class="center">
          <strong>center</strong>
          <p>我是居中对齐内容</p>
        </li>
        <li class="right">
          <strong>right</strong>
          <p>我是右对齐内容</p>
        </li>
        <li class="justify">
          <strong>justify</strong>
          <p>我 是一段可以两端对齐的文字， 你 仔细看看， 我 的对齐方式都贴着 容器左右的边缘。</p>
        </li>
        <li class="start">
          <strong>start</strong>
          <p>start效果</p>
        </li>
        <li class="end">
          <strong>end</strong>
          <p>end效果</p>
        </li>
      </ul>
    </div>
    <div class="div7">
      <h1>text-justify</h1>
      <div>我是第一行，后面紧接着强 制换行一些随意的文字 内容一些随意的文字内容一些随意的文字内容一些随意的文 字内容一些随意的文字内容一些随意的文字内容我后 面紧跟着强制换行 一些随意的文字内容一些随意 的文字内容一些随意的文字内容一些随意的文字内容一些 随意的文字内容我是最后一行</div>
    </div>
    <div class="div8">
      <h1>word-spacing</h1>
      <ul class="test">
        <li class="normal">
          <strong>默认间隔</strong>
          <p>how are you!</p>
        </li>
        <li class="length">
          <strong>自定义的间隔大小</strong>
          <p>how are you!</p>
        </li>
      </ul>
    </div>
    <div class="div9">
      <h1>text-indent</h1>
      <ul class="test">
        <li class="inline">
          <strong>内联元素span</strong>
          <p>
            <span>看看我的左边有没有30px的缩进</span>
          </p>
        </li>
        <li class="inline-block">
          <strong>被设置为内联块级元素的span</strong>
          <p>
            <span>看看我的左边有没有30px的缩进</span>
          </p>
        </li>
        <li class="block">
          <strong>被设置为块级元素的span</strong>
          <p>
            <span>看看我的左边有没有30px的缩进</span>
          </p>
        </li>
        <li class="other">
          <strong>包含有内联块的块级元素</strong>
          <p>
            <span>看看我的左边有没有30px的缩进</span>
            <ins>我是一个被插入的内联块元素</ins>
          </p>
        </li>
      </ul>
    </div>
    <div class="div10">
      <h1>vertical-align</h1>
      <ul class="test">
        <li class="baseline">
          <strong>与基线对齐</strong>
          <p>
            参考内容
            <a href="?">基线对齐</a>
          </p>
        </li>
        <li class="sub">
          <strong>与参考内容的下标对齐</strong>
          <p>
            参考内容
            <a href="?">下标对齐</a>
          </p>
        </li>
        <li class="super">
          <strong>与参考内容的上标对齐</strong>
          <p>
            参考内容
            <a href="?">上标对齐</a>
          </p>
        </li>
        <li class="top">
          <strong>对象的内容与对象顶端对齐</strong>
          <p>
            参考内容
            <a href="?">要对齐的内容</a>
          </p>
        </li>
        <li class="text-top">
          <strong>对象的文本与对象顶端对齐</strong>
          <p>
            参考内容
            <a href="?">要对齐的内容</a>
          </p>
        </li>
        <li class="middle">
          <strong>对象的内容与对象中部对齐</strong>
          <p>
            参考内容
            <a href="?">要对齐的内容</a>
          </p>
        </li>
        <li class="bottom">
          <strong>对象的内容与对象底端对齐</strong>
          <p>
            参考内容
            <a href="?">要对齐的内容</a>
          </p>
        </li>
        <li class="text-bottom">
          <strong>对象的文本与对象顶端对齐</strong>
          <p>
            参考内容
            <a href="?">要对齐的内容</a>
          </p>
        </li>
        <li class="length">
          <strong>与基线算起的偏移量</strong>
          <p>
            参考内容
            <a href="?">偏移量对齐</a>
          </p>
        </li>
      </ul>
    </div>
    <div class="div11">
      <h1>line-height</h1>
      <ul class="test">
        <li class="fixed">
          <strong>固定数值方式：</strong>
          - {line-height:20px;}
          <div>
            <p>使用固定数值的方式定义line-height，如设置行高为18px类似这样的固定数值，可能会引发文字重叠的现象。</p>
          </div>
        </li>
        <li class="percentage">
          <strong>百分比方式：</strong>
          - {line-height:130%;}
          <div>
            如果是这种情况
            <p>使用百分比的方式定义line-height，与使用固定数值方式一样，也可能会引发文字重叠的现象。</p>
          </div>
        </li>
        <li class="gene">
          <strong>因子方式：</strong>
          - {line-height:1.5;}
          <div>
            如果是这种情况
            <p>使用因子方式定义line-height是非常安全的方式，将可以避免文字重叠的现象。</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="div12">
      <h1>text-size-adjust</h1>
      <div class="demo1">
        <p>请在移动设备上查看本例，设备尺寸的变化将会使得文本大小变化</p>
      </div>
    </div>
    <div class="div13">
      <h1>text-decoration</h1>
      <ul class="test">
        <li class="none">无装饰文字</li>
        <li class="underline">带下划线文字</li>
        <li class="overline">带上划线文字</li>
        <li class="line-through">带贯穿线文字</li>
        <li class="blink">带闪烁文字</li>
        <li class="text-decoration-css3">如果你的浏览器支持text-decoration在CSS3下的改变，将会看到本行文字有一条红色的下划实线</li>
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
.box>div{
    border:10px solid black;
    margin: 20px auto;
}
.div1 {
  .capitalize span {
    text-transform: capitalize;
  }
  .uppercase span {
    text-transform: uppercase;
  }
  .lowercase span {
    text-transform: lowercase;
  }
}

.div2 {
  .test p {
    width: 200px;
    border: 1px solid #000;
  }
  .normal p {
    word-wrap: normal;
  }
  .pre p {
    white-space: pre;
  }
  .pre-wrap p {
    white-space: pre-wrap;
  }
  .pre-line p {
    white-space: pre-line;
  }
  .nowrap p {
    white-space: nowrap;
  }
}
.div3 {
  pre {
    background: #eee;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
  }
}
.div4 {
  .test p {
    width: 100px;
    border: 1px solid #000;
    background-color: #eee;
  }
  .normal p {
    word-break: normal;
  }
  .break-all p {
    word-break: break-all;
  }
  .keep-all p {
    word-break: keep-all;
  }
  .break-word p {
    word-break: break-word;
  }
}
.div5 {
  .test p {
    width: 100px;
    border: 1px solid #000;
    background-color: #eee;
  }
  .normal p {
    word-wrap: normal;
  }
  .break-word p {
    word-wrap: break-word;
  }
}

.div6 {
  .test p {
    border: 1px solid #000;
  }
  .left p {
    text-align: left;
  }
  .center p {
    text-align: center;
  }
  .right p {
    text-align: right;
  }
  .justify p {
    width: 200px;
    text-align: justify;
  }
  .start p {
    text-align: start;
  }
  .end p {
    text-align: end;
  }
}
.div7 {
  div {
    width: 300px;
    margin-top: 10px;
    background: #aaa;
    text-align: justify;
    text-justify: inter-word;
  }
}
.div8 {
  .test p {
    border: 1px solid #000;
  }
  .normal p {
    word-spacing: normal;
  }
  .length p {
    word-spacing: 20px;
  }
}
.div9 {
  .test p {
    border: 1px solid #000;
  }
  .test span,
  .test ins {
    text-indent: 30px;
  }
  .inline-block span {
    display: inline-block;
  }
  .block span {
    display: block;
  }
  .other ins {
    display: inline-block;
    background: #eee;
  }
}
.div10 {
  .test p {
    border: 1px solid #000;
    font-size: 16px;
    line-height: 2;
  }
  .test a {
    margin-left: 5px;
    font-size: 12px;
  }
  .baseline a {
    vertical-align: baseline;
  }
  .sub a {
    vertical-align: sub;
  }
  .super a {
    vertical-align: super;
  }
  .top a {
    vertical-align: top;
  }
  .text-top a {
    vertical-align: text-top;
  }
  .middle a {
    vertical-align: middle;
  }
  .bottom a {
    vertical-align: bottom;
  }
  .text-bottom a {
    vertical-align: text-bottom;
  }
  .length a {
    vertical-align: 10px;
  }
}
.div11 {
  .test div {
    width: 300px;
    margin: 15px 0;
    border: 1px solid #000;
  }
  .test p {
    margin: 0;
    font-size: 30px;
  }
  .fixed div {
    line-height: 20px;
  }
  .percentage div {
    line-height: 130%;
  }
  .gene div {
    line-height: 1.5;
  }
}
.div12 {
  .demo1 {
    -webkit-text-size-adjust: auto;
  }
}
.div13 {
  .test li {
    margin-top: 10px;
  }
  .test .none {
    text-decoration: none;
  }
  .test .underline {
    text-decoration: underline;
  }
  .test .overline {
    text-decoration: overline;
  }
  .test .line-through {
    text-decoration: line-through;
  }
  .test .blink {
    text-decoration: blink;
  }
  .test .text-decoration-css3 {
    -webkit-text-decoration: #f00 wavy underline;
    -moz-text-decoration: #f00 solid underline;
    text-decoration: #f00 solid underline;
  }
}
</style>
