<template> <!--https://jsfiddle.net/xkkbfL3L/9380/-->
  <div
    class= 'vueTable'
    :class= '{inner: subtableId}'
  >
    <table>
      <thead>
        <tr
          class= 'searchRow'
        >
          <th>
            <div>
              {{title}}<input name= 'table' type= 'hidden' :value= 'metadata.selected' required= '1==1'>
            </div>
            <div>
                <text-input
                  name= 'tableSearchField'
                  placeholder= 'Search...'
                  icon= "fas fa-search"
                  :value= 'metadata.searchKey'
                  @notify= 'alerts'
                  @value= 'val=> metadata.searchKey = val'
                />
            </div>
          </th>
        </tr>
        <tr>
          <th>                           <div :class= '{showOptions: metadata.selected && metadata.selected.length> 0}'>
              <div>
                <input
                  v-if= "!subtableId"
                  type= 'checkbox'
                  id= 'selectAllRows'
                  @click= 'selectAllFromPage'
                >
              </div>
              <div v-if= 'metadata.selected && metadata.selected.length> 0'>

                <div>
                  {{metadata.selected && metadata.selected.length== tableData.length? ("All "+metadata.selected.length+" Selected"):("Selected: "+metadata.selected.length)}}
                </div>
                <!-- <div class= 'tableAction'>
                  <span
                    class= 'fas fa-ellipsis-h'
                    @click.stop= 'tableAction= !tableAction'
                    :class= '{open: tableAction}'
                  />
                  <ul
                    :class= '{open: tableAction}'
                  >
                    <li>
                      <span class= "fas fa-trash fa-1x"/>
                      <span>
                        Delete
                      </span>
                    </li>
                    <li>
                      <span class= "fas fa-times fa-1x"/>
                      <span>
                        Remove
                      </span>                         </li>
                    <li>
                      <span class= "fas fa-pen fa-1x"/>
                      <span>
                        Edit
                      </span>                         </li>
                    <li>
                      <span class= "fas fa-check fa-1x"/>
                      <span>
                        Accept
                      </span>                         </li>
                  </ul>
                </div> -->
                <div
                  v-if= '!subtableId'
                  @click.stop= 'textSelectAll()'
                  class= 'smalltext'
                >
                  <template
                    v-if= 'metadata.selected && metadata.selected.length> 0 && metadata.selected.length< metadata.totalRecords'
                  >
                  All {{metadata.totalRecords}}
                  </template>
                </div>
                <div
                  v-if= '!subtableId'
                  @click.stop= 'textSelectNone()'
                  class= 'smalltext'
                >
                  <template
                    v-if= 'metadata.selected && metadata.selected.length> 0 && metadata.selected.length<= metadata.totalRecords'
                  >
                  None
                  </template>
                </div>
              </div>
            </div>
                         <!-- <div v-else-if= 'subtableId'>
              id: {{subtableId}}
            </div> -->
                       </th>
                     <th
            v-for= 'col in columns'
            :key= 'col.index'
            @click.stop= 'setSortKey(col)'
            :class= '{ active: metadata.sortKey == col }'
          >
            {{ col | capitalize }}
            <!-- <span
              v-if= 'metadata.sortKey == col'
              class= 'fas .fa-stack-1x'
              :class= 'metadata.sortOrders[col] > 0 ? "fa-sort-up" : "fa-sort-down"'
            /> -->
            <span
              class= "fa-stack"
            >
              <i
                class= "fas fa-stack-1x"
                :class= 'metadata.sortKey != col? "fa-sort": metadata.sortOrders[col]> 0 ? "fa-sort-up asc": null'
              />
              <i
                v-show= 'metadata.sortKey == col'
                class= "fas fa-stack-1x"
                :class= 'metadata.sortKey != col? "fa-sort": metadata.sortOrders[col]> 0 ? null:"fa-sort-down dsc"'
              />
            </span>
          </th>
          <th>
            Action
            <div class= 'editColumns'>
              <span
                class= 'fas fa-cog'
                @click.stop= 'd_editColumns= !d_editColumns'
                :class= '{open: d_editColumns}'
              />
              <ul
                :class= '{open: d_editColumns}'
              >
                <li>
                  <label>Display Columns</label>
                </li>
                <li
                  v-for= 'col in d_columns'
                  :key= 'col'
                >
                  <label>
                    <input
                      type= 'checkbox'
                      :value= 'col'
                      :checked= 'columns.indexOf(col)!=-1? true: false'
                      @click= 'toggleColumns(col)'
                    >
                    {{col}}
                  </label>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for= '(entry, index) in tableData'
          :entry= 'entry'
        >
          <tr
            :key= 'index'
            :class= '{"selected": metadata.selected && metadata.selected.indexOf(entry[select])!=-1, tableBgStriped: tableBgStriped_Toggle()}'
            :id= 'entry[select]'
            @click.stop= 'SelectRow(entry[select])'
          >
            <td>
              <input
                v-if= "!subtableId"
                type= 'checkbox'
                class= 'selectRow'
                :checked= '(metadata.selected && metadata.selected.indexOf(entry[select])!=-1)? true: false'
                @click.self= 'toggleCheckbox(entry[select])'
              />                               <!-- <vue-button
                :type= 'd_type'
                tag= "ExpandRow"
                :text= "d_text"
                :icon= 'entry.showSub? "fas fa-chevron-down":"fas fa-chevron-up"'
                :category= 'd_category[9]'


                :form= "d_form"
                :ctx= 'toggleSubTable.bind(this, entry)'
              />  -->
            </td>
                       <td
              v-for= '(col, index) in columns'
              :key= 'index'
            >
              {{entry[col]}}
            </td>
            <td>
              <vue-modal
                :modalTitle= '"Delete "+ entry[select]'
                tag= 'toggleExpandButton'
                icon= 'fas fa-trash-alt'
                :ctx= 'consoleClickDelete'
              >
                                    you can use custom content here to overwrite default content
                                <h3>
                  Custom body
                </h3>
                             </vue-modal>                               <vue-button
                :type= 'd_type'
                tag= "ExpandRow"
                :icon= 'entry? "fas fa-chevron-left":"fas fa-chevron-up"'
                :category= 'd_category[9]'
                :ctx= 'toggleSubTable.bind(this, entry)'
              />
              <!-- <span
                :class= 'entry? "fas fa-chevron-right":"fas fa-chevron-down"'
                @click.stop= 'toggleSubTable(entry)'
              /> -->
            </td>
          </tr>
          <!-- <tr
            v-if= 'entry.subDetails && entry.showSub'
            :key= 'index'
            :id= 'entry[select]+ "expand"'
          >
            <td
              class= 'subTable'
              :colspan= "columns.length+1"
            >
              <vue-table
                :tableData= '(entry.subDetails).tableData'
                :columns= '(entry.subDetails).cols'
                :metadata= '{}'
                :title= '(entry.subDetails).title'
                :subtableId= 'entry[select]+ "-subtable"'
              />
            </td>
          </tr> -->
        </template>
      </tbody>
    </table>
    <div class= 'paging'>
      <div>
        <!-- <checkbox-input
          name= "rowElements"
          :value= 'showRecords'
          :options= 'metadata.recordsPerPage'
          :required= 'd_booleanTrue'
          :box= 'd_booleanTrue'
          :inline= 'd_booleanTrue'
          @selected= 'setRowElements'
        /> -->
        <dropdown-list
          label= 'Show'
          name= "showRecords"
          :value= "d_dropdownValue"
          :options= "metadata.recordsPerPage"
          :required= 'd_booleanTrue'
          :inline= 'd_booleanTrue'
          @notify= 'alerts'
          @value= 'val=> d_dropdownValue = val'
        />
      </div>
      <div>
        <div>
          Showing {{metadata.start}} - {{metadata.end}} of {{metadata.totalRecords}} Results.
        </div>
        <div>
          <!-- <span
            class= 'fas fa-chevron-left'
            @click.stop= 'setPage(metadata.pageNumber-1)'
            v-show= 'metadata.pageNumber> 1'
          />                -->
          <vue-button
            v-show= 'metadata.pageNumber> 1'
            :type= 'd_type'
            tag= "previousPage"
            icon= 'fas fa-chevron-left'
            :category= 'd_category[9]'
            :ctx= 'setPage.bind(this, metadata.pageNumber-1)'
          />
        </div>
        <div>
          Page {{metadata.pageNumber}}
        </div>
        <div>
          <!-- <span
            class= 'fas fa-chevron-right'
            @click.stop= 'setPage(metadata.pageNumber+1)'
            v-show= 'metadata.pageNumber< metadata.pageCount'
          />                 -->
          <vue-button
            v-show= 'metadata.pageNumber< metadata.pageCount'
            :type= 'd_type'
            tag= "nextPage"
            icon= 'fas fa-chevron-right'
            :category= 'd_category[9]'
            :ctx= 'setPage.bind(this, metadata.pageNumber+1)'
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import cardBackground from '../Cards/cardBackground.vue';
  import vueButton from '../UIComponents/Button/index.vue';
  import dropdownList from '../../FormElements/dropdownList.vue';
  import textInput from '../../FormElements/textInput.vue';
  import vueModal from '../Modal/vueModal.vue';
  import checkboxInput from "../../FormElements/checkboxInput.vue";
	import { alerts } from "../../../typeScript/common/alerts";

  export default {
    name:'vueTable',

		mixins: [ alerts ],

    props: {

      tableData: {
        required: true,
        type: Array,
        default: null
      },

      columns: {
        required: true,
        type: Array,
        default: null
      },

      metadata:  {
        required: true,
        type: Object,
        default: null
      },

      title: {
        required: false,
        type: String,
        default: null
      },

      subtableId: {
        required: false,
        type: String,
        default: null
			},

			low: {
        required: false,
        type: String,
        default: null,
        validator: function (value) {
          // console.log(value)
          return ["1", "2", "3", "4", "5", null].indexOf(value)!= -1
        }
      },

      select:{
        required: false,
        type: String,
        default: null

      }
    }, //props

    components: {
      cardBackground,
      checkboxInput,
      vueButton,
      vueModal,
      dropdownList,
      textInput,
      checkboxInput
    }, //components

    data() {
      const d_type= 'button'
      const d_tag= 'consoleTextButton'
      const d_text= 'Click Me'
      const d_icon= 'fas fa-registered'
      const d_category= this.$store.state.category
      const d_booleanTrue= true
      const d_form= ''
      const d_rowElements= this.metadata.rowElements
      const d_columns= null
      const d_dropdownValue= this.metadata.rowElements
      return {
        d_columns: d_columns,
        d_rowElements: d_rowElements,
        d_type: d_type,
        d_tag: d_tag,
        d_text: d_text,
        d_icon: d_icon,
        d_category: d_category,
        d_booleanTrue: d_booleanTrue,
        d_form: d_form,
				d_editColumns: false,
				d_tableBgStriped: false,
        d_dropdownValue: d_dropdownValue,
				d_url: 'https://api.myjson.com/bins/qcjt6',
      } //return
    }, //data
		computed: {

      showRecords: function () {
        return this.metadata.rowElements
      }, //metadata.showRecords

      // searchKey: {
      //   set (value) {
      //     if (value != this.metadata.searchKey) {
      //       this.$store.dispatch('setmetadata.searchKeyValue', value)
      //     }
      //   },
      //   get () {
      //     return this.$store.state.metadata.searchKey
      //   }
      // }, //metadata.searchKey
    }, //computed
		filters: {
				capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
      }, //capitalize
    }, //filters
		methods: {
			toggleColumns: function (newValue) {
        this.$emit('toggleCloumns', newValue)
      }, //toggleColumns

      toggleSubTable: function (newValue) {

      }, //toggleSubTable

      dataTablecolumns: function () {
        var temp
        Object.keys(dataObject[0])
          .forEach(function eachKey(key) {
            state.columns.push(key); // alerts key
            // alert(foo[key]); // alerts value
          });
      }, //dataTablecolumns
             consoleClickEdit: function () {
        // console.log("TableClickEdit")
      }, // consoleClick
                  consoleClickDelete: function () {
        // console.log("TableClickDelete")
      }, // consoleClick

      intermediateState: function (selected) {
        var selectAllrows= document.getElementById('selectAllRows')

        if (selected) {
          if (selected.length == 0 ) {
            selectAllrows.indeterminate = false;
            selectAllrows.checked= false
            // console.log('!intermediate', selectAllrows.checked)
          }
          else if (selected && selected.length < this.tableData.length) {
            selectAllrows.indeterminate = true;
            selectAllrows.checked= false
            // console.log('intermediate', selectAllrows.checked, typeof(selectAllrows.indeterminate))
          }
          else if (selected && selected.length == this.tableData.length) {
            selectAllrows.indeterminate = false;
            selectAllrows.checked = true;
          }

        }
        else {
          selectAllrows.indeterminate = false;
          selectAllrows.checked= false
        }
      }, //intermediate

      toggleCheckbox: function (id) {
        event.target.checked= false
        SelectRow(id)
      }, //toggleCheckbox

      //check or uncheck a checkbox DOM and include it in the selected[] for the table
      SelectRow: function (id) {
        var selected= this.metadata.selected
        var tr= document.getElementById(id)
        // console.log(event, id)
        var checkbox= tr.getElementsByClassName('selectRow')[0]
                 //check if already exists
        if (!checkbox.checked) {
            //if not then add
          selected.push(id)
        }
        else {
          //if yes then remove
          selected.splice(selected.indexOf(id), 1)
        }

        //toggle intermediate state
        this.intermediateState(selected)
      }, //toggle

      tableBgStriped_Toggle: function () {
        this.tableBgStriped= !this.tableBgStriped
        return this.tableBgStriped
      }, //tableBgStriped_Toggle

      textSelectNone: function () {
        this.metadata.selected= []
        var selectAllrows= document.getElementById('selectAllRows')
        selectAllrows.checked= false
        selectAllrows.indeterminate= false
      }, //textSelectNone

      selectAllFromPage: function () {
        var selected= this.metadata.selected
        // console.log(selected)
        var selectAllrows= document.getElementById('selectAllRows')
        var inputs= document.getElementsByClassName('selectRow')
        var selectAll= selectAllrows.checked
                 for (var checkbox in inputs) {

            var td= inputs[checkbox].parentNode
            var tr= td.parentNode
            // console.log(checkbox, td.parentNode, tr.id)
                       //check if selectAll or selectNone
            if (!selectAll) {
                     //if selectNone, then remove selected
              if (selected.indexOf(tr.id)!=-1) {
                this.SelectRow(tr.id)
              }
            }
            //if SelectAll, then include not selected from page.
            else if (!selected.indexOf(tr.id)!=-1) {
              this.SelectRow(tr.id)
            }
        }
      }, //selectAllFromPage

      setPage: function (newValue) {
        // console.log('setPage: ', newValue, this.metadata.pageNumber)
        this.$emit('setPage', newValue)
      }, //setPage

      setSortKey: function (newValue) {
        // console.log('setPage: ', newValue, this.metadata.pageNumber)
        this.$emit('setSortKey', newValue)
      }, //setPage

      setRowElements: function (newValue) {
        // console.log('setPage: ', newValue, this.metadata.rowElements)
        this.$emit('setRowElements', newValue)
      }, //setRowElements
    }, //methods

    watch: {

      d_dropdownValue: function (newValue, oldValue) {
        if (newValue!= oldValue) {
          // console.log(newValue, oldValue)
          this.setRowElements(newValue)
        }
      }, //d_dropdownValue
    }, //watch

    created() {

      var tempArray= []
             Object.keys(this.tableData[0])
          .forEach(function eachKey(key) {
            tempArray.push(key); // alerts key
            // console.log(key); // alerts value
          });
      this.d_columns= tempArray
    }, //created
  } //default
