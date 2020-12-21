import Vue from 'vue'
import Router from 'vue-router'
import app from '@/App'

import index from '@/Views/index.vue'

import design from '@/Views/Design/'
import colors from '@/Views/Design/Colors'
import typography from '@/Views/Design/Typography'
import icons from '@/Views/Design/Icons'
import interactionStates from '@/Views/Design/Interaction States'
import spacing from '@/Views/Design/Spacing'
import sound from '@/Views/Design/Sounds'

import content from '@/Views/Content/'
import productContent from '@/Views/Content/ProductContent'

import voiceAndTone from '@/Views/Content/VoiceAndTone'

import naming from '@/Views/Content/Naming'

import vocabulary from '@/Views/Content/Vocabulary'

import actionableLanguage from '@/Views/Content/ActionableLanguage'

import grammerAndMechanics from '@/Views/Content/GrammerAndMechanics'

import alternativeText from '@/Views/Content/AlternativeText'

import helpDocumentation from '@/Views/Content/HelpDocumentation'

import uiComponents from '@/Views/UIComponents'
import navButton from '@/Views/navButton'
import navCard from '@/Views/navCard'
import navMasterDetail from '@/Views/navMasterDetail'
import navModal from '@/Views/navModal'
import navWizard from '@/Views/navWizard'
import navTable from '@/Views/navTable'
import navNavigation from '@/Views/navNavigation'

import FormElements from '@/Views/FormElements'
import navForm from '@/Views/components/navForm'
import navText from '@/Views/components/navText'
import navCheckbox from '@/Views/components/navCheckbox'
import navDropdownList from '@/Views/components/navDropdownList'
import navSearchableDropdownList from '@/Views/components/navSearchableDropdownList'
import navEmail from '@/Views/components/navEmail'
import navFile from '@/Views/components/navFile'
import navToggle from '@/Views/components/navToggle'
import navNumber from '@/Views/components/navNumber'
import navPassword from '@/Views/components/navPassword'
import navRadio from '@/Views/components/navRadio'
import navDate from '@/Views/components/navDate'
import navInfo from '@/Views/components/navInfo'
import navTextarea from '@/Views/components/navTextarea'

import grid from '@/Views/Grid'

import layout from '@/Views/Layouts'

import navAlert from '@/Views/navAlert'
import navAlertProactive from '@/Views/navAlertProactive'
import navAlertReactive from '@/Views/navAlertReactive'

import navReassign from '@/Views/SamplePages/navReassign'
import createMove from '@/Views/SamplePages/createMove'
import navSystemError from '@/Views/SamplePages/navSystemError'
import dispatchMonitor from '@/Views/SamplePages/dispatchMonitor'

import navBestPractices from '@/Views/navBestPractices'
import navVueBestPractices from '@/Views/navVueBestPractices'
import navAgileBestPractices from '@/Views/navAgileBestPractices'
import navCSharpBestPractices from '@/Views/navCSharpBestPractices'




Vue.use(Router)

