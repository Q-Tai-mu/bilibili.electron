
<template>
  <div id="index">
    <TitleBlock backColor="background-color: #515c6b;" call1="on" call2="on" />
    <div id="mainlogo">
      <img alt="Vue logo" src="../assets/Logo/StoreLogo.scale-200.png" />
      <HelloWorld msg=" bilibili-electron Dev version App " />
    </div>
  </div>
</template>

<script>
import TitleBlock from "../components/TitleBlock.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  name: "index",
  components: {
    HelloWorld,
    TitleBlock,
  }
};
</script>

<style>
#index {
    background-color: #515c6b;
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
