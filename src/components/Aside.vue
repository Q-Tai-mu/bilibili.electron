<template>
  <div class="aside">
    <div class="sidebar close">
      <div class="logo-details">
        <img
          src="../assets/Logo/Square44x44Logo.altform-lightunplated_targetsize-48.png"
          alt="profile"
          style="margin-top:55px;"
        />
        <!-- <i class="bx bxl-c-plus-plus"></i> -->
        <span class="logo_name">CodingLab</span>
      </div>
      <ul class="nav-links">
        <li>
          <a
            :class="frm === 'on1' ? 'aframe' : 'bframe'"
            @click="setclick('on1')"
            href="#"
          >
            <i class="bx bx-grid-alt"></i>
            <span class="link_name">Dashboard</span>
          </a>
          <ul class="sub-menu blank">
            <li><a class="link_name" href="#">类别</a></li>
          </ul>
        </li>
        <li>
          <div class="iocn-link">
            <a
              :class="frm === 'on2' ? 'aframe' : 'bframe'"
              @click="setclick('on2')"
              href="#"
            >
              <i class="bx bx-collection"></i>
              <span class="link_name">Category</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <!-- <ul class="sub-menu">
            <li><a class="link_name" href="#">首页&频道</a></li>
          </ul> -->
        </li>
        <li>
          <div class="iocn-link">
            <a
              :class="frm === 'on3' ? 'aframe' : 'bframe'"
              @click="setclick('on3')"
              href="#"
            >
              <i class="bx bx-book-alt"></i>
              <span class="link_name">Posts</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <!-- <ul class="sub-menu">
            <li><a class="link_name" href="#">Posts</a></li>
            <li><a href="#">Web Design</a></li>
            <li><a href="#">Login Form</a></li>
            <li><a href="#">Card Design</a></li>
          </ul> -->
        </li>
        <li>
          <a
            :class="frm === 'on4' ? 'aframe' : 'bframe'"
            @click="setclick('on4')"
            href="#"
          >
            <i class="bx bx-pie-chart-alt-2"></i>
            <span class="link_name">Analytics</span>
          </a>
          <!-- <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Analytics</a></li>
          </ul> -->
        </li>
        <li>
          <a
            :class="frm === 'on5' ? 'aframe' : 'bframe'"
            @click="setclick('on5')"
            href="#"
          >
            <i class="bx bx-line-chart"></i>
            <span class="link_name">Chart</span>
          </a>
          <!-- <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Chart</a></li>
          </ul> -->
        </li>
        <li>
          <div class="iocn-link">
            <a
              :class="frm === 'on6' ? 'aframe' : 'bframe'"
              @click="setclick('on6')"
              href="#"
            >
              <i class="bx bx-plug"></i>
              <span class="link_name">Plugins</span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <!-- <ul class="sub-menu">
            <li><a class="link_name" href="#">Plugins</a></li>
            <li><a href="#">UI Face</a></li>
            <li><a href="#">Pigments</a></li>
            <li><a href="#">Box Icons</a></li>
          </ul> -->
        </li>
        <li>
          <a
            :class="frm === 'on7' ? 'aframe' : 'bframe'"
            @click="setclick('on7')"
            href="#"
          >
            <i class="bx bx-compass"></i>
            <span class="link_name">Explore</span>
          </a>
          <!-- <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Explore</a></li>
          </ul> -->
        </li>
        <li>
          <a
            :class="frm === 'on8' ? 'aframe' : 'bframe'"
            @click="setclick('on8')"
            href="#"
          >
            <i class="bx bx-history"></i>
            <span class="link_name">History</span>
          </a>
          <!-- <ul class="sub-menu blank">
            <li><a class="link_name" href="#">History</a></li>
          </ul> -->
        </li>
        <li>
          <a
            :class="frm === 'on9' ? 'aframe' : 'bframe'"
            @click="setclick('on9')"
            href="#"
          >
            <i class="bx bx-cog"></i>
            <span class="link_name">Setting</span>
          </a>
          <!-- <ul class="sub-menu blank">
            <li><a class="link_name" href="#">Setting</a></li>
          </ul> -->
        </li>
        <li>
          <div class="profile-details">
            <div class="profile-content">
              <img src="../assets/profile.jpg" alt="profile" />
            </div>
            <div class="name-job">
              <div class="profile_name">Prem Shahi</div>
              <div class="job">Web Desginer</div>
            </div>
            <i class="bx bx-log-out"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  name: "Aside",
  data() {
    return {
      frm: "on2",
    };
  },
  methods: {
    setclick(val) {
      this.frm = val;
    },
  },
};
</script>

<style>
@import "../assets/scss/style.css";
/* @import "./assets/scss/boxicons.min.css"; */
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
.asde {
  float: left;
  width: 7%;
  height: 100%;
  display: flex;
  user-select: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  -webkit-app-region: drag;
  background-color: #fff;
}
li {
  -webkit-app-region: no-drag;
}
.aframe {
  border-left: 3px solid #ed5b8c;
  border-top: 1px solid #ed5b8c;
  border-bottom: 1px solid #ed5b8c;
}
.bframe {
  border-left: none;
}
</style>
