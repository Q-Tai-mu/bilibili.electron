<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-07 08:15:02
 * @LastEditTime: 2021-10-07 15:57:24
 * @LastEditors: MArio
-->
<template>
  <div id="upHomePage">
    <div class="Searchbox">
      <!-- 搜索条 -->
      <div class="zuijinSo loading">
        <div class="tubiaoS"></div>
        <div class="tubiaoK"></div>
      </div>
      <div
        class="shuaXin ShauxExetnd"
        :style="backColor"
        @mousemove="onmouseoverSha"
        @mouseout="onmouseoutSha"
      >
        SH
      </div>
    </div>
    <div class="HomeUpCard">
      <div class="HomeTopCard loading">
        <div class="HomeTopCardT">
          <div class="HomeTopCardTTop">
            <div class="HomeTopCardTTopLeft">
              <div class="HomeTopCardTTopLeftIcon"></div>
              <div class="HomeTopCardTTopLeftBtable">
                <div class="HomeTopCardTTopLeftBtable1"></div>
                <div class="HomeTopCardTTopLeftBtable2"></div>
                <div class="HomeTopCardTTopLeftBtable3"></div>
                <div class="HomeTopCardTTopLeftBtable4"></div>
                <div class="HomeTopCardTTopLeftBtable5"></div>
              </div>
            </div>
            <div class="HomeTopCardTTopRight">
              <div class="HomeTopCardTTopRight1"></div>
              <div class="HomeTopCardTTopRight2"></div>
              <div class="HomeTopCardTTopRight3"></div>
            </div>
          </div>
        </div>
        <div class="HomeTopCardS">
          <div class="HomeTopCardSLeft">
            <div class="HomeTopCardSLeftTable1"></div>
            <div class="HomeTopCardSLeftTable2"></div>
            <div class="HomeTopCardSLeftTable3"></div>
            <div class="HomeTopCardSLeftTable4"></div>
            <div class="HomeTopCardSLeftTable5"></div>
          </div>
          <div class="HomeTopCardSRight">
            <div class="HomeTopCardSRight1"></div>
            <div class="HomeTopCardSRight2"></div>
            <div class="HomeTopCardSRight3"></div>
            <div class="HomeTopCardSRight4"></div>
            <div class="HomeTopCardSRight5"></div>
          </div>
        </div>
      </div>
      <div class="HomeUpConterCard loading">
        <div class="HomeUpConterCardLeft">
          <div class="HomeUpConterCardLeftC1">
            <div class="HomeUpConterCardLeftC1OnT"></div>
            <div class="HomeUpConterCardLeftC1Ons">
              <div class="HomeUpConterCardLeftC1Ons1"></div>
              <div class="HomeUpConterCardLeftC1Ons2">
                <div class="HomeUpConterCardLeftC1Ons2On1"></div>
                <div class="HomeUpConterCardLeftC1Ons2On2"></div>
                <div class="HomeUpConterCardLeftC1Ons2On3"></div>
              </div>
              <div class="HomeUpConterCardLeftC1Ons3"></div>
            </div>
          </div>
          <div class="HomeUpConterCardLeftC2"></div>
          <div class="HomeUpConterCardLeftC3">
            <div class="HomeUpConterCardLeftC3Left">
              <div class="HomeUpConterCardLeftC3Left1">TA的视频</div>
              <div class="HomeUpConterCardLeftC3Left2"></div>
              <div class="HomeUpConterCardLeftC3Left3"></div>
              <div class="HomeUpConterCardLeftC3Left4"></div>
              <div class="HomeUpConterCardLeftC3Left5"></div>
            </div>
            <div class="HomeUpConterCardLeftC3Right">
              <div class="HomeUpConterCardLeftC3RightOn1"></div>
              <div class="HomeUpConterCardLeftC3RightOn2"></div>
            </div>
          </div>
          <div class="HomeUpConterCardLeftC4">
            <table style="">
              <tr>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
                <td>
                  <div class="HomeUpConterCardLeftC4Cards">
                    <div class="HomeUpConterCardLeftC4Cards1"></div>
                    <div class="HomeUpConterCardLeftC4Cards2"></div>
                    <div class="HomeUpConterCardLeftC4Cards3"></div>
                    <div class="HomeUpConterCardLeftC4Cards4"></div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
          <div class="HomeUpConterCardLeftC5"></div>
          <div class="HomeUpConterCardLeftC6"></div>
        </div>
        <div class="HomeUpConterCardRight">
          <div class="HomeUpConterCardRight1">
            <div class="HomeUpConterCardRight1T"></div>
          </div>
          <div class="HomeUpConterCardRight2">
            <div class="HomeUpConterCardRight2On1">
              <div class="HomeUpConterCardRight2On1On1"></div>
            </div>
            <div class="HomeUpConterCardRight2On2">
              <div class="HomeUpConterCardRight2On2On1"></div>
            </div>
            <div class="HomeUpConterCardRight2On3">
              <div class="HomeUpConterCardRight2On3On1"></div>
            </div>
          </div>
          <div class="HomeUpConterCardRight3">
            <div class="HomeUpConterCardRight3On1">公告</div>
            <div class="HomeUpConterCardRight3On2"></div>
            <div class="HomeUpConterCardRight3On3">内容</div>
          </div>
          <div class="HomeUpConterCardRight4">
            <div class="HomeUpConterCardRight4On1">
              <div class="HomeUpConterCardRight4OnOn1">直播间</div>
              <div class="HomeUpConterCardRight4OnOn2">
                <div class="HomeUpConterCardRight4OnOn2On1">已关注</div>
                <div class="HomeUpConterCardRight4OnOn2On2">21.4万</div>
              </div>
            </div>
            <div class="HomeUpConterCardRight3On2"></div>
            <div class="HomeUpConterCardRight3On3">
              主播不在，开口的时会在动态通知你哦~
            </div>
          </div>
          <div class="HomeUpConterCardRight5">
            <div class="HomeUpConterCardRight5OnO1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "upHomePage",
  data() {
    return {
      backColor: "",
    };
  },
  methods: {
    onmouseoverSha() {
      this.backColor = " background-color: #fff;";
    },
    onmouseoutSha() {
      this.backColor = " background-color: #dee5eb;";
    },
  },
};
</script>

