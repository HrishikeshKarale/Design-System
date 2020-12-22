const state= {
        tagsData: tags,
        data: null,
        pagination: null,
        columns: [],
        url: null,

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
            rowElements: 20,
            searchKey: null,
        },           };

    export {state as orderState}