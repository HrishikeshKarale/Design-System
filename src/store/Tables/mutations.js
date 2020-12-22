const setTableURL= function (state, newValue) {
    state.tableURL = newValue
}, //setTableURL

const setPage= function (state, newValue) {
    if (state.metadata.pageCount<= newValue[1] || newValue[1]>= 1 ) {
        state.metadata.pageNumber= newValue[1];
        newValue[0].commit('initializeData', newValue[0])
    }
}, //setPage

const setEmployeeURL= function (state, newValue) {
    state.employeeURL = newValue
}, //setEmployeeURL

const setEmployees= function (state, newValue) {
    state.employees = newValue
}, //setEmployees

const setSpecialTable= function (state, newValue) {
    state.specialTable = newValue
}, //setSpecialTable

const setSelectedRow= function (state, newValue) {
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

const setSelectedFilters= function (state, newValue) {
    state.metadata.selectedFilter= newValue[1]
    newValue[0].commit('initializeData', newValue[0]);
}, //setSelectedFilters

const setRowElements= function (state, newValue) {
    state.metadata.rowElements = newValue[1];
    state.metadata.rowElements = newValue[1];
    newValue[0].commit('initializeData', newValue[0]);
}, //setRowElements

const setSearchKey= function (state, newValue) {
    state.metadata.searchKey= newValue[1]
    newValue[0].commit('initializeData', newValue[0])
}, //setSearchKey

const setSortKey= function (state, newValue) {
    var key= newValue[1]
    state.metadata.sortKey= key
    state.metadata.sortOrders[key]*= -1
    // console.log(state.metadata.sortOrders[key], key)
    newValue[0].commit('initializeData', newValue[0]);
}, //setSortKey

const paginatedData= function (state, data) {
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

const filteredData= function (state, data) {
    var tempdata= state.specialTable
    state.paginatedData= tempdata
    var sortKey = state.metadata.sortKey
    var searchKey = state.metadata.searchKey && state.metadata.searchKey.toLowerCase()
    var order = state.metadata.sortOrders[sortKey] || 1
    var filtereddata = []
    filtereddata= data
    // console.log('searchKey true', sortKey)

    if (searchKey) {
        // console.log('searchKey true', sortKey)
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

const setPageCount= function (state, data) {
    var tempPageCount= Math.ceil(data/state.metadata.rowElements);
    state.metadata.pageCount= tempPageCount;
}, //setPageCount  

const initializeData= function (state, context) {
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

const setData=  function (state, xmlhttp) {

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