</script>

<style lang= "less" scoped>

  @import (reference) "./../../../Less/customMixins.less";
  @import (reference) "./../../../Less/customVariables";

  @cellWidth: 196px;
  @lastCellWidth: 128px;
  @firstCellWidth: 64px;

  @backgroundColor: #ccd8e0;

  .vueTable {
    .boxShadow(@one);
    width: fit-content;
    font-size: 16px;
    color: @textColor;

    table {
      display: flex;
      flex-direction: column;
      border-radius: @borderRadius;
      background-color: @backgroundColor;

      thead {
        background-color: @backgroundColor;
        max-height: 96px;

        tr {

          &:first-child {
            width: 100% !important;

            &.searchRow {

              & > th {
                margin: 8px 16px 0 16px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;

                & > div {
                  border: none;
                  display: flex;
                  flex-direction: row;
                  margin: auto 0;

                  &:last-child {
                                         &#search {
                      display: flex;
                      flex-direction: row;

                      span {
                                                 &.fas {
                          position: relative;
                          left: 0px;
                          right: -24px;
                          color: @primaryColor;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          &:last-child {

            & > th {
              padding-left: 16px;
              text-align: left;
              width: @cellWidth;
              color: @textColor;
              cursor: pointer;

              &:last-child {
                width: @lastCellWidth;
                cursor: default;

                & > .editColumns {
                  float: right;
                  font-size:10px;
                  position: relative;
                  cursor: pointer;

                  &:hover {
                    color: @primaryColor;
                  }

                  & > ul {
                    padding-left: 0px;
                    right: 0px;
                    list-style-type: none;
                    height: 0px;
                    overflow: hidden;
                    position: absolute;
                    background-color: @backgroundColor;
                    .boxShadow(-2px 4px 16px rgba(0, 0, 0, .33));

                    &.open {
                      height: auto;
                      width: max-content;

                      & > li {
                        display: flex;
                        flex-direction: row;
                        padding: 8px 4px;
                        border-bottom: 1px solid #CCC;

                        &:first-child {
                          border-bottom: 0px solid transparent;
                          margin: 8px 16px 0px 16px;
                          padding-bottom: 0px;
                        }


                        & > label {
                          font-size: @fontSizeSm;
                          color: @textColor;

                          & > input[type= checkbox] {
                            margin-right: 4px;
                            transform: scale(1);
                          }
                        }
                      }
                    }
                  }
                }
              }

              &:first-child {
                width: @firstCellWidth;
                position: relative;
                display: flex;
                flex-direction: row;
                                 & > div {
                  display: flex;
                  flex-direction: row;
                  cursor: default;
                  border-radius: 0 4px 4px 0;

                  &.showOptions {
                    position: absolute;
                    background-color: @backgroundColor;
                    border-radius: @borderRadius;
                    z-index: 100;

                    .boxShadow(@one);
                  }

                  & > div {
                    width: max-content;
                    display: flex;
                    flex-direction: row;
                    margin-right: 16px;

                    & > div {
                      margin-top: 4px;
                    }

                    &:first-child {
                      padding-bottom: 4px;
                    }
                  }
                }
              }
                               & > div {
                cursor: pointer;
              }

              & > span {

                & > i.fa-sort {
                  .opacity(0.3);
                }

                & > .asc,
                & > .dsc {
                  color: @primaryColor;
                }
              }

              &.active {

                &.asc {
                  border-bottom: none;
                }

                &.dsc {
                  border-top: none;
                }
              }

              &:first-child {
                padding-right: 4px;
                               div {

                  &.smalltext {
                    font-size: 10px;
                    margin-left: 8px;
                    text-decoration: underline;
                    color: @primaryColor;
                  }
                }

                & > div {
                  font-size: @fontSizeSm;
                  padding: 4px 0;

                  div {
                    ul {
                      display: inline;
                      list-style: none;
                      padding: 0;
                      margin: 0;
                                         div:before {
                        content:null;
                        height:3px;
                        width:0;
                        border:7px solid transparent;
                        border-bottom-color:#1d1d1d;
                        top:-16px;
                        left:14px;
                      }

                      li {
                        div {
                          background:#1d1d1d;
                          color:#fff;
                          padding:8px;
                          border-radius:4px;
                          position:absolute;
                          display:none;
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

      & > tbody {

        .scroll(64vh);

        & > tr {
          background-color: #f9f9f9;

          &.tableBgStriped {
            background-color: white;
          }

          &.selected {
            background-color: @infoBackground;
            font-weight: bold;
          }

          & > td {
            display: flex;
            align-self: center;
            padding-left: 16px;
            vertical-align: middle;
            text-align: left;
            width: @cellWidth;
            // height: 100%;

            &:last-child {
              width: @lastCellWidth;
            }

            &:first-child {
              width: @firstCellWidth;
            }

            & > span {
              color: @primaryColor;

              &.disabled {
                .opacity(0.5);
              }
            }

            /* // &.subTable {
            //   display: flex;
            //   width: 100%;
            //   background-color: #e5e5e5;

            //   .vueTable.inner {
                             //     table {
            //       border: 1px solid @backgroundColor;

            //       thead {
            //         height: 32px;
            //         tr {
            //           background-color: #959595;

            //           th {
            //             &:first-child {
            //               div {
            //                 border: none;
            //               }
            //             }
            //           }
            //         }
            //       }
            //     }
            //   }

            //   div.paging {
            //     display: none;
            //   }
            // } */
          }
        }
      }
    }
  }

  tr {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    // height: 48px;
         & > td,
    & > th {
      height: inherit;
      border-left: 1px solid #ddd;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    & > th {
      padding-bottom: 0;
    }


  }


  input[type= 'checkbox'] {
    transform: scale(1.2);
    margin-left: 8px;
  }

  div.paging {
    display: flex;
    width: 100%;
    background-color: @backgroundColor;
    justify-content: space-between;
    margin-right: 32px;
    height: 48px;

    & > div {
      display: flex;
      flex-direction: row;
      margin: auto 0px;
      font-size: @fontSizeMd;
      color: @textColor;

      &:first-child {
        font-weight: normal;
        margin-left: 4px;
        justify-content: flex-start;
      }

      &:last-child {
        margin-right: 16px;
        justify-content: flex-end;

        & > div {
          margin-right: 16px;
          font-weight: bold;
          margin: auto 16px;

          &:first-child {
            font-weight: normal;
          }

          &:last-child {
            margin-right: 0;
          }
        }

        & span {
          color: @primaryColor;
          font-size: 20px;
        }
      }
    }
  }
</style>