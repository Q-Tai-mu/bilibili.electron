<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-03 22:50:34
 * @LastEditTime: 2021-10-05 16:43:50
 * @LastEditors: MArio
-->
<template>
  <div id="recommendations">
    <div class="Searchbox">
      <!-- 搜索条 -->
      <div class="zuijinSo loading">
        <div class="tubiaoS"></div>
        <div class="tubiaoK"></div>
      </div>
      <div
        class="shuaXin"
        :style="backColor"
        @mousemove="onmouseoverSha"
        @mouseout="onmouseoutSha"
      >
        SH
      </div>
    </div>
    <div class="SelectCardQu">
      <!-- 最近游览 -->
      <div class="RecentTour">
        最近游览
      </div>
      <div style="width:100%;padding-left:45px;padding-right:55px;">
        <div style="" class="csro">
          <table>
            <tr>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
              <td>
                <div class="card loading">
                  <div class="image"></div>
                  <div class="content">
                    <h4></h4>
                    <div class="description"></div>
                  </div>
                </div>
              </td>
            </tr>
          </table>

          <!-- 频道卡 -->
        </div>
      </div>
    </div>
    <div style="margin-top:20px">
      <!-- 推荐视频 -->
      <div style="height:33px;">
        <div class="tuijian">推荐视频</div>
        <div class="huanyihuan2">
          <div class="fankua2">
            换一换
          </div>
        </div>
      </div>

      <div class="scro" style="padding-left:35px;margin-right:56px;">
        <!-- 卡 -->
        <table>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>

            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="cardH loadingH">
                <div class="imageH"></div>
                <div class="contentH">
                  <h4></h4>
                  <div class="descriptionH"></div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recommendations",
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
#recommendations {
  /* background-color: blueviolet; */
  width: 100%;
  height: 100%;
}
.Searchbox {
  height: 50px;
  /* background-color: aqua; */
}
.RecentTour {
  text-align: left;
  font-family: cursive;
  font-size: 25px;
  padding-left: 45px;
  padding-top: 5px;
}
.SelectCardQu {
  height: 26vh;
  /* background-color: #2337cc; */
  width: 100%;
}
/* .SelectCardQu2 {
  padding-left: 10px;
  overflow-x: scroll;
} */

:root {
  --loading-grey: #ededed;
}

.card {
  margin: 10px;
  height: 135px;
  width: 115px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  /* float: left; */
}
.cardH {
  margin: 10px;
  height: 175px;
  width: 210px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  float: left;
}
.image {
  height: 75px;
}
.imageH {
  height: 105px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.imageH img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 0.3rem 1.8rem;
}
.contentH {
  padding: 0.7rem 1.8rem;
}
h4 {
  margin: 0 0 0.3rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
}

.description {
  font-size: 1rem;
  line-height: 1.4rem;
}

.descriptionH {
  font-size: 1rem;
  line-height: 1.4rem;
}

.loading .image,
.loading h4,
.loading .tubiaoS,
.loading .tubiaoK,
.loading .description {
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
.loadingH .imageH,
.loadingH h4,
.loadingH .descriptionH {
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

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
@keyframes loadingH {
  to {
    background-position-x: -20%;
  }
}

.loading h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}
.loadingH h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}

.loading .description {
  min-height: 2rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}
.loadingH .descriptionH {
  min-height: 2rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}

.csro {
  overflow-x: scroll;
}
.csro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 1px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 11px;
}

.csro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.csro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}

.scro {
  height: 430px;
  overflow-y: scroll;
}
.scro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}

.scro::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.scro::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 10px;
  background: #f1f6fa;
}

.tuijian {
  float: left;
  font-family: cursive;
  font-size: 25px;
  margin-left: 55px;
}
.huanyihuan2 {
  float: right;
  font-family: cursive;
  /* font-size: 25px; */
  margin-right: 85px;
}
.fankua2 {
  font-family: cursive;
  background-color: #fff;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  text-align: center;
  padding-top: 5px;
}
.zuijinSo {
  float: left;
  margin-left: 45px;
  width: 345px;
  height: 40px;
  border-radius: 45px;
  background-color: #fff;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.shuaXin {
  float: right;
  margin-right: 45px;
  margin-top: 5px;
  background-color: #dee5eb;
  width: 45px;
  height: 45px;
  text-align: center;
  padding-top: 10px;
  border-radius: 45px;
  cursor: default;
}
.tubiaoS {
  height: 32px;
  width: 32px;
  background-color: rgba(245, 243, 243, 0.795);
  margin-top: 5px;
  margin-left: 5px;
  border-radius: 32px;
  float: left;
}
.tubiaoK {
  float: left;
  width: 250px;
  height: 32px;
  background-color: rgb(245, 243, 243);
  margin-top: 5px;
  margin-left: 5px;
}
</style>