<style>
.Rihhh {
  margin-left: 5px;
}

.ShauxExetnd {
    margin-top:0px;
}
.HomeUpConterCardRight5OnO1 {
  width: 98%;
  height: 10px;
}
.HomeUpConterCardRight4OnOn2On2 {
  float: left;
  height: 25px;
  width: 50px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-left: 5px;
  text-align: center;
}
.HomeUpConterCardRight4OnOn2On1 {
  float: left;
  height: 25px;
  width: 65px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-left: 5px;
  text-align: center;
}
.HomeUpConterCardRight4OnOn1 {
  float: left;
}
.HomeUpConterCardRight4OnOn2 {
  width: 150px;
  height: 18px;
  float: left;
  padding-left: 14px;
}
.HomeUpConterCardRight4On1 {
  text-align: left;

  padding-top: 3px;
  padding-left: 10px;
  height: 18px;
  width: 100%;
}
.HomeUpConterCardRight4On2On2 {
  float: left;
  width: 60px;
  height: 25px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 3px;
  margin-left: 5px;
}
.HomeUpConterCardRight4On2On1 {
  float: left;
  width: 60px;
  height: 25px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 3px;
  margin-left: 5px;
}
.HomeUpConterCardRight4On2 {
  float: right;
  width: 145px;
  height: 30px;
  padding-left: 10px;
}

