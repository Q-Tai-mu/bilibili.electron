<!--
 * @公司名: 北京雨花石云计算
 * @Description:  
 * @Author: MArio
 * @Date: 2021-10-05 11:53:19
 * @LastEditTime: 2021-10-05 16:46:11
 * @LastEditors: MArio
-->
<template>
  <div id="fanju">
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
    <div class="fanjuBan">
      <div class="fanjuTe">番剧</div>
      <div class="fanjuCur">
        <table>
          <tr>
            <td>
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
              </div>
            </td>
            <td>
              <div class="paiCard loading">
                <div class="paiCh">
                  <div class="paiIcon"></div>
                  <div class="paiWen"></div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="fanjuQuCard scro">
      <div class="shijian">
        事件
      </div>
      <div class="shujianCard csro">
        <table>
          <tr>
            <td>
              <div class="card2 loading2">
                <div class="image2"></div>
                <div class="content2">
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card2 loading2">
                <div class="image2"></div>
                <div class="content2">
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card2 loading2">
                <div class="image2"></div>
                <div class="content2">
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card2 loading2">
                <div class="image2"></div>
                <div class="content2">
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card2 loading2">
                <div class="image2"></div>
                <div class="content2">
                  <h4></h4>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="reboCard">
        <div class="rebo">热播</div>
        <div class="huanyihuan">换一换</div>
      </div>
      <div class="reboTCard csro">
        <table>
          <tr>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
            <td>
              <div class="card loading">
                <div class="image"></div>
                <div class="content">
                  <h4></h4>
                  <h4></h4>
                  <h4></h4>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="bandan">
        榜单
      </div>
      <div class="bandanCard csro">
        <table>
          <tr>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  热门榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  搞笑榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  热血榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  奇幻榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  励志榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  萌系榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  运动榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  热门榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  机战榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  小说改编榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  漫画改编榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="banCard loading">
                <div class="banTitleCard">
                  原创榜
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
                </div>
                <div class="banXuanCard">
                  <div class="banImgCard"></div>
                  <div class="banManCard">
                    <div class="banTitleXiaoCard">
                      <div class="banTitleLCard"></div>
                      <div class="banTitleDenCard"></div>
                    </div>
                    <div class="banHUIYCard"></div>
                    <div class="banTitleOnCard"></div>
                  </div>
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
  name: "fanju",
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
.Searchbox {
  height: 50px;
  /* background-color: aqua; */
}
.fanjuBan {
  height: 80px;
}
.fanjuTe {
  float: left;
  font-family: cursive;
  font-size: 35px;
  margin-left: 55px;
  margin-top: 1%;
}
.fanjuCur {
  float: right;
  width: 50%;
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

.paiCard {
  width: 100px;
  height: 40px;
  margin: 8px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.shijian {
  color: #999aa1;
  font-size: 25px;
  font-family: cursive;
  text-align: left;
  margin-left: 55px;
}

.card2 {
  margin: 10px;
  height: 135px;
  width: 300px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  float: left;
}
.image2 {
  height: 95px;
}
.image2 img {
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
.content2 {
  padding: 0.7rem 1.8rem;
}
.description2 {
  font-size: 1rem;
  line-height: 1.4rem;
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
@keyframes loading2 {
  to {
    background-position-x: -20%;
  }
}
.loading2 h4 {
  min-height: 1rem;
  border-radius: 4px;
  animation-delay: 0.05s;
}
.card {
  margin: 10px;
  height: 145px;
  width: 195px;
  background-color: #fff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  /* float: left; */
}
.image {
  height: 75px;
}
.image img {
  display: block;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.content {
  padding: 0.3rem 0.6rem;
}
.description {
  font-size: 1rem;
  line-height: 0.4rem;
  margin-top: 0.3px;
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
@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

.shujianCard {
  width: 94%;
  height: 180px;
  margin-left: 45px;
  margin-right: 45px;
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
.reboCard {
  height: 50px;
  padding-left: 55px;
  padding-top: 20px;
}
.reboTCard {
  width: 94%;
  height: 200px;
  padding-top: 5px;
  margin-left: 45px;
}
.rebo {
  color: #999aa1;
  font-size: 25px;
  font-family: cursive;
  float: left;
}
.huanyihuan {
  float: left;
  width: 100px;
  height: 30px;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
  padding-top: 2px;
  margin-left: 25px;
  border: 1px solid #e2e2e2;
}
.fanjuQuCard {
  overflow-y: scroll;
  height: 560px;
  /* margin-right: 50px; */
  width: 97%;
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
.bandan {
  height: 50px;
  text-align: left;
  font-size: 25px;
  font-family: cursive;
  color: #999aa1;
  margin-left: 55px;
  padding-top: 15px;
}
.banCard {
  width: 300px;
  height: 290px;
  margin: 15px;
  background-color: #ffffff;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.banTitleCard {
  text-align: left;
  font-size: 15px;
  font-family: cursive;
  padding-top: 15px;
  padding-left: 10px;
}
.banXuanCard {
  width: 95%;
  height: 65px;
  margin: 15px;
  background-color: #ffffff;
  border-radius: 6px;
  overflow: hidden;
}
.banImgCard {
  width: 50%;
  height: 100%;
  border-radius: 5px;
  float: left;
}
.banManCard {
  width: 50%;
  height: 100%;
  float: left;
  padding-left: 5px;
}
.banTitleXiaoCard {
  margin: 2px;
  height: 20px;
}
.banTitleLCard {
  width: 70%;
  height: 20px;
  float: left;
  border-radius: 3px;
}
.banTitleDenCard {
  width: 15%;
  height: 20px;
  float: left;
  border-radius: 20px;
  margin-left: 8px;
}
.banHUIYCard {
  width: 30%;
  height: 15px;
  border-radius: 3px;
  margin-left: 2px;
  margin-top: 5px;
}
.banTitleOnCard {
  width: 60%;
  height: 12px;
  border-radius: 3px;
  margin-left: 2px;
  margin-top: 10px;
}
.loading .banImgCard,
.loading .banTitleLCard,
.loading .banTitleDenCard,
.loading .banHUIYCard,
.loading .banTitleOnCard {
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
.bandanCard {
  width: 94%;
  height: 350px;
  padding-top: 5px;
  margin-left: 45px;
}
</style>
