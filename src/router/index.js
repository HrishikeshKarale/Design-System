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
            name: 'design',
            component: design,
        },
        {
            path: '/Design/Colors',
            name: 'colors',
            component: colors
        },

        {
            path: '/Design/Icons',
            name: 'icons',
            component: icons
        },

        {
            path: '/Design/InteractionStates',
            name: 'interactionStates',
            component: interactionStates
        },

        {
            path: '/Design/Spacing',
            name: 'spacing',
            component: spacing
        },

        {
            path: '/Design/Sounds',
            name: 'sound',
            component: sound
        },

        {
            path: '/Design/Typography',
            name: 'typography',
            component: typography
        },
        
        {
            path: '/Content',
            name: 'content',
            component: index,
        },
        {
            path: '/Content/Help Documentation',
            name: 'helpDocumentation',
            component: helpDocumentation
        },

        {
            path: '/Content/Voice And Tone',
            name: 'voiceAndTone',
            component: voiceAndTone
        },

        {
            path: '/Content/Product Content',
            name: 'productContent',
            component: productContent
        },
        
        {
            path: '/Content/Naming',
            name: 'naming',
            component: naming
        },
        {
            path: '/Content/Vocabulary',
            name: 'vocabulary',
            component: vocabulary
        },
        {
            path: '/Content/Actionalble Language',
            name: 'actionableLanguage',
            component: actionableLanguage
        },
        {
            path: '/Content/Grammer and Mechanics',
            name: 'grammerAndMechanics',
            component: grammerAndMechanics
        },
        {
            path: '/Content/Alternative Text',
            name: 'alternativeText',
            component: alternativeText
        },
        
        {
            path: '/Components/UI Components',
            name: 'ui components',
            component: uiComponents,
        },
        {
            path: '/Components/UI Components/Buttons',
            name: 'navButton',
            component: navButton
        },
        {
            path: '/Components/UI Components/Cards',
            name: 'navCard',
            component: navCard
        },
        {
            path: '/Components/UI Components/MasterDetail',
            name: 'navMasterDetail',
            component: navMasterDetail
        },
        {
            path: '/Components/UI Components/Modal',
            name: 'navModal',
            component: navModal
        },
        {
            path: '/Components/UI Components/StepWizard/',
            name: 'navWizard',
            component: navWizard
        },
        {
            path: '/Components/UI Components/Table',
            name: 'navTable',
            component: navTable
        },
        {
            path: '/Components/UI Components/Navigation',
            name: 'navNavigation',
            component: navNavigation
        },

        {
            path: '/Components/Form Elements',
            name: 'FormElements',
            component: FormElements,
        },
        {
            path: '/Components/Form Elements/Form',
            name: 'navForm',
            component: navForm
        },
        {
            path: '/Components/Form Elements/Text Input',
            name: 'navText',
            component: navText
        },
        {
            path: '/Components/Form Elements/Password Input',
            name: 'navPassword',
            component: navPassword
        },
        {
            path: '/Components/Form Elements/Email Input',
            name: 'navEmail',
            component: navEmail
        },

        {
            path: '/Components/Form Elements/Number Input',
            name: 'navNumber',
            component: navNumber
        },
        {
            path: '/Components/Form Elements/Info Field',
            name: 'navInfo',
            component: navInfo
        },
        {
            path: '/Components/Form Elements/Toggle Input',
            name: 'navToggle',
            component: navToggle
        },
        {
            path: '/Components/Form Elements/DropDown List',
            name: 'navDropdownList',
            component: navDropdownList
        },
        {
            path: '/Components/Form Elements/Dropdown w-Search',
            name: 'navSearchableDropdownList',
            component: navSearchableDropdownList
        },
        {
            path: '/Components/Form Elements/File Upload',
            name: 'navFile',
            component: navFile
        },
        {
            path: '/Components/Form Elements/Checkbox Input',
            name: 'navCheckbox',
            component: navCheckbox
        },
        {
            path: '/Components/Form Elements/Radiobox Input',
            name: 'navRadio',
            component: navRadio
        },
        {
            path: '/Components/Form Elements/Date Input',
            name: 'navDate',
            component: navDate
        },
        {
            path: '/Components/Form Elements/Textarea Input',
            name: 'navTextarea',
            component: navTextarea
        },

        {
            path: '/Components/Grid',
            name: 'grid',
            component: grid
        },

        {
            path: '/Components/Layout',
            name: 'layout',
            component: layout
        },

        {
            path: '/Components/Alerts',
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
        },     
        
        {
            path: '/Sample Pages',
            name: 'createMove',
            component: createMove,
        },
        {
            path: '/Sample Pages/navSystemError',
            name: 'navSystemError',
            component: navSystemError
        },
        {
            path: '/Sample Pages/navReassign',
            name: 'navReassign',
            component: navReassign
        },  
        {
            path: '/Sample Pages/dispatchMonitor',
            name: 'dispatchMonitor',
            component: dispatchMonitor
        },

        {
            path: '/Coding Guidlines',
            name: 'navBestPractices',
            component: navBestPractices,
        },
        {
            path: '/Coding Guidlines/navVueBestPractices',
            name: 'navVueBestPractices',
            component: navVueBestPractices
        },
        {
            path: '/Coding Guidlines/navCSharpBestPractices',
            name: 'navCSharpBestPractices',
            component: navCSharpBestPractices
        },
        {
            path: '/Coding Guidlines/navAgileBestPractices',
            name: 'navAgileBestPractices',
            component: navAgileBestPractices
        },
    ]
})