.HomeUpConterCardRight3On3 {
  text-align: left;
  padding-top: 3px;
  padding-left: 10px;
  color: #242323;
}
.HomeUpConterCardRight3On2 {
  margin-top: 15px;
  margin-left: 10px;
  width: 90%;
  height: 3px;

  background-color: #f9f9f9;
}
.HomeUpConterCardRight3On1 {
  height: 20%;
  width: 100%;
  text-align: left;
  padding-left: 10px;
  padding-top: 3px;
}
.HomeUpConterCardRight2On2On1 {
  height: 30px;
  width: 90%;
  border-radius: 6px;
}
.HomeUpConterCardRight2On1On1 {
  height: 30px;
  width: 70%;

  margin-left: 30px;
  border-radius: 6px;
}
.HomeUpConterCardRight2On3On1 {
  width: 100px;
  height: 10px;
  margin-left: 10px;
  border-radius: 6px;
}
.HomeUpConterCardRight2On3 {
  height: 30%;
  width: 100%;
  padding-top: 12px;
}
.HomeUpConterCardRight2On2 {
  height: 30%;
  width: 100%;
  padding-top: 5px;
  padding-left: 12px;
}
.HomeUpConterCardRight2On1 {
  height: 40%;
  width: 100%;
  padding-top: 8px;
}
.HomeUpConterCardRight1T {
  width: 88%;
  height: 50%;
  margin: 13px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC4Cards4 {
  float: left;
  width: 40px;
  height: 10px;
  margin-left: 3px;
  border-radius: 3px;
  margin-top: 5px;
}
.HomeUpConterCardLeftC4Cards3 {
  float: left;
  width: 40px;
  height: 10px;
  margin-left: 3px;
  border-radius: 3px;
  margin-top: 5px;
}
.HomeUpConterCardLeftC4Cards2 {
  width: 80%;
  height: 10px;
  margin-top: 5px;
  border-radius: 3px;
  margin-left: 3px;
}
.HomeUpConterCardLeftC4Cards1 {
  width: 100%;
  height: 55px;
}
.HomeUpConterCardLeftC4Cards {
  width: 150px;
  height: 90px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-left: 15px;
  margin-top: 10px;
}
.HomeUpConterCardLeftC4 {
  widows: 100%;
  height: 220px;
}
.HomeUpConterCardLeftC3 {
  widows: 100%;
  height: 40px;
}
.HomeUpConterCardLeftC3RightOn2 {
  float: left;
  width: 45px;
  height: 30px;
  margin-top: 15px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeUpConterCardLeftC3RightOn1 {
  float: left;
  width: 80px;
  height: 30px;
  margin-top: 15px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Left5 {
  float: left;
  width: 45px;
  height: 30px;
  margin-top: 15px;
  margin-left: 3px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Left4 {
  float: left;
  width: 45px;
  height: 30px;
  margin-top: 15px;
  margin-left: 3px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Left3 {
  float: left;
  width: 45px;
  height: 30px;
  margin-top: 15px;
  margin-left: 3px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Left2 {
  float: left;
  width: 25px;
  height: 30px;
  margin-top: 15px;
  margin-left: 3px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Left1 {
  float: left;
  width: 80px;
  height: 30px;
  margin-left: 15px;
  margin-top: 15px;
  padding-top: 3px;
  border-radius: 6px;
}
.HomeUpConterCardLeftC3Right {
  float: right;
  width: 22%;
  height: 50px;
}
.HomeUpConterCardLeftC3Left {
  float: left;
  width: 50%;
  height: 50px;
}
.HomeUpConterCardLeftC2 {
  width: 95%;
  height: 3px;
  background-color: #f9f9f9;
  margin-left: 15px;
}
.HomeUpConterCardLeftC1Ons2On3 {
  width: 35px;
  height: 20px;
  border-radius: 6px;
  margin-top: 5px;
  float: left;
  margin-left: 5px;
}
.HomeUpConterCardLeftC1Ons2On2 {
  width: 35px;
  height: 20px;
  border-radius: 6px;
  margin-top: 5px;
  float: left;
  margin-left: 5px;
}
.HomeUpConterCardLeftC1Ons2On1 {
  width: 35px;
  height: 20px;
  border-radius: 6px;
  margin-top: 5px;
  float: left;
}
.HomeUpConterCardLeftC1Ons3 {
  /* float: left; */
  width: 60%;
  height: 20px;
  border-radius: 6px;
  margin-top: 5px;
}
.HomeUpConterCardLeftC1Ons2 {
  width: 46%;
  height: 30px;
  /* float: left; */
}
.HomeUpConterCardLeftC1Ons1 {
  /* float: left; */
  width: 35%;
  height: 20px;
  border-radius: 6px;
  margin-top: 15px;
}
.HomeUpConterCardLeftC1Ons3 {
}
.HomeUpConterCardLeftC1Ons {
  float: left;
  width: 40%;
  height: 80%;
}
.HomeUpConterCardLeftC1OnT {
  width: 30%;
  height: 80%;
  margin: 15px;
  border-radius: 6px;
  float: left;
}
.HomeUpConterCardLeftC1 {
  width: 100%;
  height: 150px;
}
.HomeTopCardSRight5 {
  float: left;
  width: 45px;
  height: 35px;
  margin-top: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardSRight4 {
  float: left;
  width: 45px;
  height: 35px;
  margin-top: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardSRight3 {
  float: left;
  width: 45px;
  height: 35px;
  margin-top: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardSRight2 {
  float: left;
  width: 45px;
  height: 35px;
  margin-top: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardSRight1 {
  float: left;
  width: 45px;
  height: 35px;
  margin-top: 10px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardSRight {
  float: right;
  width: 292px;
}
.HomeTopCardSLeftTable5 {
  float: left;
  width: 140px;
  height: 35px;
  font-family: cursive;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  border-radius: 6px;
}
.HomeTopCardSLeftTable4 {
  float: left;
  width: 70px;
  height: 35px;
  font-family: cursive;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  border-radius: 6px;
}
.HomeTopCardSLeftTable3 {
  float: left;
  width: 60px;
  height: 35px;
  font-family: cursive;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  border-radius: 6px;
}
.HomeTopCardSLeftTable2 {
  float: left;
  width: 60px;
  height: 35px;
  font-family: cursive;
  font-size: 15px;
  margin-left: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  border-radius: 6px;
}
.HomeTopCardSLeftTable1 {
  float: left;
  width: 60px;
  height: 35px;
  font-family: cursive;
  font-size: 15px;
  margin-left: 15px;
  margin-top: 10px;
  text-align: center;
  padding-top: 10px;
  border-radius: 6px;
}

.HomeTopCardSLeft {
  float: left;
}
.HomeTopCardTTopLeftBtable {
  float: left;
}
.HomeTopCardTTopLeftBtable2 {
  width: 15px;
  height: 18px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 3px;
  float: left;
}
.HomeTopCardTTopLeftBtable3 {
  width: 40px;
  height: 18px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 3px;
  float: left;
}
.HomeTopCardTTopLeftBtable4 {
  width: 50px;
  height: 18px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 3px;
  float: left;
}
.HomeTopCardTTopLeftBtable5 {
  width: 50px;
  height: 18px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 3px;
  float: left;
}
.HomeTopCardTTopLeftBtable1 {
  width: 35px;
  height: 18px;
  margin-top: 8px;
  margin-left: 8px;
  border-radius: 3px;
  float: left;
}
.HomeTopCardTTopRight3 {
  float: left;
  width: 20px;
  height: 30px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardTTopRight2 {
  float: left;
  width: 60px;
  height: 30px;
  border-radius: 6px;
  margin-left: 10px;
}
.HomeTopCardTTopRight1 {
  float: left;
  width: 60px;
  height: 30px;
  border-radius: 6px;
}
.HomeTopCardTTopLeftIcon {
  width: 40px;
  height: 40px;
  border-radius: 40px;
  margin-left: 15px;
  float: left;
}
.HomeTopCardTTopRight {
  float: right;
  width: 180px;
}
.HomeTopCardTTopLeft {
  float: left;
}
.HomeUpConterCardRight5 {
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 5px;
  padding: 15px;
}
.HomeUpConterCardRight4 {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 5px;
}
.HomeUpConterCardRight3 {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 5px;
}
.HomeUpConterCardRight2 {
  width: 100%;
  height: 100px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  margin-top: 5px;
}
.HomeUpConterCardRight1 {
  width: 100%;
  height: 45px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.HomeUpConterCardRight {
  float: left;
  width: 23%;
  margin-left: 13px;
}
.HomeUpConterCardLeft {
  float: left;
  width: 75%;
  height: 100%;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.HomeUpConterCard {
  width: 100%;
  height: 65%;
  margin-top: 10px;
}
.HomeTopCardTTop {
  height: 45px;

  width: 100%;
}
.HomeTopCardT {
  width: 100%;
  height: 150px;
  padding-top: 105px;
  background-color: rgb(242 93 142 / 50%);
}
.HomeTopCardS {
  width: 100%;
  height: 50px;
}
.HomeTopCard {
  width: 100%;
  height: 200px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
#upHomePage {
  width: 100%;
  height: 100%;
}
.HomeUpCard {
  width: 90%;
  height: 90%;
  margin-left: 45px;
}

.loading .HomeTopCardTTopLeftIcon,
.loading .HomeTopCardTTopLeftBtable1,
.loading .HomeTopCardTTopLeftBtable2,
.loading .HomeTopCardTTopLeftBtable3,
.loading .HomeTopCardTTopLeftBtable4,
.loading .HomeTopCardTTopLeftBtable5,
.loading .HomeTopCardTTopRight3,
.loading .HomeTopCardTTopRight2,
.loading .HomeTopCardSLeftTable1,
.loading .HomeTopCardSLeftTable2,
.loading .HomeTopCardSLeftTable3,
.loading .HomeTopCardSLeftTable4,
.loading .HomeTopCardSLeftTable5,
.loading .HomeTopCardSRight1,
.loading .HomeTopCardSRight2,
.loading .HomeTopCardSRight3,
.loading .HomeTopCardSRight4,
.loading .HomeTopCardSRight5,
.loading .HomeUpConterCardLeftC1OnT,
.loading .HomeUpConterCardLeftC1Ons1,
.loading .HomeUpConterCardLeftC1Ons3,
.loading .HomeUpConterCardLeftC1Ons2On1,
.loading .HomeUpConterCardLeftC1Ons2On2,
.loading .HomeUpConterCardLeftC1Ons2On3,
.loading .HomeUpConterCardLeftC3Left1,
.loading .HomeUpConterCardLeftC3Left2,
.loading .HomeUpConterCardLeftC3Left3,
.loading .HomeUpConterCardLeftC3Left4,
.loading .HomeUpConterCardLeftC3Left5,
.loading .HomeUpConterCardLeftC3RightOn2,
.loading .HomeUpConterCardLeftC3RightOn1,
.loading .HomeUpConterCardLeftC4Cards1,
.loading .HomeUpConterCardLeftC4Cards2,
.loading .HomeUpConterCardLeftC4Cards3,
.loading .HomeUpConterCardLeftC4Cards4,
.loading .HomeUpConterCardRight2On3On1,
.loading .HomeUpConterCardRight2On1On1,
.loading .HomeUpConterCardRight2On2On1,
.loading .HomeUpConterCardRight1T,
.loading .HomeUpConterCardRight5OnO1,
.loading .HomeTopCardTTopRight1 {
  background-color: var(--loading-grey);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}
</style>
