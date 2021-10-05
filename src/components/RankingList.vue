<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-05 07:55:43
 * @LastEditTime: 2021-10-05 16:36:04
 * @LastEditors: MArio
-->
<template>
  <div id="rankingList">
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
    <div class="paihanBan">
      <!-- 排行榜 -->
      <div class="ztPai">
        排行榜
      </div>
      <div class="paiCardHder  csro">
        <table>
          <tr>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
            <td>
              <!-- 排行卡片 -->
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
                <div class="paiPror">
                  <!-- 粉条 -->
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="paiBonBan scro">
      <!-- 卡片 -->
      <table>
        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
          <td>
            <div class="card3 loading3">
              <div class="image3"></div>
              <div class="contentR">
                <h4></h4>
                <div class="descriptionR"></div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "rankingList",
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
:root {
  --loading-grey: #ededed;
}

.Searchbox {
  height: 50px;
  /* background-color: aqua; */
}
.paihanBan {
  width: 100%;
  height: 15vh;
  margin-left: 55px;
  margin-right: 15px;
}
.ztPai {
  font-family: cursive;
  text-align: left;
  font-size: 25px;
}
.paiIcon {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 10px;
}
.paiWen {
  float: left;
  width: 55px;
  height: 20px;
  margin-left: 5px;
  margin-top: 10px;
}
.paiPror {
  margin-left: 10px;
  width: 80%;
  height: 4px;
  background-color: #ed5b8c;
}
.paiCard {
  width: 100px;
  height: 45px;
  margin: 8px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.paiCardHder {
  /* padding-left: 45px; */
  width: 90%;
  overflow-x: scroll;
  margin-top: 8px;
}
.paiCh {
  height: 80%;
  width: 100%;
  padding-left: 10px;
}
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}
.loading .paiIcon,
.loading .paiWen,
.loading .tubiaoS,
.loading .tubiaoK,
.loading .paiPror {
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

.card3 {
  margin: 10px;
  height: 175px;
  width: 210px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  float: left;
}
.image3 {
  height: 105px;
}
.image3 img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
h4 {
  margin: 0 0 0.3rem;
  font-size: 1.5rem;
  line-height: 1.5rem;
}
.contentR {
  padding: 0.7rem 1.8rem;
}
.loading3 h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}
.description3 {
}
.descriptionR {
  font-size: 1rem;
  line-height: 1.4rem;
}

.loading3 .descriptionR {
  min-height: 2rem;
  border-radius: 4px;
  animation-delay: 0.06s;
}

.loading3 .image3,
.loading3 h4,
.loading3 .descriptionR {
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
@keyframes loading3 {
  to {
    background-position-x: -20%;
  }
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
.paiBonBan {
  width: 90%;
  height: 74vh;
  margin-left: 55px;
}

.scro {
  /* height: 430px; */
  overflow-y: scroll;
}
.scro::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 7px;
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
