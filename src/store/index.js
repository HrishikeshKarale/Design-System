import Vue from 'vue'
import Vuex from 'vuex'
import { tags } from './Tables/Tags/tags'
import { colorPalette } from './colorPalette';
import { nav } from './navigation';
import { navText } from './navText';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        tagsData: tags,
        specialTable: null,
        emp: null,
        employees: null,
        paginatedData: null,
        columns: [],
        tableAction: false,
        searchKey: null,
        tableBgStriped: false,
        subtableIndex: 0,
        selectedFilter: 'All Status',
        tabelURL: null,
        employeeURL: null,
        warehouse: [ 
            "Rochester",
            "Harrisburg",
            "Reno",
            "Oklahoma",
            "Buffalo"
        ],

        metadata: {
            sortKey: null ,
            sortOrders: null,
            selected: [],
            totalRecords: null,
            recordsPerPage: [20 , 36, 48, 60, 100],
            pageNumber: 1,
            pageCount: 1,
            start: null,
            end: null,
            rowElements: 36,
            searchKey: null,
            groupBy: null,
        },

        colors: colorPalette,
                
        cardDetails: {
            cols: [
                'Name',
                'Emp no',
                'work Load',
                'availability'
            ],
            data: [
                [
                    "FI-889",
                    "Nyssa Boyd",
                    35,
                    1
                ],
                [
                    "AX-457",
                    "James Johns",
                    26,
                    0
                ],
                [
                    "NR-264",
                    "Bryar Brady",
                    47,
                    0
                ],
                [
                    "RV-486",
                    "Bradley Harrington",
                    54,
                    0
                ],
                [
                    "FQ-585",
                    "Eleanor Wilder",
                    29,
                    0
                ],
                [
                    "DX-499",
                    "Francesca Carson",
                    63,
                    0
                ],
                [
                    "DS-539",
                    "Hanae Bentley",
                    59,
                    1
                ],
                [
                    "WN-218",
                    "Kadeem Santana",
                    31,
                    1
                ],
                [
                    "JT-761",
                    "Amela Oneill",
                    41,
                    0
                ]
            ]
        },

        customerCarts: [
            {
                value: '<i class= "fab fa-accusoft"></i>',
            },
            {
                value: '<i class= "fab fa-adjust"></i>',
            },
            {
                value: '<i class= "fab fa-affiliatetheme"></i>',
            },
            {
                value: '<i class= "fab fa-amazon"></i>'
            }
        ], //customerCarts

        customfooter: [
            {
                value: '<i class= "fab fa-accusoft"></i>',
            },
            {
                value: '<i class= "fab fa-adjust"></i>',
            },
            {
                value: '<i class= "fab fa-affiliatetheme"></i>',
            },
            {
                value: '<i class= "fab fa-amazon"></i>'
            }
        ], //customfooter

        navigation: nav,

        navText: navText,

        category: ['small', 'standard', 'large', 'fullWidth', 'border-sm', 'border', 'border-lg','border-fwidth', 'text-sm', 'text', 'text-lg', 'icon-sm', 'icon', 'icon-lg']
        
    },
      
    mutations: {

        setTableURL: function (state, newValue) {
            state.tableURL = newValue
        }, //setTableURL

        setPage: function (state, newValue) {
            if (state.metadata.pageCount<= newValue[1] || newValue[1]>= 1 ) {
                state.metadata.pageNumber= newValue[1];
                newValue[0].commit('initializeData', newValue[0])
            }
        }, //setPage

        setEmployeeURL: function (state, newValue) {
            state.employeeURL = newValue
        }, //setEmployeeURL

        setEmployees: function (state, newValue) {
            state.employees = newValue
        }, //setEmployees

        setSpecialTable: function (state, newValue) {
            state.specialTable = newValue
        }, //setSpecialTable

        setSelectedRow: function (state, newValue) {
            var selected= state.metadata.selected

            if (selected && selected.length> 0) {
                var index= selected.indexOf(newValue[1])

                //value exists in selected
                if (index!= -1) {
                    //remove value
                    selected.splice(index, 1)
                }
                //value does not exist in selected
                else {
                    selected.push(newValue[1])
                }
            }
            else {
                selected[0]= newValue[1]
                // console.log('empty selected: ', selected)
            }
            state.metadata.selected= selected;
        }, //setSelectedRow

        setSelectedFilters: function (state, newValue) {
            state.metadata.selectedFilter= newValue[1]
            newValue[0].commit('initializeData', newValue[0]);
        }, //setSelectedFilters

        setRowElements: function (state, newValue) {
            state.metadata.rowElements = newValue[1];
            state.metadata.rowElements = newValue[1];
            newValue[0].commit('initializeData', newValue[0]);
        }, //setRowElements
        
        setSearchKey: function (state, newValue) {
            state.metadata.searchKey= newValue[1]
            newValue[0].commit('initializeData', newValue[0])
        }, //setSearchKey

        setSortKey: function (state, newValue) {
            var key= newValue[1]
            state.metadata.sortKey= key
            state.metadata.sortOrders[key]*= -1
            // console.log(state.metadata.sortOrders[key], key)
            newValue[0].commit('initializeData', newValue[0]);
        }, //setSortKey

        paginatedData: function (state, data) {
            var start = (state.metadata.pageNumber-1) * state.metadata.rowElements;
            var end = start + state.metadata.rowElements;
            
            if (data.length< end) {
                state.metadata.pageNumber=state.metadata.pageCount
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
            state.paginatedData= tempPaginatedData
        }, //paginationData
        
        filteredData: function (state, data) {
            var tempdata= state.specialTable
            state.paginatedData= tempdata
            var sortKey = state.metadata.sortKey
            var searchKey = state.metadata.searchKey && state.metadata.searchKey.toLowerCase()
            var order = state.metadata.sortOrders[sortKey] || 1
            var filtereddata = []
            filtereddata= data

            if (searchKey) {
                // console.log('searchKey true', searchKey)
                filtereddata =  filtereddata.filter(function (row) {
                                    return Object.keys(row).some(function (key) {
                                                return String(row[key]).toLowerCase().indexOf(searchKey) > -1
                                    })
                                })
            }
            if (sortKey) {
                // console.log('testttt: ', state.metadata.sortKey, state.metadata.sortOrders, state.metadata.selectRow)
                filtereddata = filtereddata.slice().sort(function (a, b) {
                                    a = a[sortKey]
                                    b = b[sortKey]
                                    return (a === b ? 0 : a > b ? 1 : -1) * order
                                })
            }
            state.metadata.totalRecords= filtereddata.length
            state.specialTable= filtereddata 
        }, //filteredData

        setPageCount: function (state, data) {
            var tempPageCount= Math.ceil(data/state.metadata.rowElements);
            state.metadata.pageCount= tempPageCount;
        }, //setPageCount  

        initializeData:  function (state, context) {
            // console.log('initializeData()')
            var xmlhttp = new XMLHttpRequest();
            //var url = "https://api.myjson.com/bins/qcjt6";
            // var url = "https://api.myjson.com/bins/9g30e";
            //var employee= 'https://api.myjson.com/bins/ci3nq'
            //vae emp1= 'https://api.myjson.com/bins/jj0ok'

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var tempObject= new Object();
                    tempObject = JSON.parse(xmlhttp.responseText);
                    initDataset(tempObject)
                }
            }

            xmlhttp.open("GET", state.tableURL, true);
            xmlhttp.send();

            function initDataset (dataObject) {
                store.commit('setSpecialTable', dataObject);
                Object.keys(dataObject[0])
                .forEach(function eachKey(key) { 
                    state.columns.push(key); // alerts key 
                });               

                if (!state.metadata.sortOrders) {
                    sortOrdersInitialization(state.columns);
                }
                
                context.dispatch('setPageCount', context);
                
                context.dispatch('setFilteredData', context);
                context.dispatch('setPagination', context);
            } //initDataset
            

            function sortOrdersInitialization (tempObjectCols) {
                var tempSortOrders= [];

                tempObjectCols.forEach(function (key) {
                    tempSortOrders[key] = 1
                })
                state.metadata.sortOrders= tempSortOrders;
            } //sortOrdersInitialization 
        },

        setData:  function (state, xmlhttp) {

            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var tempObject= new Object();
                    tempObject= JSON.parse(xmlhttp.responseText);
                    store.commit('setEmployees', tempObject)
                }
            }
            xmlhttp.open("GET", state.employeeURL, true);
            xmlhttp.send();
        }, //setData
    },

    actions: {
        
        async initData (context, link) {
            store.commit('setTableURL', link)
            context.commit('initializeData', context)
            // console.log('\n')
        }, //initData
        
        async setData (context, link) {
            var xmlhttp = new XMLHttpRequest();
            store.commit('setEmployeeURL', link)
            context.commit('setData', xmlhttp)
        }, //initData

        async setSelectedFilter (context, newValue) {
            context.commit('setSelectedFilters', [context, newValue])
        }, //setSelectedFilter

        async setPageCount (context) {
            var data= context.getters.getSpecialTableData
            context.commit('setPageCount', data.length)
        }, //getPageCount

        async setPagination ( context,) {
            var data= context.getters.getSpecialTableData
            context.commit('paginatedData', data)
        }, //setPagination

        async setFilteredData (context) {
            var data= context.getters.getSpecialTableData
            context.commit('filteredData', data)
        }, //setFilteredData

        async setSortKey (context, newValue) {
            context.commit('setSortKey', [context, newValue])
        }, //setSortKey

        async setSearchKeyValue (context, newValue) {
            context.commit('setSearchKey', [context, newValue])
        }, //setSearchKeyValue

        async setRowElements (context, newValue) {
            context.commit('setRowElements', [context, newValue])
        }, //setRowElements
        
        async setPage (context, newValue) {
            context.commit('setPage', [context, newValue])
        }, //setPage
        
        async selectRow (context, newValue) {
            context.commit('setSelectedRow',  [context, newValue])
        }, //gotoPrevPage
    },
    
    getters: {

        getTags: function (state) {
            return tags;
        }, //getData

        getSpecialTableData: function (state) {
            return state.specialTable;
        }, //getSpecialTableData
    }
})