export default new Router({
    mode: 'history',

    history: true,

    saveScrollPosition: true,
    
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
          } else {
            return { x: 0, y: 0 }
          }
    },

    routes: [
        {
            name: 'app',
            path: '/',
            component: index,
        },
        {
            path: '/Design',
            children: [
                {
                    path: '',
                    name: 'design',
                    component: design,
                },
                {
                    path: 'Colors',
                    name: 'colors',
                    component: colors
                },
                {
                    path: 'Icons',
                    name: 'icons',
                    component: icons
                },
                {
                    path: 'InteractionStates',
                    name: 'interactionStates',
                    component: interactionStates
                },
                {
                    path: 'Spacing',
                    name: 'spacing',
                    component: spacing
                },
                {
                    path: 'Sounds',
                    name: 'sound',
                    component: sound
                },
                {
                    path: 'Typography',
                    name: 'typography',
                    component: typography
                }
            ]
        },
        
        {
            path: '/Content',
            children: [
                {
                    path: '',
                    name: 'content',
                    component: content,
                },
                {
                    path: 'Help Documentation',
                    name: 'helpDocumentation',
                    component: helpDocumentation
                },
                {
                    path: 'Voice And Tone',
                    name: 'voiceAndTone',
                    component: voiceAndTone
                },
                {
                    path: 'Product Content',
                    name: 'productContent',
                    component: productContent
                },
                
                {
                    path: 'Naming',
                    name: 'naming',
                    component: naming
                },
                {
                    path: 'Vocabulary',
                    name: 'vocabulary',
                    component: vocabulary
                },
                {
                    path: 'Actionalble Language',
                    name: 'actionableLanguage',
                    component: actionableLanguage
                },
                {
                    path: 'Grammer and Mechanics',
                    name: 'grammerAndMechanics',
                    component: grammerAndMechanics
                },
                {
                    path: 'Alternative Text',
                    name: 'alternativeText',
                    component: alternativeText
                }
            ]
        },
        {
            path: '/Components',
            children: [
                {
                    path: 'UI Components',
                    children: [
                        {
                            path: '',
                            name: 'ui components',
                            component: uiComponents,
                        },
                        {
                            path: 'Buttons',
                            name: 'navButton',
                            component: navButton
                        },
                        {
                            path: 'Cards',
                            name: 'navCard',
                            component: navCard
                        },
                        {
                            path: 'MasterDetail',
                            name: 'navMasterDetail',
                            component: navMasterDetail
                        },
                        {
                            path: 'Modal',
                            name: 'navModal',
                            component: navModal
                        },
                        {
                            path: 'StepWizard/',
                            name: 'navWizard',
                            component: navWizard
                        },
                        {
                            path: 'Table',
                            name: 'navTable',
                            component: navTable
                        },
                        {
                            path: 'Navigation',
                            name: 'navNavigation',
                            component: navNavigation
                        }
                    ]
                },
                {
                    path: 'Form Elements',
                    children: [
                        {
                            path: '',
                            name: 'FormElements',
                            component: FormElements,
                        },
                        {
                            path: '/components/Form Elements/Form',
                            name: 'navForm',
                            component: navForm
                        },
                        {
                            path: '/components/Form Elements/Text Input',
                            name: 'navText',
                            component: navText
                        },
                        {
                            path: '/components/Form Elements/Password Input',
                            name: 'navPassword',
                            component: navPassword
                        },
                        {
                            path: '/components/Form Elements/Email Input',
                            name: 'navEmail',
                            component: navEmail
                        },
                        {
                            path: '/components/Form Elements/Number Input',
                            name: 'navNumber',
                            component: navNumber
                        },
                        {
                            path: '/components/Form Elements/Info Field',
                            name: 'navInfo',
                            component: navInfo
                        },
                        {
                            path: '/components/Form Elements/Toggle Input',
                            name: 'navToggle',
                            component: navToggle
                        },
                        {
                            path: '/components/Form Elements/DropDown List',
                            name: 'navDropdownList',
                            component: navDropdownList
                        },
                        {
                            path: '/components/Form Elements/Dropdown w-Search',
                            name: 'navSearchableDropdownList',
                            component: navSearchableDropdownList
                        },
                        {
                            path: '/components/Form Elements/File Upload',
                            name: 'navFile',
                            component: navFile
                        },
                        {
                            path: '/components/Form Elements/Checkbox Input',
                            name: 'navCheckbox',
                            component: navCheckbox
                        },
                        {
                            path: '/components/Form Elements/Radiobox Input',
                            name: 'navRadio',
                            component: navRadio
                        },
                        {
                            path: '/components/Form Elements/Date Input',
                            name: 'navDate',
                            component: navDate
                        },
                        {
                            path: '/components/Form Elements/Textarea Input',
                            name: 'navTextarea',
                            component: navTextarea
                        }
                    ]
                },
                {
                    path: 'Grid',
                    name: 'grid',
                    component: grid
                },
                {
                    path: 'Layout',
                    name: 'layout',
                    component: layout
                },
                {
                    path: 'Alerts',
                    children: [
                        {
                            path: '',
                            name: 'navAlert',
                            component: navAlert,
                        },
                        {
                            path: 'navAlertProactive',
                            name: 'navAlertProactive',
                            component: navAlertProactive
                        },
                        {
                            path: 'navAlertReactive',
                            name: 'navAlertReactive',
                            component: navAlertReactive
                        }
                    ]
                },
            ]
        },
        {
            path: '/Sample Pages',
            children: [
                {
                    path: '',
                    name: 'createMove',
                    component: createMove,
                },
                {
                    path: 'navSystemError',
                    name: 'navSystemError',
                    component: navSystemError
                },
                {
                    path: 'navReassign',
                    name: 'navReassign',
                    component: navReassign
                },  
                {
                    path: 'dispatchMonitor',
                    name: 'dispatchMonitor',
                    component: dispatchMonitor
                }
            ]
        },
        {
            path: '/Coding Guidlines',
            children: [
                {
                    path: '',
                    name: 'navBestPractices',
                    component: navBestPractices,
                },
                {
                    path: 'navVueBestPractices',
                    name: 'navVueBestPractices',
                    component: navVueBestPractices
                },
                {
                    path: 'navCSharpBestPractices',
                    name: 'navCSharpBestPractices',
                    component: navCSharpBestPractices
                },
                {
                    path: 'navAgileBestPractices',
                    name: 'navAgileBestPractices',
                    component: navAgileBestPractices
                }
            ]
        },
    ]
})