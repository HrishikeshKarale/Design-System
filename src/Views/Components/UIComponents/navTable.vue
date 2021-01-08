// https://uxdesign.cc/designing-tables-for-reusability-490a3760533
<template>
  <component-details
    :compData= 'd_table'
  >
    <vue-table
      :tableData= 'paginatedData'
      :columns= 'd_columns'
      :metadata= 'metadata'
      :select= 'd_columns[0]'
      :title= 'd_title'
      :low= 'd_low'
      @setPage= 'setPage'
      @setSortKey= 'setSortKey'
      @selectRow= 'selectRow'
      @setRowElements= 'setRowElements'
    />
  </component-details>
</template>

<script>

  import { vueTable } from "vue2-component-library"
	import componentDetails from '@/Views/componentDetails'

  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'navTable',

    d_url: 'https://api.myjson.com/bins/qcjt6',

		mapState,

    mapActions,

    data() {
      const d_title= 'Table Name'
			const d_low= '1'
      const d_columns= [
        'Order Number',
        'Status',
        'Created On',
        'Created By'
      ]
      return {
        d_columns,
        d_title,
        d_low
      } //return
    }, //data

    methods: {
			...mapActions(
        [
          'selectRow',
          'setSortKey',
          'setPage',
          'setRowElements',
        ]
      ),
    }, //methods

    computed: {
      ...mapState (
        [
          'paginatedData',
          'metadata',
          'selectedFilter',
        ]
			),

      d_table: function() {
				return {
					title: 'Table',
					compName: 'vue-table',
					import: 'import { vueTable } from "vue2-component-library"',
					description: '<p></p>',
					attributes: [
						{
							type: "data",
							value: this.paginatedData,
							description: '<p>The tableDetails attribute provides the table with data pertaining to columns adn records for the particulat &lt;vue-table&gt;.</p>\
											<p>The tableDetails attribute is an Object and has data and cols as keys to hold records and column names respectively.</p>\
											<p>This is a required field and cannot be left null/empty.</p>',
							text: 'Specifies the rows and columns for the table as an object'
						},
						{
							type: "columns",
							value:  this.d_columns,
							description: '<p>The tableDetails attribute provides the table with data pertaining to columns adn records for the particulat &lt;vue-table&gt;.</p>\
											<p>The tableDetails attribute is an Object and has data and cols as keys to hold records and column names respectively.</p>\
											<p>This is a required field and cannot be left null/empty.</p>',
							text: 'Specifies the rows and columns for the table as an object'
						},
						{
							type: "metadata",
							value: this.metadata,
							description: '<p>The tableDetails attribute provides the table with data pertaining to columns adn records for the particulat &lt;vue-table&gt;.</p>\
											<p>The tableDetails attribute is an Object and has data and cols as keys to hold records and column names respectively.</p>\
											<p>This is a required field and cannot be left null/empty.</p>',
							text: 'Specifies the rows and columns for the table as an object'
						},
						{
							type: "title",
							value: this.d_title,
							description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.</p>\
											<p>This title attribute take a string input and displays it in the top-left corner.</p>',
							text: 'Specifies the title/name for the table.'
						},
						{
							type: "low",
							value: this.d_low,
							description: '<p>The title attribute provides the table with a title or name for the particulat &lt;vue-table&gt;.</p>\
											<p>This title attribute take a string input and displays it in the top-left corner.</p>',
							text: 'Specifies the title/name for the table.'
						}
					], //attributes
				}
			} //d_table
    }, //computed

    beforeCreate () {

      this.$store.dispatch('initData', 'https://api.myjson.com/bins/qcjt6')
    }, //beforeCreate

    components: {

      vueTable,
      componentDetails,
		} //components
  } //default
</script>