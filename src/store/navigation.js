var data= [
    {
        id: 1,
        text:'Design',
        subnav: [
            {
                id: 1, 
                text:'Colors',
                component: 'colors',
                icon: '<i class= "fas fa-palette"></i>'
            },
            {
                id: 2, 
                text:'Typography',
                component: 'typography',
                icon: '<i class= "fas fa-font"></i>'
            },
            {
                id: 3, 
                text:'Icons',
                component: 'icons',
                icon: '<i class= "fab fa-fonticons"></i>'
            },
            {
                id: 4, 
                text:'Interaction States',
                component: 'interactionStates',
                icon: '<i class= "fas fa-hand-point-up"></i>'
            },
            {
                id: 5, 
                text:'Spacing',
                component: 'spacing',
                icon: '<i class= "fas fa-expand">'
            },
            {
                id: 6,
                text:'Sounds',
                component: 'sound',
                icon: '<i class= "fas fa-volume-up"></i>'
            },
        ]
    },
    {
        id: 2,
        text:'Content',
        subnav: [
            {
                id: 1, 
                text:'Product Content',
                icon: '<i class= "fas fa-pen"></i>'
            },
            {
                id: 2, 
                text:'Help Documentation',
                icon: '<i class= "fas fa-question-circle"></i>'
            },
            {
                id: 3, 
                text:'Voice And Tone',
                icon: '<i class= "fas fa-comment-dots"></i>'
            },
            {
                id: 4, 
                text:'Naming',
                icon: '<i class= "fas fa-file-signature"></i>'
            },
            {
                id: 5, 
                text:'Vocabulary',
                icon: '<i class= "fas fa-book"></i>'
            },
            {
                id: 6, 
                text:'Actionalble Language',
                icon: '<i class= "fas fa-language"></i>'
            },
            {
                id: 7, 
                text:'Grammer and Mechanics',
                icon: '<i class= "fas fa-check-double"></i>'
            },
            {
                id: 8, 
                text:'Alternative Text',
                icon: '<i class= "fas fa-low-vision"></i>'
            },
        ]
    },
    {
        id: 3, 
        text: 'Components',
        subnav: [
            {
                id: 1, 
                text:'Form Elements',
                icon: '<i class= "fas fa-align-left"></i>',
                subnav: [
                    {
                        id: 1,
                        text: 'Form',
                        component: 'navForm',
                        icon: '<i class= "fab fa-wpforms"></i>',
                    },
                    {
                        id: 2,
                        text: 'Text Input',
                        component: 'navText',
                        icon: '<i class= "fas fa-text-width"></i>',
                    },
                    {
                        id: 3,
                        text: 'Password Input',
                        component: 'navPassword',
                        icon: '<i class= "fas fa-key"></i>',
                    },
                    {
                        id: 4,
                        text: 'Email Input',
                        component: 'navEmail',
                        icon: '<i class= "fas fa-at"></i>',
                    },
                    {
                        id: 5,
                        text: 'Number Input',
                        component: 'navNumber',
                        icon: '<i class= "fas fa-hashtag"></i>',
                    },
                    {
                        id: 6,
                        text: 'Info Field',
                        component: 'navInfo',
                        icon: '<i class= "fas fa-at"></i>',
                    },
                    {
                        id: 7,
                        text: 'Toggle Input',
                        component: 'navToggle',
                        icon: '<i class= "fas fa-toggle-on"></i>',
                    },
                    {
                        id: 8,
                        text: 'DropDown List',
                        component: 'navDropdownList',
                        icon: '<i class= "fas fa-caret-square-down"></i>',
                    },
                    {
                        id: 9,
                        text: 'Dropdown w-Search',
                        component: 'navSearchableDropdownList',
                        icon: '<i class= "fas fa-search-plus"></i>',
                    },
                    {
                        id: 10,
                        text: 'File Upload',
                        component: 'navFile',
                        icon: '<i class= "fas fa-upload"></i>',
                    },
                    {
                        id: 11,
                        text: 'Checkbox Input',
                        component: 'navCheckbox',
                        icon: '<i class= "fas fa-check-square"></i>',
                    },
                    {
                        id: 12,
                        text: 'Radiobox Input',
                        component: 'navRadio',
                        icon: '<span class= "fa-stack"  style= "font-size: 8px;">\
                                    <i class= "fas fa-circle fa-stack-2x"></i>\
                                    <i class= "fas fa-circle fa-stack-1x"></i>\
                                </span>'
                    },
                    {
                        id: 13,
                        text: 'Date Input',
                        component: 'navDate',
                        icon: '<i class= "fas fa-calendar-alt"></i>',
                    },
                    {
                        id: 14,
                        text: 'Textarea Input',
                        component: 'navTextarea',
                        icon: '<i class= "fas fa-text-height"></i>',
                    }
                ]
            },
            {
                id: 2, 
                text:'UI Components',
                icon: '<i class= "fas fa-drafting-compass"></i>',
                subnav: [
                    {
                        id: 1,
                        text: 'Buttons',
                        component: 'navButton',
                        icon: '<i class= "fas fa-hand-point-up"></i>',
                    },
                    {
                        id: 2,
                        text: 'Cards',
                        component: 'navCard',
                        icon: '<i class= "fas fa-id-card"></i>',
                    },
                    {
                        id: 3,
                        text: 'Table',
                        component: 'navTable',
                        icon: '<i class= "fas fa-table"></i>',
                    },
                    {
                        id: 4,
                        text: 'Master Detail',
                        component: 'navMasterDetail',
                        icon: '<i class= "fas fa-code-branch fa-rotate-180 fa-flip-vertical"></i>',
                    },
                    {
                        id: 5,
                        text: 'Navigation',
                        component: 'navNavigation',
                        icon: '<i class= "fas fa-ellipsis-v"></i>',
                    },
                    {
                        id: 6,
                        text: 'Modal',
                        component: 'navModal',
                        icon: '<i class= "fas fa-window-maximize"></i>',
                    },
                    {
                        id: 7,
                        text: 'Step Wizard',
                        component: 'navWizard',
                        icon: '<i class= "fas fa-shoe-prints"></i>',
                    }                            
                ]
            },
            // {
            //     id: 4, 
            //     text:'Grid',
            //     icon: '<i class= "fas fa-th"></i>'
            // },
            {
                id: 5,
                text:'layout',
                icon: '<i class= "fas fa-align-justify"></i>',
                subnav: [
                    {
                        id: 1,
                        text: 'Enterprise App',
                        component: 'navEnterpriseAppLayout',
                        icon: '<i class= "fas fa-vector-square"></i>',
                    },
                    {
                        id: 2,
                        text: 'Side by Side',
                        component: 'navSideBySideLayout',
                        icon: '<span class= "fa-stack">\
                                    <i class= "fas fa-square fa-stack-1x"></i>\
                                    <i class= "fas fa-square fa-stack-1x" style= "margin-left: 10px;"></i>\
                                </span>',
                    },
                    {
                        id: 3,
                        text: 'Content Sub Navigation',
                        component: 'nav',
                        icon: '<i class= "fas fa-vector-square"></i>',
                    },
                    {
                        id: 4,
                        text: 'Golden Ratio',
                        component: 'navGoldenRatioLayout',
                        icon: '<i class= "fas fa-shapes"></i>',
                    },
                ]
            },
            {
                id: 6, 
                text:'Alerts',
                icon: '<i class= "fas fa-bell"></i>',
                subnav: [
                    {
                        id: 11.01,
                        text: 'Proactive Alert',
                        component: 'navAlertProactive',
                        icon: '<i class= "fas fa-exclamation"></i>',
                    },
                    {
                        id: 11.02,
                        text: 'Reactive Alert',
                        component: 'navAlertReactive',
                        icon: '<i class= "fas fa-exclamation-circle"></i>',
                    },
                ]
            },
        ]   
    },
    {
        id: 4, 
        text: 'Others',
        subnav: [
            {
                id: 1, 
                text:'Sample Pages',
                icon: '<i class= "fas fa-vial"></i>',
                subnav: [
                    {
                        id: 1,
                        text: 'Error Page',
                        component: 'navSystemError',
                        icon: '<i class= "fas fa-bug"></i>',
                    },
                    {
                        id: 2,
                        text: 'Reassign Assignment',
                        component: 'navReassign',
                        icon: '<i class= "fas fa-bezier-curve"></i>',
                    },
                    {
                        id: 3,
                        text: 'Dispatch Monitor',
                        component: 'dispatchMonitor',
                        icon: '<i class= "fas fa-bezier-curve"></i>',
                    },
                ]
            },
            {
                id: 2, 
                text:'Coding Guidlines',
                icon: '<i class= "fas fa-code"></i>',
                subnav: [
                    {
                        id: 1,
                        text: 'Agile',
                        component: 'navAgileBestPractices',
                        icon: '<i class= "fas fa-bezier-curve"></i>',
                    },
                    {
                        id: 2,
                        text: 'Vue',
                        component: 'navVueBestPractices',
                        icon: '<i class= "fas fa-bezier-curve"></i>',
                    },
                    {
                        id: 3,
                        text: 'c-Sharp',
                        component: 'navCSharpBestPractices',
                        icon: '<i class= "fas fa-bezier-curve"></i>',
                    },
                ]
            }
        ]
    },
];

export {data as nav};