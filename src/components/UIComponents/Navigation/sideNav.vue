//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <header ref="sideNav" class="sideNav">
    <!-- <vue-button
      v-if="toggleNavIcon"
      class="menuTrigger"
      tag="toggleNav"
      category="icon-lg"
      :icon="toggleNavIcon"
      :ctx="toggleNavigation.bind(this)"
    /> -->
    <nav>
      <!-- level 1 -->
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            <vue-img :src="logoLink" alt="Logo" />
            <h3>
              Design Guide
              <h6>Hrishikesh Karale</h6>
            </h3>
          </router-link>
        </li>
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            <span :class="navigation.icon" />
            <div>
              <h4>{{ navigation.name }}</h4>
              <span v-if="navigation.tagline"> {{ navigation.tagline }}</span>
            </div>
          </router-link>
          <!-- level 2 -->
          <ul class="subNav" v-show="navigation.subNav && $route.path.includes(navigation.name)">
            <li
              v-for="(nav2, index) in navigation.subNav"
              :key="index + '-' + nav2.name"
            >
              <router-link :to="{ name: nav2.component }">
                <span :class="nav2.icon" />
                <h4>{{ nav2.name }}</h4>
              </router-link>
              <!-- level 3 -->
              <ul class="subNav2" v-if="nav2.subNav && $route.path.includes(nav2.name)">
                <li
                  v-for="(nav3, index) in nav2.subNav"
                  :key="index + '-' + nav3.name"
                >
                  <router-link :to="{ name: nav3.component }">
                    <span :class="nav3.icon" />
                    <h4>{{ nav3.name }}</h4>
                  </router-link>
              </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <slot name="options" />
    <!-- <vue-button
      v-if="themeIcon"
      tag="themeToggle"
      category="text-sm"
      text="Theme"
      :icon="themeIcon"
      :ctx="theme.bind(this)"
    /> -->
    </div>
  </header>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import { authentication } from "@/typeScript/authentication";
import vueButton from "@/components/UIComponents/Buttons";
import vueImg from "../Image/vueImg.vue";

export default {
  name: "sideNav",

  components: {
    vueButton,
    vueImg
  }, //data

  mixins: [toggle, authentication],

  props: {
    logoLink: {
      required: false,
      type: [String, null],
      default: null
    },

    nav: {
      required: true,
      type: Array,
      default: null
    }
  },

  computed: {
    themeIcon: function() {
      return this.activeTheme().icon;
    }, //themeIcon
    toggleNavIcon: function() {
      if (this.isOpen("nav")) {
        return "fas fa-times";
      }
      return "fas fa-bars";
    } //toggleNavIcon
  }, //props

  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
    // console.log(this.$router.currentRoute.value.meta.requiresAuth);
  },

  methods: {
    clickHandler: function(event) {
      // console.log("modal", !event.target.closest(".sideNav").length);
      if (!event.target.closest(".sideNav") && this.isOpen("nav")) {
        this.toggleNavigation();
        // alert("click outside!");
      }
      // event.stopPropogation(); //stop event bubbling
    }, //clickHandler

    login: function() {
      this.$router.push({ name: "login" });
    }, //login

    toggleNavigation: function() {
      this.$refs["sideNav"].classList.toggle("showNav");
      this.toggle("nav");
    } //toggleNavigation
  }
}; //default
</script>

//
<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";
@import (reference) "../../../Less/customMixins.less";

@lowOpacity: 0.64;
@midOpacity: 0.84;

//nav sub text
.navSubText() {
  color: white;
  // opacity: @lowOpacity;
}

