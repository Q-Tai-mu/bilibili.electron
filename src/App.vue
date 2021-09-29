<template>
  <div id="app">
    <TitleBlock />
    <div id="mainlogo">
      <img alt="Vue logo" src="./assets/Logo/StoreLogo.scale-200.png" />
      <HelloWorld msg=" bilibili-electron Dev version App " />
    </div>
  </div>

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TitleBlock from "./components/TitleBlock.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    TitleBlock,
  },
};
</script>

<style>
html,body #app {
  height: 100%;
  border-radius: 10px;
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
</style>
