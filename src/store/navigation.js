var data= [
    {
        id: 1,
        name:'Design',
        component: 'design',
        icon: "far fa-object-group",
        subNav: [
            {
                id: 1, 
                name:'Colors',
                component: 'colors',
                icon: "fas fa-palette"
            },
            {
                id: 2, 
                name:'Typography',
                component: 'typography',
                icon: "fas fa-font"
            },
            {
                id: 3, 
                name:'Icons',
                component: 'icons',
                icon: "fab fa-fonticons"
            },
            {
                id: 4, 
                name:'Interaction States',
                component: 'interactionStates',
                icon: "fas fa-hand-point-up"
            },
            {
                id: 5, 
                name:'Spacing',
                component: 'spacing',
                icon: "fas fa-expand"
            },
            {
                id: 6,
                name:'Sounds',
                component: 'sound',
                icon: "fas fa-volume-up"
            },
        ]
    },
    {
        id: 2,
        name:'Content',
        component: 'content',
        icon: "fas fa-file-signature",
        subNav: [
            {
                id: 1, 
                name:'Product Content',
                icon: "fas fa-pen"
            },
            {
                id: 2, 
                name:'Help Documentation',
                icon: "fas fa-question-circle"
            },
            {
                id: 3, 
                name:'Voice And Tone',
                icon: "fas fa-comment-dots"
            },
            {
                id: 4, 
                name:'Naming',
                icon: "fas fa-file-signature"
            },
            {
                id: 5, 
                name:'Vocabulary',
                icon: "fas fa-book"
            },
            {
                id: 6, 
                name:'Actionalble Language',
                icon: "fas fa-language"
            },
            {
                id: 7, 
                name:'Grammer and Mechanics',
                icon: "fas fa-check-double"
            },
            {
                id: 8, 
                name:'Alternative name',
                icon: "fas fa-low-vision"
            },
        ]
    },
    {
        id: 3, 
        name: 'Components',
        component: 'formElements',
        icon: "fab fa-creative-commons-share",
        subNav: [
            {
                id: 1, 
                name:'Form Elements',
                component: 'formElements',
                icon: "fas fa-align-left",
                subNav: [
                    {
                        id: 1,
                        name: 'Form',
                        component: 'navForm',
                        icon: "fab fa-wpforms",
                    },
                    {
                        id: 2,
                        name: 'name Input',
                        component: 'navname',
                        icon: "fas fa-name-width",
                    },
                    {
                        id: 3,
                        name: 'Password Input',
                        component: 'navPassword',
                        icon: "fas fa-key",
                    },
                    {
                        id: 4,
                        name: 'Email Input',
                        component: 'navEmail',
                        icon: "fas fa-at",
                    },
                    {
                        id: 5,
                        name: 'Number Input',
                        component: 'navNumber',
                        icon: "fas fa-hashtag",
                    },
                    {
                        id: 6,
                        name: 'Info Field',
                        component: 'navInfo',
                        icon: "fas fa-at",
                    },
                    {
                        id: 7,
                        name: 'Toggle Input',
                        component: 'navToggle',
                        icon: "fas fa-toggle-on",
                    },
                    {
                        id: 8,
                        name: 'DropDown List',
                        component: 'navDropdownList',
                        icon: "fas fa-caret-square-down",
                    },
                    {
                        id: 9,
                        name: 'Dropdown w-Search',
                        component: 'navSearchableDropdownList',
                        icon: "fas fa-search-plus",
                    },
                    {
                        id: 10,
                        name: 'File Upload',
                        component: 'navFile',
                        icon: "fas fa-upload",
                    },
                    {
                        id: 11,
                        name: 'Checkbox Input',
                        component: 'navCheckbox',
                        icon: "fas fa-check-square",
                    },
                    {
                        id: 12,
                        name: 'Radiobox Input',
                        component: 'navRadio',
                        icon: '<span class= "fa-stack"  style= "font-size: 8px;">\
                                    <i class= "fas fa-circle fa-stack-2x"></i>\
                                    <i class= "fas fa-circle fa-stack-1x"></i>\
                                </span>'
                    },
                    {
                        id: 13,
                        name: 'Date Input',
                        component: 'navDate',
                        icon: "fas fa-calendar-alt",
                    },
                    {
                        id: 14,
                        name: 'namearea Input',
                        component: 'navnamearea',
                        icon: "fas fa-name-height",
                    }
                ]
            },
            {
                id: 2, 
                name:'UI Components',
                name: 'ui components',
                icon: "fas fa-drafting-compass",
                subNav: [
                    {
                        id: 1,
                        name: 'Buttons',
                        component: 'navButton',
                        icon: "fas fa-hand-point-up",
                    },
                    {
                        id: 2,
                        name: 'Cards',
                        component: 'navCard',
                        icon: "fas fa-id-card",
                    },
                    {
                        id: 3,
                        name: 'Table',
                        component: 'navTable',
                        icon: "fas fa-table",
                    },
                    {
                        id: 4,
                        name: 'Master Detail',
                        component: 'navMasterDetail',
                        icon: "fas fa-code-branch fa-rotate-180 fa-flip-vertical",
                    },
                    {
                        id: 5,
                        name: 'Navigation',
                        component: 'navNavigation',
                        icon: "fas fa-ellipsis-v",
                    },
                    {
                        id: 6,
                        name: 'Modal',
                        component: 'navModal',
                        icon: "fas fa-window-maximize",
                    },
                    {
                        id: 7,
                        name: 'Step Wizard',
                        component: 'navWizard',
                        icon: "fas fa-shoe-prints",
                    }                            
                ]
            },
            // {
            //     id: 4, 
            //     name:'Grid',
                    // component: grid,
            //     icon: "fas fa-th"
            // },
            {
                id: 5,
                name:'layout',
                component: 'layout',
                icon: "fas fa-align-justify",
                subNav: [
                    {
                        id: 1,
                        name: 'Enterprise App',
                        component: 'navEnterpriseAppLayout',
                        icon: "fas fa-vector-square",
                    },
                    {
                        id: 2,
                        name: 'Side by Side',
                        component: 'navSideBySideLayout',
                        icon: '<span class= "fa-stack">\
                                    <i class= "fas fa-square fa-stack-1x"></i>\
                                    <i class= "fas fa-square fa-stack-1x" style= "margin-left: 10px;"></i>\
                                </span>',
                    },
                    {
                        id: 3,
                        name: 'Content Sub Navigation',
                        component: 'nav',
                        icon: "fas fa-vector-square",
                    },
                    {
                        id: 4,
                        name: 'Golden Ratio',
                        component: 'navGoldenRatioLayout',
                        icon: "fas fa-shapes",
                    },
                ]
            },
            {
                id: 6, 
                name:'Alerts',
                component: 'navAlert',
                icon: "fas fa-bell",
                subNav: [
                    {
                        id: 11.01,
                        name: 'Proactive Alert',
                        component: 'navAlertProactive',
                        icon: "fas fa-exclamation",
                    },
                    {
                        id: 11.02,
                        name: 'Reactive Alert',
                        component: 'navAlertReactive',
                        icon: "fas fa-exclamation-circle",
                    },
                ]
            },
        ]   
    },
    {
        id: 4, 
        name: 'Others',
        icon: "fas fa-atom",
        subNav: [
            {
                id: 1, 
                name:'Sample Pages',
                component: 'createMove',
                icon: "fas fa-vial",
                subNav: [
                    {
                        id: 1,
                        name: 'Error Page',
                        component: 'navSystemError',
                        icon: "fas fa-bug",
                    },
                    {
                        id: 2,
                        name: 'Reassign Assignment',
                        component: 'navReassign',
                        icon: "fas fa-bezier-curve",
                    },
                    {
                        id: 3,
                        name: 'Dispatch Monitor',
                        component: 'dispatchMonitor',
                        icon: "fas fa-bezier-curve",
                    },
                ]
            },
            {
                id: 2, 
                name:'Coding Guidlines',
                component: 'navBestPractices',
                icon: "fas fa-code",
                subNav: [
                    {
                        id: 1,
                        name: 'Agile',
                        component: 'navAgileBestPractices',
                        icon: "fas fa-bezier-curve",
                    },
                    {
                        id: 2,
                        name: 'Vue',
                        component: 'navVueBestPractices',
                        icon: "fas fa-bezier-curve",
                    },
                    {
                        id: 3,
                        name: 'c-Sharp',
                        component: 'navCSharpBestPractices',
                        icon: "fas fa-bezier-curve",
                    },
                ]
            }
        ]
    },
];

export {data as nav};