header {
  .scroll(100vh);
  &.sideNav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: @spaceXl;
    background-color: @navBackground;
    max-width: max-content;
    z-index: @headerZ;
    height: 100vh;
    .boxShadow(@one, white);
    & > .menuTrigger {
      display: none;
      margin-left: auto;
    }
    & > nav {
      fisplay: flex;
      & > ul {
        display: flex;
        flex-direction: column;
        align-content: flex-start;

        & > li {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          &:first-child {
            align-self: center;
            & > a {
              display: flex;
              flex-direction: column;
              & > img {
                display: block;
                height: 64px;
                margin: auto;
                & + h3 {
                  display: flex;
                  flex-direction: column;
                  & > h6 {
                    align-self: flex-end;
                    color: @white;
                  }
                }
              }
            }
          }

          &,
          & > .subNav > li,
          & > .subNav > li > .subNav2 > li {
            & > a {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              color: white;
              position: relative;

              & > span {
                font-size: @fontSizeSm * 2;
                .navSubText();
              }
              & > img {
                height: 48px;
              }
              & > div {
                display: flex;
                flex-direction: column;
                margin-left: @spaceLg;
                //nav Text
                & > h4 {
                  color: white;
                  //nav subText
                  & + span {
                    font-size: 12px;
                    .navSubText();
                  }
                }
              }

              //styling selected link
              &.router-link-active {
                color: @secondaryColor;
                &::before {
                  transform: scale(0.8);
                }
                &.router-link-exact-active {
                  color: @secondaryColor;
                }

                & > span {
                  //opacity: 1;
                }
                & > div {
                  & > h4 {
                    color: white;
                    font-weight: bold;
                    & + span {
                      color: white;
                      //opacity: 1;
                    }
                  }
                }
              }
              & + .subNav,
              & + .subNav > li > .subNav2 {
                display: flex;
                flex-direction: column;
                margin-left: @spaceMd;
                & > li {
                  display: flex;
                  flex-direction: column;
                  & > a {
                    margin: 0;
                    display: flex;
                    align-content: center;
                    & > span {
                      font-size: @fontSizeSm !important;
                      & + h4 {
                        color: white;
                        margin: @spaceSm 0 @spaceSm @spaceMd;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      //user account
      & + div {
        display: flex;
        margin-left: auto;
        position: relative;
        & > span {
          color: @secondaryColor;
          padding: @spaceMd;
          border: 1px solid @secondaryColor;
          border-radius: 50%;
          cursor: pointer;
          & + .user {
            display: none;
            position: absolute;
            border: 1px solid @secondaryColor;
            & > img {
              width: 80px;
            }
            & > .g-signin2 {
              display: none;
            }
          }
        }
        &:hover {
          & > span {
            border-radius: 50% 50% 0 50%;
            background-color: @secondaryColor;
            color: @navBackground;
            .boxShadow(@one, @shadowColor, 1001);
            & + .user {
              display: flex;
              flex-direction: column;
              background-color: @backgroundColor;
              top: 100%;
              right: 0;
              height: fit-content;
              width: fit-content;
              border-radius: @borderRadius;
              padding: @spaceLg @spaceXl;
              .boxShadow(@one, @shadowColor, 1001);
            }
          }
        }
      }
    }
    @media screen {
      @media (max-width: 1540px) {
        flex-direction: column;
        flex-wrap: nowrap;
        padding: @spaceMd @spaceLg;
        border-bottom-right-radius: @borderRadiusLg;
        height: auto;
        width: fit-content;
        position: fixed;
        left: 0;
        top: 0;
        .scroll(100vh);
        & > .menuTrigger {
          display: flex;
          align-self: flex-end;
        }
        //hides navigation when toggled
        & > nav {
          display: none;
          & + div {
            display: none;
          }
        }
        //displays navigation
        &.showNav {
          height: 100vh;
          outline: 9999px solid rgba(0, 0, 0, 0.5);
          border-bottom-right-radius: 0;
          & > nav {
            display: flex;
            flex-direction: column;
            height: 100%;
            & > ul {
              flex-direction: column;
              justify-content: space-between;
              align-items: flex-start;
              & > li {
                margin-top: @spaceLg;
                & > a {
                  & > img {
                    height: @spaceXl;
                  }
                }
                &:first-child {
                  display: flex;
                  & > a {
                    flex-direction: column;
                    & > img {
                      height: 96px;
                    }
                    &::before {
                      display: none;
                    }
                  }
                }
              }
            }
            & + div {
              display: flex;
              flex-direction: column;
              justify-content: space-between;

              & > button {
                margin-bottom: @spaceLg;
              }
            }
          }
        }
      }
    }
  }
}
</style>
