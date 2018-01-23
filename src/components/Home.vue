<template>
  <div class="main">
    <div class="banner"></div>
    <h1>FAST, FRIENDLY & EFFECTIVE SERVICE</h1>
    <iframe width="100%" height="320px" src="https://www.youtube.com/embed/3nN_SIpQjc0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</iframe>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: ['logged', 'user'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
.main {
  height: 700px;
  width: 100%;
  margin-top: 100px;
}
.banner {
  background-image: url('../assets/banner.jpg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 160px;

}
h1 {
  font-size: 2.8em;
  font-weight: 400;
  line-height: 40px;
  margin-top: 10px;
  margin-left: 20px;
  color: #005389;

}
@media (min-width: 700px) {
}
</style>
