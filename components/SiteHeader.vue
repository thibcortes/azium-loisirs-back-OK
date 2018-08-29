<template>
  <div id="header" class="topnav">
    <!-- <div id="icon-container">
      <a href="/">
        <img src='~/static/logo-azium.png' alt="azium-loisirs-logo">
      </a>
    </div>
      <i id="menu-icon" class="fa fa-bars" aria-hidden="true" @click="showMenu()"></i>
      <span id="cart" class="glyphicon glyphicon-shopping-cart"><a href="https://azium.tickeasy.com/fr-FR/accueil"></a></span> -->

    <!-- Centered link -->
    <div class="topnav-centered">
      <a href="/" class="active"><img src='~/static/logo-azium.png' alt="azium-loisirs-logo"></a>
    </div>

    <!-- Left-aligned links (default) -->
    <a @click="showMenu()">
      <i id="menu-icon" class="fa fa-bars" aria-hidden="true"></i>
    </a>

    <!-- Right-aligned links -->
    <div class="topnav-right">

      <a href="https://azium.tickeasy.com/fr-FR/accueil">
        <i id="cart" class="fas fa-shopping-cart"></i>
      </a>
    </div>

    <ul class="banner" id='liens-menu' v-show="menuShow">

      <li class="menu-item" v-for="(item, i) in menu" :key="i">
        <a class="item" :href="item.path">{{item.title}}</a>
        <ul class="submenu" v-if="item.children">
          <li class="submenu-item" v-for="(child, ic) in item.children" :key="'child' + ic">
            <br>
            <a :href="child.path">{{child.title}}</a>
          </li>
        </ul>
      </li>

    </ul>

  </div>

  <!-- <ul class="banner"  id='liens-menu' v-show="menuShow">



      <li v-for="(item, i) in menu" :key="i">
        <a :href="item.path">{{item.title}}</a>
        <ul v-if="item.children">
          <li v-for="(child, ic) in item.children" :key="'child' + ic">
            <a :href="child.path">{{child.title}}</a>
          </li>
        </ul>
      </li>

    </ul> -->

</template>

<script>
import api from "~/api";
export default {
  data() {
    return {
      image: "",
      menuShow: false
    };
  },

  methods: {
    showMenu: function () {
      this.menuShow = !this.menuShow;
    }
  },
  computed: {
    menu() {
      return this.$store.getters.menuBySlug("header-menu");
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/variables.scss";

#header {
  z-index: 1;
}
.topnav {
  position: relative;
  background-color: #d84551;
  overflow: hidden;
  .topnav-centered {
    img {
      height: 48px;
      width: auto;
    }
    i {
      font-size: 35px;
    }
    i:before {
      font-size: 35px;
    }
  }

  .topnav-right {
    span {
      margin-top: 10px;
      margin-bottom: 10px;
      font-size: 30px;
    }
  }
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  i {
    margin-top: 10px;
    height: 100%;
  }
  i:before {
    font-size: 35px;
  }
}

/* Centered section inside the top navigation */
.topnav-centered a {
  float: none;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}

#liens-menu {
  a {
    text-decoration: none;
    color: white;
  }
  .menu-item {
    display: flex;
    flex-direction: column;
    a {
      text-align: left;
      margin-top: 5px;
    }
  }
  .menu-item:nth-child(0) {
    margin-top: 45px;
  }

  .submenu {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    .submenu-item {
    }
  }
}
</style>
