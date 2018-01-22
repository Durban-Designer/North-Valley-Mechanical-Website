<template>
  <div class="Footer">
    <h1>North Valley Mechanical&#169;</h1>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
@base-font:'Pathway Gothic One', sans-serif;

.Footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 7%;
    color: white;
    text-align: center;
    background:#005389;
}

h1 {
  bottom: 0;
  z-index: 13;
  position: fixed;
  font-family: @base-font;
  font-weight: lighter;
  font-size: 1em;
  color: #fff;
  text-align: center;
  line-height: 0;
  right: 0;
  margin-right: 12px;
  letter-spacing: 1px;
}

@media (min-width: 700px) {
}
</style>
