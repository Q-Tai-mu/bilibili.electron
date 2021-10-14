<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-10 12:59:21
 * @LastEditTime: 2021-10-10 15:46:07
 * @LastEditors: MArio
-->
<template>
  <div id="partition">
    <div class="Searchbox"></div>
    <div class="partitionHome">
      <div class="partitionTitle">分区</div>
      <div class="partitionCardModl">
        <div class="partitionCard">
          <div>
            <img class="partitionCardImg" src="../assets/ic1.png" />
          </div>
          <div>动画</div>
        </div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
        <div class="partitionCard"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "partition",
};
</script>

<style>
.partitionCardImg {
  width: 80px;
  height: 80px;
  background-color: #f7f7f7;
  border-radius: 6px;
}
.partitionCard {
  width: 160px;
  height: 150px;
  background-color: #fdfdfd;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  margin: 5px;
  padding-top: 25px;
  -webkit-transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
}
.partitionCard:hover {
  box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15);
  transform: translate(0, -3px);
  transition-delay: 0s !important;
  background-color: #f7f7f7;
}
.partitionCardModl {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.partitionTitle {
  font-size: 35px;
  text-align: left;
}
#partition {
  width: 100%;
  height: 100%;
}
.partitionHome {
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-left: 45px;
  padding-right: 45px;
}
</style>
