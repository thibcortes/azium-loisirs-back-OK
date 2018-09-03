<template>
  <div id="header">
    <ul id="header-banner">
      <li>
        <a @click="showMenu()">
          <i :class="stateMenu" id="menu-icon" class="fa" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a href="/"><img src='~/static/logo-azium.png' alt="azium-loisirs-logo"></a>
      </li>
      <li>
        <a href="https://azium.tickeasy.com/fr-FR/accueil">
          <i class="fas fa-shopping-cart"></i>
        </a>
      </li>
    </ul>

    <ul class="banner" id='liens-menu' v-show="menuShow">
      <li class="menu-item" v-for="(item, i) in menu" :key="i">
        <a class="item" :href="getUrl(item)">{{item.title}}</a>
        <ul class="submenu" v-if="item.children">
          <li class="submenu-item" v-for="(child, ic) in item.children" :key="'child' + ic">
            <br>
            <a :href="getUrl(item)">
              {{child.title}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import api from "~/api";
export default {
  data() {
    return {
      image: "",
      menuShow: false,
    };
  },
  methods: {
    showMenu: function () {
      this.menuShow = !this.menuShow;
    },
    getUrl(item) {
      if (item.type === "custom") {
        return item.url
      }
      return item.path
    }
  },
  computed: {
    menu() {
      return this.$store.getters.menuBySlug("header-menu");
    },
    stateMenu() {
      if (this.menuShow) {
        return "fa-times"
      }
      return "fa-bars"
    }
  }
};
</script>

<style lang="scss">
@import "~assets/css/variables.scss";

#header {
  z-index: 1;
  background-color: $primary;
}

#header-banner {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  li {
    i {
      color: #fff;
      font-size: 1.5rem;
    }
    img {
      width: 40px;
      height: auto;
    }
  }
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
