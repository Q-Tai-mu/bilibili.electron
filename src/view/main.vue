<template>
  <div id="appMain">
    <Aside />
    <section class="home-section">
      <div class="home-content">
        <TitleBlock call1="off" call2="off"/>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBlock from "../components/TitleBlock.vue";
import Aside from "../components/Aside.vue";
export default {
  name: "appMain",
  components: { TitleBlock,Aside },
};
</script>

<style>
@import "../assets/scss/style.css";
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
html,
body #appMain {
  height: 100%;
  border-radius: 10px;
}
#appMain {
  width: 100%;
  height: 100%;
  background-color: #f1f6fa;
  border-radius: 10px;
}
#sidebar {
  float: left;
  width: 7%;
  height: 100%;
  background-color: #fff;
}
#ContentArea {
  width: 100%;
  height: 100%;
}
</style>
