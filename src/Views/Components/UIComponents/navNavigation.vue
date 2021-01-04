<template>
  <component-details
    :compData= 'd_navigation'
  >
    <side-nav :logoLink= "d_logoLink" :nav= "d_navData" />
  </component-details>
</template>

<script>

  import sideNav from '@/components/UIComponents/Navigation/sideNav'
  import componentDetails from '@/Views/componentDetails'

  import { mapState } from 'vuex';

  export default {
    name: 'navNavigation',
    mapState,

    data () {
      const d_logoLink= require('@/assets/logo.svg')
      const d_title= 'Sample Navigation'
      const d_navigationTiles= this.$store.state.navigation
      const d_nav= this.nav
      return {
        d_logoLink,
        d_title,
        d_navigationTiles,
        d_nav,
        d_content: false,
        d_selected: null
      } //return
		}, //data

		computed: {
      ...mapState(
        {
          d_navData: 'navigation',
				}
      ),

			d_navigation: function() {
				return {
					title: 'Navigation',
					compName: 'side-nav',
					import: 'import vueTable from "@/components/UIComponents/Navigation/sideNav"',
					description: '<p>The navigation component by default ticks to the extreme left of the page.</p>',
					attributes: [
						{
							type: "nav",
							value: this.d_navData,
							description: '<p>The tableDetails attribute provides the table with data pertaining to columns adn records for the particulat &lt;vue-table&gt;.\
							The tableDetails attribute is an Object and has data and cols as keys to hold records and column names respectively.</p>\
							<p>This is a required field and cannot be left null/empty.</p>',
							text: 'Specifies the rows and columns for the table as an object'
						},
						{
							type: "logoLink",
							value: this.d_logoLink,
							description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.\
							This title attribute take a string input and displays it in the top-left corner.</p>',
							text: 'Specifies the title/name for the table.'
						}
					] //attributes
				};
			} //d_navigation
		}, //computed

    methods: {
      nav: function (id) {
        this.selected= id

        if (id) {
          this.content= true
        }
        else {
          this.content= false
        }
      }
		}, //methods

		created() {
			console.log(typeof this.d_logoLink, this.d_logoLink.length, this.d_logoLink);
		},

    components: {
			sideNav,
      componentDetails,
		}, //components
  } //default
</script>

<style lang= 'less' scoped>

  .navNavigation {
    display: flex;
  }
</style>
