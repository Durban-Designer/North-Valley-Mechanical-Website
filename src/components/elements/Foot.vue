<template>
  <div class="Footer">
    <h1>&#169;Copyright 2015 North Valley Mechanical. All Rights Reserved</h1>

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
  font-weight: lighter;
  font-size: .5em;
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
