<template>
  <div class="main">
    <h1>Reviews</h1>
    <iframe width="90%" height="250px" src="https://www.youtube.com/embed/3nN_SIpQjc0" frameborder="0" allowfullscreen></iframe>
    <h2>Testimonials</h2>
    <p>“Kelly and I would like to once again thank Kirk, Kendra and all the guys who performed so admirably on our recent AC project. The house is comfortable and we are very happy. Thanks NVM for being so meticulous, professional, and honest. You all went above and beyond to make sure that the job was done properly and we really appreciate the outstanding service and the grueling work you all had to do. I will strongly recommend NVM to anyone I encounter that is in need of AC service.” – K. Laughlin</p>
    <p>“Thank you for having the type of professional people that I know I can call any time and get the kind of service I had anticipated.”- B. Klatt</p>
    <p>“You really have a wonderful staff. The guys today were very professional, friendly and informative.” – J. Thomas</p>
    <p>“Thank you! My service was completed yesterday. Years of neglect by a previous company were rectified by your technician Jim Rankin. Jim was terrific. He explained the problems and made sure he corrected them. I will recommend you to everyone I know. Thanks again.” – M. Smithers</p>
    <button class="leavereview" v-on:click="$router.push('/leavereview')">Leave a Review</button>
  </div>
</template>

<script>
export default {
  name: 'Reviews',
  props: ['logged', 'user'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="less">
@nvmgrey: #dae5ed;
@nvmblue: #005389;
@nvmred: #b20938;
.main {
  height: 2000px;
  width: 100%;
  margin-top: 120px;
}
h1 {
  color: @nvmred;
  text-align: center;
}
h2 {
  color: #005389;
  text-align: center;
  font-size: 3em;
}
p {
  text-align: left;
  width: 95%;
  background-color: #dae5ed;
  margin-left: 3%;
  font-size: 1.1em;
  margin-bottom: 30px;
  font-style: italic;
}
button {
  width: 90%;
  font-size: 1.5em;
  background-color: @nvmred;
  color: #fff;
  border: none;
  margin-left: 5%;
}
iframe {
  margin-left: 5%;
}
@media (min-width: 700px) {
}
</style>
