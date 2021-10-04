<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-03 22:50:34
 * @LastEditTime: 2021-10-04 14:10:15
 * @LastEditors: MArio
-->
<template>
  <div id="recommendations">
    <div class="Searchbox">
      <!-- 搜索条 -->
    </div>
    <div class="SelectCardQu">
      <!-- 最近游览 -->
      <div class="RecentTour">
        最近游览
      </div>
      <div style="width:100%;padding-left:55px;padding-right:55px;">
        <div>
          <!-- 频道卡 -->
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
          <div class="card loading">
            <div class="image"></div>
            <div class="content">
              <h4></h4>
              <div class="description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- 推荐视频 -->
      <div style="height:33px;">
        <div class="tuijian">推荐视频</div>
        <div class="huanyihuan">
          <div class="fankua">
            换一换
          </div>
        </div>
      </div>

      <div class="scro" style="padding-left:35px;margin-right:56px;">
        <!-- 卡 -->
        <table>
          <tr>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
          </tr>
          <tr>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
          </tr>
          <tr>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
            <div class="card2 loading2">
              <div class="image2"></div>
              <div class="content2">
                <h4></h4>
                <div class="description2"></div>
              </div>
            </div>
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
    return {};
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
  padding-left: 65px;
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
  width: 130px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  float: left;
}
.card2 {
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
.image2 {
  height: 105px;
}

.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.image2 img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}

.content {
  padding: 0.3rem 1.8rem;
}
.content2 {
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

.description2 {
  font-size: 1rem;
  line-height: 1.4rem;
}

.loading .image,
.loading h4,
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
.loading2 .image2,
.loading2 h4,
.loading2 .description2 {
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
@keyframes loading2 {
  to {
    background-position-x: -20%;
  }
}

.loading h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}
.loading2 h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}

.loading .description {
  min-height: 2rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}
.loading2 .description2 {
  min-height: 2rem;
  border-radius: 4px;
  animation-delay: 0.06s;
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
.huanyihuan {
  float: right;
  font-family: cursive;
  /* font-size: 25px; */
  margin-right: 85px;
}
.fankua {
  font-family: cursive;
  background-color: #fff;
  border-radius: 15px;
  width: 100px;
  height: 30px;
  text-align: center;
  padding-top: 5px;
}
</style>
