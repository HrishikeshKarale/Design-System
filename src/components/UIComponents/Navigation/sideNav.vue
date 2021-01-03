//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <header ref="sideNav" class="sideNav">
    <vue-button
      v-if="toggleNavIcon"
      class="menuTrigger"
      tag="toggleNav"
      category="icon-lg"
      :icon="toggleNavIcon"
      :ctx="toggleNavigation.bind(this)"
    />
    <nav>
      <!-- level 1 -->
      <ul>
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            <template v-if= "navigation.id === 0">
              <vue-img :src="logoLink" alt="Logo" />
              <h3>
                Design Guide
                <h6>Hrishikesh Karale</h6>
              </h3>
            </template>
            <template v-else>
              <span :class="navigation.icon" />
              <div>
                <h4>{{ navigation.name }}</h4>
                <span v-if="navigation.tagline"> {{ navigation.tagline }}</span>
              </div>
            </template>
          </router-link>
          <!-- level 2 -->
          <ul class="subNav" v-show="navigation.subNav && $route.path.indexOf(navigation.component)!=-1">
            <li
              v-for="(nav2, index) in navigation.subNav"
              :key="index + '-' + nav2.name"
            >
              <router-link :to="{ name: nav2.component }">
                <span :class="nav2.icon" />
                <h4>{{ nav2.name }}</h4>
              </router-link>
              <!-- level 3 -->
              <ul class="subNav2" v-if="nav2.subNav && $route.path.indexOf(nav2.component)!=-1">
                <li
                  v-for="(nav3, index) in nav2.subNav"
                  :key="index + '-' + nav3.name"
                >
                  <router-link :to="{ name: nav3.component }">
                    <span :class="nav3.icon" />
                    <h5>{{ nav3.name }}</h5>
                  </router-link>
              </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="options">
      <slot name="options" />
      <vue-button
        v-if="themeIcon"
        tag="themeToggle"
        category="text-sm"
        text="Theme"
        :icon="themeIcon"
        :ctx="theme.bind(this)"
      />
    </div>
  </header>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import { authentication } from "@/typeScript/authentication";
import vueButton from "@/components/UIComponents/Button";
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
      type: String,
      default: ""
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

  unmounted() {
    document.removeEventListener("click", this.clickHandler, {
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
      this.toggle("nav");
      this.$refs["sideNav"].classList.toggle("showNav");
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
@selected: @accentColor;

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
    justify-content: space-evenly;
    padding: @spaceLg;
    background-color: @navBackground;
    max-width: max-content;
    z-index: @headerZ;
    height: 100vh;

    //Icons Only (hide text)
    & > nav {
      display: flex;
      margin-top: @spaceLg;
      height: 100%;
      & > ul {
        display: flex;
        flex-direction: column;
        & > li {
          display: flex;
          flex-direction: column;
          margin-bottom: @spaceLg;

          //logo home button
          &:first-child {
            align-self: center;
            & > a {
              display: flex;
              flex-direction: column;
              & > img {
                display: block;
                height: 48px;
                & + h3 {
                  display: none;
                }
              }
            }
          }

          //level 1 Level 2 and level 3
          &,
          & > .subNav > li,
          & > .subNav > li > .subNav2 > li {
            //hover for level 1, 2 and 3
            &:hover {
              & > a {
                & > span {
                  color: @selected;
                }
              }
            }
            & > a {
              display: flex;
              flex-direction: column;
              flex-wrap: nowrap;
              padding: @spaceMd @spaceSm;

              // level 1  level 2 level 3
                & > span {
                  align-self: center;
                  font-size: @fontSizeSm * 2;
                  .navSubText();
                }
                & > div > h4,
                & > h4,
                & > h5 {
                  display: none;
                }


              //level 2 and level 3 only
              & + .subNav,
              & + .subNav > li > .subNav2 {
                margin-bottom:@spaceMd;
                & > li {
                  display: flex;
                  flex-direction: column;
                  & > a {
                    display: flex;
                    padding: @spaceMd;
                    & > span {
                      font-size: @fontSize;
                      & + h4 {
                        display: none;
                      }
                    }
                  }
                }
              }
              & + .subNav > li > .subNav2 {
                & > li > a > span {
                  font-size: @fontSizeSm;
                }
              }
              //styling selected link
              &.router-link-active {
                & > span,
                & > div > h4,
                & > h4,
                & > h5  {
                  color: @selected;
                }
                & > span {
                  transform: scale(1.6);
                }
                &.router-link-exact-active {
                  & > span,
                  & > div > h4,
                  & > h4,
                  & > h5  {
                    color: @selected;
                  }
                  & > span {
                    transform: scale(1.2);
                  }
                }
                & > div {
                  & > h4 {
                    color: white;
                    font-weight: bold;
                    & + span {
                      color: white;
                    }
                  }
                }
              }
            }
          }
        }
      }
      & + .options {
        display: flex;
        position: fixed;
        top: @spaceXl;
        right: @spaceXl;
      }
    }

    //Extend nav to full size
    &.showNav {
      & > .menuTrigger {
        margin-left: auto;
      }
      & > nav {
        & > ul {
          & > li {
            align-self: flex-start;
            //logo home link
            &:first-child {
              align-self: center;
              & > a {
                flex-direction: column;
                & > img {
                  height: 64px;
                  & + h3 {
                    display: flex;
                    flex-direction: column;
                    margin-top: @spaceMd;
                    color: @accentColor;
                    & > h6 {
                      color: @navText;
                      align-self: flex-end;
                      color: @backgroundColor;
                    }
                  }
                }
              }
            }

            //level 1 Level 2 and level 3
            &,
            & > .subNav > li,
            & > .subNav > li > .subNav2 > li {
              & > a {
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;

                // level 1  level 2 level 3
                & > span {
                  font-size: @fontSize;
                  margin-right: @spaceMd;
                }
                & > div > h4,
                & > h4,
                & > h5  {
                  margin: 0;
                  display: flex;
                  .navSubText();
                }

                //level 2 level 3
                & + .subNav,
                & + .subNav > li > .subNav2 {
                  flex-direction: column;
                  margin-left: @spaceMd;
                  margin-bottom: 0;
                  & > li {
                    flex-direction: column;
                    // align-self: flex-start;
                    & > a {
                      & > span {
                        align-self: center;
                        font-size: @fontSizeSm;
                        & + h4 {
                          .navSubText();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    @media screen {
      @media (max-width: @maxWidth) {
        flex-direction: column;
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
                      height: 64px;
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
