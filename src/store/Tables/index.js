import Vue from 'vue'
import Vuex from 'vuex'
import { tags } from './tags'

Vue.use(Vuex)

export const store = new Vuex.Store({
    // state: {
    //     tagsData: tags,
    //     data: null,
    //     pagination: null,
    //     columns: [],
    //     url: null,

    //     metadata: {
    //         sortKey: null ,
    //         sortOrders: null,
    //         selected: [],
    //         totalRecords: null,
    //         recordsPerPage: [20 , 36, 48, 60, 100],
    //         pageNumber: 1,
    //         pageCount: 1,
    //         start: null,
    //         end: null,
    //         rowElements: 20,
    //         searchKey: null,
    //         groupBy: null,
    //     },        
    // },
      
    mutations: {

        setURL: function (state, newValue) {
            state.tableURL = newValue
            // console.log('setTableURL set: ', state.tableURL)
            // console.log('\n')
        }, //setTableURL

        setPage: function (state, newValue) {

            // console.log('setPage(): ', newValue[1], state.metadata.pageCount)
            if (state.metadata.pageCount<= newValue[1] || newValue[1]>= 1 ) {
                state.metadata.pageNumber= newValue[1];
                
                // context.dispatch('initData', context);
                newValue[0].commit('initializeData', newValue[0])
            }
        }, //setPage

        setTableData: function (state, newValue) {
            // console.log('setTableData set: ', newValue)
            state.data = newValue
            // console.log('setTableData set: ', state.data)
            // console.log('\n')
        }, //setTableData

        setRowElements: function (state, newValue) {
            // console.log('setRowElements()');
            state.metadata.rowElements = newValue[1];
            state.metadata.rowElements = newValue[1];
            newValue[0].commit('initializeData', newValue[0]);
            // console.log('setRowElements set: ', state.metadata.rowElements);
            // console.log('\n');
        }, //setRowElements
        
        setSearchKey: function (state, newValue) {
            // console.log('setSearchKey()')
            state.metadata.searchKey= newValue[1]
            
            newValue[0].commit('initializeData', newValue[0])
            // newValue[0].dispatch('initData', newValue[0]);
            // console.log('setSearchKey set: ', state.metadata.searchKey)
            // console.log('\n')
        }, //setSearchKey

        setSortKey: function (state, newValue) {
            // console.log('setSortKey()')
            var key= newValue[1]
            state.metadata.sortKey= key
            state.metadata.sortOrders[key]*= -1
            // console.log(state.metadata.sortOrders[key], key)
            // console.log(state.metadata.sortOrders)
            newValue[0].commit('initializeData', newValue[0]);
            // console.log('setSortKey set: ', state.metadata.sortKey)
            // console.log('\n')
        }, //setSortKey
        
        pagination: function (state, data) {
            // console.log('pagination()', data.length, state.metadata.pageNumber,(state.metadata.pageNumber-1) * state.metadata.rowElements, (state.metadata.pageNumber,(state.metadata.pageNumber-1) * state.metadata.rowElements) + state.metadata.rowElements )
            var start = (state.metadata.pageNumber-1) * state.metadata.rowElements;
            var end = start + state.metadata.rowElements;
            
            if (data.length< end) {
                state.metadata.pageNumber=state.metadata.pageCount
                // console.log()
                start = (state.metadata.pageNumber-1) * state.metadata.rowElements;
                end = start + state.metadata.rowElements;
            }
            if (data.length> start && data.length< end) {
                end= data.length
            }

            if (end< start) {
                end= state.metadata.totalRecords
                start= end- state.metadata.rowElements
                if (start< 0) {
                    start= 0
                }
            }

            state.metadata.start= start
            state.metadata.end= end
            var tempPaginatedData= data.slice(start, end);
            state.pagination= tempPaginatedData
            // console.log(data, state.pagination)
            // console.log('pagination()', tempPaginatedData, state.pagination)
            // console.log('\n')
        }, //paginationData
        
        filterData: function (state, data) {
            // console.log('filterData()', 'data: ', state.data)
            var tempdata= state.data
            state.pagination= tempdata
            var sortKey = state.metadata.sortKey
            // console.log('filterData()', state.metadata.sortOrders, sortKey)
            var searchKey = state.metadata.searchKey && state.metadata.searchKey.toLowerCase()
            var order = state.metadata.sortOrders[sortKey] || 1
            var filterData = []
            filterData= data
            // console.log('searchKey true', sortKey)

            if (searchKey) {
                // console.log('searchKey true', sortKey)
                filterData =  filterData.filter(function (row) {
                                    return Object.keys(row).some(function (key) {
                                                return String(row[key]).toLowerCase().indexOf(searchKey) > -1
                                    })
                                })
            }
            if (sortKey) {
                // console.log('testttt: ', state.metadata.sortKey, state.metadata.sortOrders, state.metadata.selectRow)
                // console.log('sortKey true')
                filterData = filterData.slice().sort(function (a, b) {
                                    a = a[sortKey]
                                    b = b[sortKey]
                                    // console.log('a: ', a, 'b: ', b, 'sortKey: ', (a === b ? 0 : a > b ? 1 : -1) * order)
                                    return (a === b ? 0 : a > b ? 1 : -1) * order
                                })
            }
            state.metadata.totalRecords= filterData.length
            state.data= filterData 
            // console.log(state.metadata.totalRecords, filterData.length, data)
            // console.log('\n')
        }, //filterData

        pageCount: function (state, data) {
            // console.log('pageCount', data)
            var tempPageCount= Math.ceil(data/state.metadata.rowElements);
            state.metadata.pageCount= tempPageCount;
            // console.log('pageCount set: ', state.metadata.pageCount)
            // console.log('\n')
        }, //pageCount  

        initializeData:  function (state, context) {
            // console.log('initializeData()')
            var xmlhttp = new XMLHttpRequest();
            //var url = "https://api.myjson.com/bins/qcjt6";
            // var url = "https://api.myjson.com/bins/9g30e";
            //var employee= 'https://api.myjson.com/bins/ci3nq'
            //vae emp1= 'https://api.myjson.com/bins/jj0ok'

            xmlhttp.onreadystatechange = function () {
                // console.log('XMLHTTPREQUEST: ', xmlhttp.readyState ,xmlhttp.status )
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var tempObject= new Object();
                    tempObject = JSON.parse(xmlhttp.responseText);
                    processData(tempObject)
                }
            }

            xmlhttp.open("GET", state.tableURL, true);
            xmlhttp.send();

            function processData (dataObject) {
                // console.log('processData()')
                // console.log('processData() ', cols, data)
                store.commit('setTableData', dataObject);

                //returns keys(column names) from a key value pair
                Object.keys(dataObject[0])
                .forEach(function eachKey(key) { 
                    state.columns.push(key); // alerts key 
                    // alert(foo[key]); // alerts value
                });               

                if (!state.metadata.sortOrders) {
                    sortOrdersInitialization(state.columns);
                }
                
                context.dispatch('pageCount', context);
                
                context.dispatch('setFilteredData', context);
                // context.dispatch('setStatusFilters', context);
                // console.log(state.pagination.data, state.metadata.pageNumber)
                context.dispatch('setPagination', context);
                // console.log(state.pagination.data, state.metadata.pageNumber)
                // console.log('\n')
            } //processData
            

            function sortOrdersInitialization (tempObjectCols) {
                // console.log('sortOrdersInitialization()')
                var tempSortOrders= [];

                tempObjectCols.forEach(function (key) {
                    tempSortOrders[key] = 1
                    // console.log(key, tempSortOrders[key])
                })
                state.metadata.sortOrders= tempSortOrders;
                // console.log(state.metadata.sortOrders)
                // console.log('\n')
            } //sortOrdersInitialization 
        },
    },

    actions: {
        
        async initData (context, link) {
            // console.log('initDataAction: ', link)
            store.commit('setTableURL', link)
            context.commit('initializeData', context)
            // console.log('\n')
        }, //initData

        async pageCount (context) {
            var data= context.getters.getSpecialTableData
            // console.log('setPageCountAction: ', data.length)
            context.commit('pageCount', data.length)
            // console.log('\n')
        }, //getPageCount

        async setPagination ( context,) {
            var data= context.getters.getSpecialTableData
            // console.log('setPaginationAction: ', data.length)
            context.commit('pagination', data)
            // console.log('\n')
        }, //setPagination

        async setFilteredData (context) {
            var data= context.getters.getSpecialTableData
            // console.log('setFilteredDataAction: ', data.length)
            context.commit('filterData', data)
            // console.log('\n')
        }, //setFilteredData

        async setSortKey (context, newValue) {
            // console.log('setSortKeyAction: ', newValue)
            context.commit('setSortKey', [context, newValue])
            // console.log('\n')
        }, //setSortKey

        async setSearchKeyValue (context, newValue) {
            // console.log('setSearchKeyValueAction: ', newValue)
            context.commit('setSearchKey', [context, newValue])
            // console.log('\n')
        }, //setSearchKeyValue

        async setRowElements (context, newValue) {
            // console.log('setRowElementsAction: ', newValue)
            context.commit('setRowElements', [context, newValue])
            // console.log('\n')
        }, //setRowElements
        
        async setPage (context, newValue) {
            // console.log('setPageAction: ', newValue)
            context.commit('setPage', [context, newValue])
            // console.log('\n')
        }, //setPage
        
        async selectRow (context, newValue) {
            // console.log('setSelectedRowAction: ',newValue)
            context.commit('setSelectedRow',  [context, newValue])
            // console.log('\n')
        }, //gotoPrevPage
    },
    
    getters: {

        getTags: function (state) {
            return tags;
        }, //getData
    }
})