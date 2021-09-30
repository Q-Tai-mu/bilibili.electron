<template>
  <div class="titleBlock" :style="backColor">
    <div class="titleName">
      {{ titleName }}
    </div>
    <div id="Ternarylinkage">
      <div id="Binarylinkage">
        <div v-if="call1 === 'on' " id="linkage1" @click="closeWindow" class="ech-rotate15">
          <img id="linkage1Image" src="" />
        </div>
        <div v-else-if="call1 === 'off' " id="linkage1" style="background-color: #b5c5c4;" @click="minWindow" class="ech-rotate15">
          <img id="linkage1Image" src="" />
        </div>
      </div>
      <div id="Binarylinkage">
        <div id="linkage2" @click="maxWindow" class="ech-rotate15">
          <img src="" id="linkage2Image" />
        </div>
      </div>
      <div id="Unitlinkage">
        <div v-if="call2 === 'on' " id="linkage3"   @click="minWindow" class="ech-rotate15">
          <img src="" id="linkage3Image" />
        </div>
        <div v-else-if="call2 === 'off' " id="linkage3" style="background-color: #ff6659;"   @click="closeWindow" class="ech-rotate15">
          <img src="" id="linkage3Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// const { ipcRenderer } = require("electron")
const { ipcRenderer } = require('electron')
export default {
  name: "titleBlock",
  props: {
    backColor: String,
    call1: String,
    call2:String
  },
  data() {
    return {
      titleName: "",
    };
  },
  methods: {
    minWindow() {
      // ipcRenderer.send("minWindow");
      ipcRenderer.send('minWindow')
    },
    maxWindow() {
      ipcRenderer.send("maxWindow");
    },
    closeWindow() {
      ipcRenderer.send("closeWindow");
    },
  },
};
</script>

<style>
.titleBlock {
  height: 30px;
  /* background-color: #515c6b; */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* -webkit-app-region: drag; */
  -webkit-app-region: drag;
}
.ech-rotate15 {
  transition: all 0.1s;
}
.ech-rotate15:hover {
  width: 20px;
  height: 20px;
  transform: scale(1.1) rotate(360deg);
  /* transform: rotate(360deg); */
}

#Ternarylinkage {
  width: 65px;
  height: 30px;
  /* background: #009966; */
  float: right;
}
#Binarylinkage {
  width: 33.3%;
  height: 30px;
  /* background-color: aqua; */
  float: left;
}
#Unitlinkage {
  width: 33.3%;
  height: 30px;
  /* background-color: firebrick; */
  float: right;
}
#linkage1 {
  float: right;
  border-radius: 50%;
  background-color: #ff6659;
  border: 1px;
  width: 11px;
  height: 11px;
  margin-top: 6px;
  -webkit-app-region: no-drag;
}
#linkage1Image {
  height: 3px;
  width: 3px;
  text-align: center;
  margin-left: 1px;
  margin-bottom: 8px;
}
#linkage2 {
  float: left;
  border-radius: 50%;
  background-color: #ffbf37;
  border: 1px;
  width: 11px;
  height: 11px;
  margin-left: 7px;
  margin-top: 6px;
  -webkit-app-region: no-drag;
}
#linkage2Image {
  height: 3px;
  width: 3px;
  text-align: center;
  margin-left: 1px;
  margin-bottom: 8px;
}
#linkage3 {
  float: left;
  border-radius: 50%;
  background-color: #b5c5c4;
  border: 1px;
  width: 11px;
  height: 11px;
  margin-left: 4px;
  margin-top: 6px;
  -webkit-app-region: no-drag;
}
#linkage3Image {
  height: 3px;
  width: 3px;
  text-align: center;
  margin-left: 1px;
  margin-bottom: 8px;
}
.titleName {
  float: left;
  margin-top: 6px;
  margin-left: 0px;
}
</style>
