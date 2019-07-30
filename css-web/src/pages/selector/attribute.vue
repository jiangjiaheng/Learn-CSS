<template>
  <div class>
    <ul>
      <li class="b">li[class]: b</li>
      <li class="a">li[class="a"]: a</li>
      <li class="abc">li[class^="a"]: abc</li>
      <li class="cba">li[class$="a"]: cba</li>
      <li class="cab">li[class*="a"]: cab</li>
      <li class="a bc">li[class~="a"]: a bc</li>
      <li class="a-bc">li[class|="a"]: a-bc</li>
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

<style scoped>
ul li{
    margin: 20px;
}

li[class] {
  color: #f00;
}

li[class="a"] {
  color: #f00;
}

li[class~="a"] {
  color: #f00;
}

li[class^="a"] {
  color: #f00;
}

li[class$="a"] {
  color: #f00;
}

li[class*="a"] {
  color: #f00;
}

li[class|="a"] {
  color: #f00;
}
</style>
