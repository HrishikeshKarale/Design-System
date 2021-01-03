<template>
  <div v-if="pathBreakdown.length > 1" class="breadcrums">
	<br>
		<template
			v-for= "(path, index) in pathBreakdown"
		>
				<router-link
				v-if= "pathBreakdown.length -1 > index"
					class="crums"
					:key="index"
					:to="{ name: isComponent(path).comp}"
				>
					{{ isComponent(path).name }}
				</router-link>
			<h1 v-else>
				{{isComponent(path).name}}</h1>
			</h1>
			<span v-if="pathBreakdown.length - 1 > index"  :key= 'path' class="fas fa-angle-right" />
		</template>
  </div>
</template>

<script>

export default {
  name: "breadcrums",

  props: {
    navigation: {
      type: Array,
      required: true
    },
    projects: {
      type: Array,
      required: false
    }
  }, //props

  data() {
    const unique = [];
    return {
      unique
    }
  }, //data

  computed: {
    pathBreakdown: function() {
      let temp = ("app" + this.$route.path).split("/");
      temp = temp.filter(function(el) {
        return el != "";
      });
      return temp;
    }
  },

  created() {
    //get a list of components to be used for pathBreakdown

    if(this.projects) {
      this.projects.forEach(project => {
				this.navBreakdown(project);
			});
		}
    this.navigation.forEach(nav => {
			this.navBreakdown(nav);
		});
  },

  methods: {
		navBreakdown: function(nav) {
			this.unique = [...this.unique, { comp: nav.component, name: nav.name }];
			const subNav = nav.subNav;
			if(subNav) {
				subNav.forEach(navigation => {
					if(navigation)	this.navBreakdown(navigation);
				});
			}
			else return;
		}, //navBreakdown
    isComponent: function(comp) {
      var result = this.unique.find(uni => comp == uni.comp);
      return result? result : false;
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customMixins.less";
@import (reference) "../../../Less/customVariables.less";

.breadcrums {
  display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
  margin: @spaceLg 0;
  align-items: center;
  & > .path {
    padding: @spaceMd;
    text-decoration: none;
    & > h5 {
      margin: 0 !important;
    }
  }
  & > h1 {
    margin: 0;
  }
  & > span {
		color: @textColor;
		margin: 0 @spaceMd;
  }
  @media screen {
    @media (max-width: @maxWidth) {
      margin: 0 0 0 @spaceXl !important;
    }
  }
}
</style>
