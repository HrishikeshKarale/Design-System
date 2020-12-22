<template>
  <div class="scrollIndicator">
    <div class="scrolContent">
      <slot />
    </div>
    <div v-if="tagOffset.length > 1" class="scroll">
      <a
        v-for="indicator in tagOffset"
        :key="indicator.id"
        :href="'#' + indicator.id"
        :class="{ active: indicator.selected }"
      >
        <span :class="[indicator.selected ? 'fas' : 'far', 'fa-circle']" />
        <span>{{ indicator.id }}</span>
      </a>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/typeScript/debounce";

export default {
  name: "ScrollIndicator",
  mixins: [debounce],
  data() {
    //used to calculate the height of header/navigation
    const headerOffset = null;
    //saves the sectrion tags used to generate Sub Content navigation links.
    const tag = [];
    //stores the tag (section) ad well as the top and bottom pixel location of the tag as well as if its selected or not.
    const tagOffset = [];
    //stores height opf the current browser window
    const windowHeight = null;
    //stores pixel value above which we select a tag.
    const windowBuffer = null;
    //ratio used to calculate window buffer
    const bufferRatio = 0.18;
    return {
      headerOffset,
      tag,
      tagOffset,
      windowHeight,
      windowBuffer,
      bufferRatio
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    checkScroll: function() {
      const highlight = Math.round(this.headerOffset.scrollTop);
      for (let i = 0; i < this.tag.length; i++) {
        const tagOffset = this.tagOffset[i];

        //activate tags depending on the window scroll location and tag top/bottom pixel location within the page.
        if (
          highlight + this.windowBuffer > tagOffset.top &&
          highlight < tagOffset.bottom
        ) {
          tagOffset.selected = true;
        } else {
          //keep last tag selected when scroll exceeds bottom pixel location
          if (
            i == this.tag.length &&
            this.windowHeight + highlight >=
              this.tagOffset[this.tagOffset.length - 1].bottom
          ) {
            tagOffset.selected = true;
          } else {
            tagOffset.selected = false;
          }
        }
      }
      this.prevScrollValue = highlight;
    }, //checkScroll
    initialize: function() {
      this.headerOffset = document.getElementsByClassName("body")[0];
      const offsetHeader = Array.from(
        document.getElementsByClassName("vueHeader")
      )[0];
      this.tag = Array.from(document.getElementsByTagName("section"));
      this.tag = this.tag.filter(tag => tag.id != "");
      const headerOffset= offsetHeader? offsetHeader.offsetHeight: 0
      this.tagOffset = this.tag.map(section => {
        return {
          top: section.offsetTop - headerOffset,
          bottom:
            section.offsetTop +
            section.offsetHeight -
            headerOffset,
          id: section.getAttribute("id"),
          selected: false
        };
      });
      if (this.tag.length > 1) {
        this.headerOffset.addEventListener(
          "scroll",
          this.debounce(this.checkScroll),
          {
            capture: false, // top to bottom bubbling/propogation
            once: false //should work only once
          }
        );
        this.windowHeight = this.headerOffset.offsetHeight;
        this.windowBuffer = this.windowHeight * this.bufferRatio;
        this.checkScroll();
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "../../Less/customMixins.less";
@import (reference) "../../Less/customVariables.less";

.scrollIndicator {
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    &.scroll {
      position: absolute;
      height: fit-content;
      top: @header + @spaceLg;
      right: @spaceLg*2;
      &::before {
        content: "Page Content";
        text-align: right;
        font-weight: bold;
      }
      & > a {
        display: flex;
        flex-direction: row-reverse;
        text-decoration: none;
        padding: @spaceMd;
        margin: @spaceSm 0;
        height: @spaceXl;
        background-color: transparent;
        width: auto;
        &:hover,
        &.active {
          border-radius: @borderRadius;
          background-color: @secondaryColor;
          .boxShadow(@one);
          color: @white;
          //active block text;
          & > span:last-child {
            display: block;
            color: @textColor;
            font-weight: bold;
            margin-right: @spaceLg;
          }
        }
        & > span {
          .textShadow(@base);
          &:last-child {
            .textShadow(none);
            display: none;
          }
        }
      }
    }

    &.scrolContent {
      display: flex;
      margin: 0 auto;
      max-width: 1024px;
    }
  }
  @media screen {
    @media (max-width: 1540px) {
      & > div {
        &.scroll {
          background-color: @secondaryColor;
          border-radius: @spaceXl;
          padding: @spaceXs;
          top: 50%;
          transform: translateY(-50%);
          right: @spaceLg;
          & > a {
            width: fit-content;
            &:hover,
            &.active {
              background-color: none;
              .boxShadow(none);
              & > span:last-child {
                position: absolute;
                width: max-content;
                text-align: center;
                color: @secondaryColor;
                top: -32px;
                right: -16px;
                font-weight: bold;
              }
            }
            & > span {
              color: @backgroundColor;
              .textShadow(@one);
            }
          }
          &::before {
            content: "";
          }
        }
      }
    }
  }
}
</style>
