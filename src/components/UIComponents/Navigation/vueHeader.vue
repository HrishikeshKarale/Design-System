//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <header ref="vueHeader" class="vueHeader">
    <vue-button
      v-if="toggleNavIcon"
      class="menuTrigger"
      buttop-name="toggleNav"
      button-style="icon-lg"
      :button-icon="toggleNavIcon"
      :ctx="toggleNavigation.bind(this)"
    />
    <nav>
      <ul>
        <!-- <li>
          <router-link :to="{ name: 'app' }">
            <vue-img :src="logoLink" alt="Logo" />
            <h3>
              Hrishikesh Karale
              <h5>Kkiokio.com</h5>
            </h3>
          </router-link>
        </li> -->
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            <template v-if= "navigation.id === 0">
              <vue-img :src="logoLink" alt="Logo" />
              <h3>
                Hrishikesh Karale
                <h5>Kkiokio.com</h5>
              </h3>
            </template>
            <template v-else>
              <span v-if="index > 0" :class="navigation.icon" />
              <template v-else>
                <vue-img :src="logoLink" alt="Kkiokio.com" />
              </template>
              <div>
                <h4>{{ navigation.name }}</h4>
                <span> {{ navigation.tagline }}</span>
              </div>
            </template>
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <span class="fas fa-user" />
      <div class="user">
        <template v-if="signedIn">
          <vue-img :src="user ? user.image : null" alt="Logo" />
          <h5 v-if="user">
            {{ user ? user.name : null }}
          </h5>
          <h5 v-else>
            Guest
          </h5>
        </template>
        <div class="g-signin2" data-onsuccess="triggerGoogleLoaded" />
        <vue-button
          v-if="!signedIn"
          buttop-name="loginButton"
          button-style="text-sm"
          button-text="LogIn"
          button-icon="fas fa-sign-in-alt"
          :ctx="login.bind(this)"
        />
        <vue-button
          v-else
          button-name="googleSignOutButton"
          button-text="logout"
          button-icon="fas fa-sign-out-alt"
          button-style="text-sm"
          :ctx="signOut.bind()"
        />
        <vue-button
          v-if="themeIcon"
          buttop-name="themeToggle"
          button-style="text-sm"
          button-text="Theme"
          :button-icon="themeIcon"
          :ctx="theme.bind(this)"
        />
      </div>
    </div>
  </header>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import { authentication } from "@/typeScript/authentication";
import vueButton from "@/components/UIComponents/Buttons";
import vueImg from "../Image/vueImg.vue";

export default {
  name: "VueHeader",

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
      type: Object,
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
      // console.log("modal", !event.target.closest(".vueHeader").length);
      if (!event.target.closest(".vueHeader") && this.isOpen("nav")) {
        this.toggleNavigation();
        // alert("click outside!");
      }
      // event.stopPropogation(); //stop event bubbling
    }, //clickHandler

    login: function() {
      this.$router.push({ name: "login" });
    }, //login

    toggleNavigation: function() {
      this.$refs["vueHeader"].classList.toggle("showNav");
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
  color: @navText;
  opacity: @lowOpacity;
}

header {
  &.vueHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: @spaceMd @spaceXl;
    background-color: @navBackground;
    max-width: 100vw;
    z-index: @headerZ;
    height: @header;
    // .boxShadow(@one);
    & > .menuTrigger {
      display: none;
      margin-left: auto;
    }
    & > nav {
      & > ul {
        display: flex;
        flex-direction: row;

        & > li {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          flex: 1;
          //hide website name and logo
          &:first-child {
            display: none;
            & > a > img {
              display: block;
              height: 64px;
              margin: auto;
              & + h3 {
                display: flex;
                flex-direction: column;
                & > h5 {
                  align-self: flex-end;
                  color: @white;
                }
              }
            }
          }
          & > a {
            margin: 0 @spaceLg;
            color: @navText;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;

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
                color: @navText;
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
                opacity: 1;
              }
              & > div {
                & > h4 {
                  color: @secondaryColor;
                  font-weight: bold;
                  & + span {
                    color: @navText;
                    opacity: 1;
                  }
                }
              }
            }

            //bottom line for nav
            &::before {
              content: "";
              position: absolute;
              width: 100%;
              background-color: @secondaryColor;
              bottom: -8px;
              height: 2px;
              transform: scale(0);
              transition: @transition;
            }
            //hover effect for li
            &:hover {
              color: @primaryColor;
              &::before {
                transform: scale(1.2);
              }
              & > span {
                color: @navText;
                opacity: 1;
              }
              & > div {
                & > h4 {
                  color: @secondaryColor;
                  & + span {
                    color: @navText;
                    opacity: 1;
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
