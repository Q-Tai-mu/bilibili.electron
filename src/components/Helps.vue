<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-10-06 15:16:15
 * @LastEditTime: 2021-10-06 16:29:05
 * @LastEditors: MArio
-->
<template>
  <div id="helps">
    <div class="Searchbox">
      <!-- 搜索条 -->
      <div
        class="shuaXin"
        :style="backColor"
        @mousemove="onmouseoverSha"
        @mouseout="onmouseoutSha"
      >
        SH
      </div>
    </div>
    <div class="Qukua">
      <div class="bangzu">
        帮助 & 关于
      </div>
      <div class="LeftCard">
        <div class="AnCard">
          <table>
            <tr>
              <td>
                <!-- 按钮 -->
                <div class="ZhuKai">
                  开发者论坛主页
                </div>
              </td>
              <td>
                <!-- 按钮 -->
                <div class="GenHX">
                  更新历史
                </div>
              </td>
              <td>
                <!-- 按钮 -->
                <div class="GenHX">
                  常见问题
                </div>
              </td>
            </tr>
          </table>
        </div>
        <div class="ZiTiShenMin">
          声明
        </div>
        <div class="ZiTiShenMinNei">
          本软件为BiliBili第三方客户端，不代表任何官方立场，仅用作学习交流使用，无法承担重度使用。<br />
          软件保证在您使用软件的过程中，您的数据仅在您与BiliBili之间流通，开发者不会窃取任何数据。但即便如此，也请您妥善保管自己的账户数据，注意使用环境的安全。
        </div>
        <div class="RuaJian">软件未上架</div>
        <div class="fenGeTiao"></div>
        <div class="liYou">
          由于一定会在上架后收到官方警告，应用停止技术支持及维护，要是出现了影响使用的BUG，请放弃使用该软件
        </div>
        <div class="fenGeTiao"></div>
        <div class="kaiFaZe">
          开发人员：<a style="color:#40b8e0;" href="#">Mario</a>
        </div>
      </div>
      <div class="RightCard">
        <div class="KuaiJieJian">快捷键</div>
        <div>
          <table
            class="tableKuai"
            border="1"
            cellpadding="0"
            cellspacing="0"
            style="border:1px solid #e1e1e1;"
          >
            <tr>
              <td>按键</td>
              <td>功能</td>
            </tr>
            <tr>
              <td>←</td>
              <td>播放器回退指定时长</td>
            </tr>
            <tr>
              <td>→</td>
              <td>播放器前进指定时长</td>
            </tr>
            <tr>
              <td>↑</td>
              <td>调高播放器音量</td>
            </tr>
            <tr>
              <td>↓</td>
              <td>调低播放器音量</td>
            </tr>
            <tr>
              <td>F2</td>
              <td>开启/关闭弹幕</td>
            </tr>
            <tr>
              <td>F10</td>
              <td>播放器小窗/退出小窗</td>
            </tr>
            <tr>
              <td>F11</td>
              <td>播放器全屏/退出全屏</td>
            </tr>
            <tr>
              <td>Esc</td>
              <td>播放器退出当前状态（全屏、影院、小窗等）</td>
            </tr>
            <tr>
              <td>Space</td>
              <td>播放器播放/暂停</td>
            </tr>
            <tr>
              <td>Shift + S</td>
              <td>截图</td>
            </tr>
          </table>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "helps",
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
#helps {
  height: 100%;
  width: 100%;
}
.Searchbox {
  height: 50px;
  /* background-color: aqua; */
}
.Qukua {
  margin-left: 45px;
  width: 90%;
  height: 88%;
}
.bangzu {
  font-size: 35px;
  font-family: cursive;
  text-align: left;
}
.LeftCard {
  width: 50%;
  float: left;
  padding-top: 25px;
}
.RightCard {
  width: 50%;
  float: right;
  padding-left: 55px;
}
.ZhuKai {
  width: 150px;
  height: 35px;
  margin: 5px;
  background-color: #ed5b8c;
  color: #fff;
  text-align: center;
  padding-top: 3%;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.GenHX {
  width: 120px;
  height: 35px;
  margin: 5px;
  background-color: #ffffff;
  color: #2e2f33;
  text-align: center;
  padding-top: 4%;
  border-radius: 6px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
}
.AnCard {
  height: 60px;
}
.ZiTiShenMin {
  font-size: 25px;
  font-family: cursive;
  text-align: left;
}
.ZiTiShenMinNei {
  height: 120px;
  width: 100%;
  padding-top: 15px;
  font-family: cursive;
}
.RuaJian {
  font-size: 20px;
  font-family: cursive;
  text-align: left;
  color: #000;
  font-weight: bolder;
  height: 45px;
}
.fenGeTiao {
  width: 100%;
  height: 2px;
  background-color: #e1e1e1;
}
.liYou {
  width: 100%;
  height: 50px;
  font-family: cursive;
  margin-top: 15px;
  margin-bottom: 15px;
}
.kaiFaZe {
  font-size: 20px;
  font-family: cursive;
  text-align: left;
  margin-top: 15px;
}
.KuaiJieJian {
  font-size: 20px;
  font-family: cursive;
  text-align: left;
  margin-top: 35px;
}
.tableKuai {
  width: 100%;
  font-family: cursive;
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
</style>
