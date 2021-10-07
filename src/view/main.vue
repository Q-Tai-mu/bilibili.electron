<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-09-29 15:03:04
 * @LastEditTime: 2021-10-07 08:22:15
 * @LastEditors: MArio
-->

<template>
  <div id="appMain">
    <Aside />
    <section class="home-section boders">
      <div class="home-content">
        <TitleBlock call1="off" call2="off" />
      </div>
      <!-- 八个选项卡 -->
      <Recommendation v-if="false" />
      <RankingList v-if="false" />
      <Fanju v-if="false" />
      <Dsynamic v-if="false" />
      <Helps v-if="false"/>
      <MyNews v-if="false"/>
      <UpHomePage/>
    </section>
  </div>
</template>

<script>
// import {TitleBlock,Aside,Recommendation,RankingList,Fanju,Dsynamic} from "../components";
import TitleBlock from "../components/TitleBlock.vue";
import Aside from "../components/Aside.vue";
import Recommendation from "../components/Recommendation.vue";
import RankingList from "../components/RankingList.vue";
import Fanju from "../components/Fanju.vue";
import Dsynamic from "../components/Dsynamic.vue";
import Helps  from "../components/Helps.vue";
import MyNews from "../components/MyNews.vue";
import UpHomePage from "../components/UpHomePage.vue";

export default {
  name: "appMain",
  components: {
    TitleBlock,
    Aside,
    Recommendation,
    RankingList,
    Fanju,
    Dsynamic,
    Helps,
    MyNews,
    UpHomePage
  },
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
  border: 1px solid #acacac;
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
.boders {
  /* border-top: 1px solid #acacac; */
  border-right: 1px solid #acacac;
  border-bottom: 1px solid #acacac;
}
</style>
