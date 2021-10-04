<!--
 * @公司名: 北京雨花石云计算
 * @Description: 
 * @Author: MArio
 * @Date: 2021-09-24 22:51:34
 * @LastEditTime: 2021-10-04 14:33:24
 * @LastEditors: MArio
-->
<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      timer: "",
    };
  },
  methods: {
    jumpPage() {
      this.$router.push({ path: "/main" });
    },
  },
  mounted() {
    //窗口创建时
    this.timer = setTimeout(this.jumpPage, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style>
html,
body #app {
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  width: 100%;
  height: 100%;
  /* display: flex; */
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  /* margin: 1px; */
  /* margin-top: 60px; */
  background-color: #515c6b;
  opacity: 1;
  border-radius: 10px;

   
}
#mainlogo {
  text-align: center; /*让div内部文字居中*/
  /* background-color: #fff; */
  border-radius: 20px;
  width: 130px;
  height: 130px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
