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

import components from '@/Views/Components'
    import uiComponents from '@/Views/Components/uiComponents'
        import navButton from '@/Views/Components/uiComponents/navButton'
        import navCard from '@/Views/Components/uiComponents/navCard'
        import navMasterDetail from '@/Views/Components/uiComponents/navMasterDetail'
        import navModal from '@/Views/Components/uiComponents/navModal'
        import navWizard from '@/Views/Components/uiComponents/navWizard'
        import navTable from '@/Views/Components/uiComponents/navTable'
        import navNavigation from '@/Views/Components/uiComponents/navNavigation'
    import formElements from '@/Views/Components/FormElements'
        import navForm from '@/Views/Components/FormElements/navForm.vue'
        import navText from '@/Views/Components/FormElements/navText'
        import navCheckbox from '@/Views/Components/FormElements/navCheckbox'
        import navDropdownList from '@/Views/Components/FormElements/navDropdownList'
        import navSearchableDropdownList from '@/Views/Components/FormElements/navSearchableDropdownList'
        import navEmail from '@/Views/Components/FormElements/navEmail'
        import navFile from '@/Views/Components/FormElements/navFile'
        import navToggle from '@/Views/Components/FormElements/navToggle'
        import navNumber from '@/Views/Components/FormElements/navNumber'
        import navPassword from '@/Views/Components/FormElements/navPassword'
        import navRadio from '@/Views/Components/FormElements/navRadio'
        import navDate from '@/Views/Components/FormElements/navDate'
        import navInfo from '@/Views/Components/FormElements/navInfo'
        import navTextarea from '@/Views/Components/FormElements/navTextarea'
    import layout from '@/Views/Components/Layouts'
    import navAlert from '@/Views/Components/Alerts'
            import navAlertProactive from '@/Views/Components/Alerts/navAlertProactive'
            import navAlertReactive from '@/Views/Components/Alerts/navAlertReactive'
       import grid from '@/Views/Grids'

import others from '@/Views/Others'
    import samplePages from '@/Views/Others/SamplePages'
        import navReassign from '@/Views/Others/SamplePages/navReassign'
        import createMove from '@/Views/Others/SamplePages/createMove'
        import navSystemError from '@/Views/Others/SamplePages/navSystemError'
        import dispatchMonitor from '@/Views/Others/SamplePages/dispatchMonitor'
    import codingGuidlines from '@/Views/Others/CodingGuidlines'
        import navBestPractices from '@/Views/Others/CodingGuidlines/navBestPractices'
        import navVueBestPractices from '@/Views/Others/CodingGuidlines/navVueBestPractices'
        import navAgileBestPractices from '@/Views/Others/CodingGuidlines/navAgileBestPractices'
        import navCSharpBestPractices from '@/Views/Others/CodingGuidlines/navCSharpBestPractices'




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
            path: '/',
            name: 'app',
            component: index,
        },
        {
            path: '/design',
            name: 'design',
            component: design
        },
            {
                path: '/design/colors',
                name: 'colors',
                component: colors
            },
            {
                path: '/design/icons',
                name: 'icons',
                component: icons
            },
            {
                path: '/design/interactionStates',
                name: 'interactionStates',
                component: interactionStates
            },
            {
                path: '/design/spacing',
                name: 'spacing',
                component: spacing
            },
            {
                path: '/design/sound',
                name: 'sound',
                component: sound
            },
            {
                path: '/design/typography',
                name: 'typography',
                component: typography
            },
        {
            path: '/content',
            name: 'content',
            component: content,
        },
            {
                path: '/content/helpDocumentation',
                name: 'helpDocumentation',
                component: helpDocumentation
            },
            {
                path: '/content/voiceAndTone',
                name: 'voiceAndTone',
                component: voiceAndTone
            },
            {
                path: '/content/productContent',
                name: 'productContent',
                component: productContent
            },
                       {
                path: '/content/naming',
                name: 'naming',
                component: naming
            },
            {
                path: '/content/vocabulary',
                name: 'vocabulary',
                component: vocabulary
            },
            {
                path: '/content/actionableLanguage',
                name: 'actionableLanguage',
                component: actionableLanguage
            },
            {
                path: '/content/grammerAndMechanics',
                name: 'grammerAndMechanics',
                component: grammerAndMechanics
            },
            {
                path: '/content/alternativeText',
                name: 'alternativeText',
                component: alternativeText
            },
        {
            path: '/components',
            name: 'components',
            component: components,
        },
            {
                path: '/components/uiComponents',
                name: 'uiComponents',
                component: uiComponents,
            },
                {
                    path: '/components/uiComponents/navButton',
                    name: 'navButton',
                    component: navButton
                },
                {
                    path: '/components/uiComponents/navCard',
                    name: 'navCard',
                    component: navCard
                },
                {
                    path: '/components/uiComponents/navMasterDetail',
                    name: 'navMasterDetail',
                    component: navMasterDetail
                },
                {
                    path: '/components/uiComponents/navModal',
                    name: 'navModal',
                    component: navModal
                },
                {
                    path: '/components/uiComponents/navWizard',
                    name: 'navWizard',
                    component: navWizard
                },
                {
                    path: '/components/uiComponents/navTable',
                    name: 'navTable',
                    component: navTable
                },
                {
                    path: '/components/uiComponents/navNavigation',
                    name: 'navNavigation',
                    component: navNavigation
                },
            {
                path: '/components/formElements',
                name: 'formElements',
                component: formElements,
            },
                {
                    path: '/components/formElements/navForm',
                    name: 'navForm',
                    component: navForm
                },
                {
                    path: '/components/formElements/navText',
                    name: 'navText',
                    component: navText
                },
                {
                    path: '/components/formElements/navPassword',
                    name: 'navPassword',
                    component: navPassword
                },
                {
                    path: '/components/formElements/navEmail',
                    name: 'navEmail',
                    component: navEmail
                },
                {
                    path: '/components/formElements/navNumber',
                    name: 'navNumber',
                    component: navNumber
                },
                {
                    path: '/components/formElements/navInfo',
                    name: 'navInfo',
                    component: navInfo
                },
                {
                    path: '/components/formElements/navToggle',
                    name: 'navToggle',
                    component: navToggle
                },
                {
                    path: '/components/formElements/navDropdownList',
                    name: 'navDropdownList',
                    component: navDropdownList
                },
                {
                    path: '/components/formElements/navSearchableDropdownList',
                    name: 'navSearchableDropdownList',
                    component: navSearchableDropdownList
                },
                {
                    path: '/components/formElements/navFile',
                    name: 'navFile',
                    component: navFile
                },
                {
                    path: '/components/formElements/navCheckbox',
                    name: 'navCheckbox',
                    component: navCheckbox
                },
                {
                    path: '/components/formElements/navRadio',
                    name: 'navRadio',
                    component: navRadio
                },
                {
                    path: '/components/formElements/navDate',
                    name: 'navDate',
                    component: navDate
                },
                {
                    path: '/components/formElements/navTextarea',
                    name: 'navTextarea',
                    component: navTextarea
                },
            {
                path: '/components/layout',
                name: 'layout',
                component: layout
            },
            {
                path: '/components/navAlert',
                name: 'navAlert',
                component: navAlert,
            },
                {
                    path: '/components/navAlert/navAlertProactive',
                    name: 'navAlertProactive',
                    component: navAlertProactive
                },
                {
                    path: '/components/navAlert/navAlertReactive',
                    name: 'navAlertReactive',
                    component: navAlertReactive
                },
        {
            path: '/grid',
            name: 'grid',
            component: grid
        },
        {
            path: '/others',
            name: 'others',
            component: others,
        },
            {
                path: '/others/samplePages',
                name: 'samplePages',
                component: samplePages,
            },
                {
                    path: '/others/samplePage/createMove',
                    name: 'createMove',
                    component: createMove,
                },
                {
                    path: '/others/samplePage/navSystemError',
                    name: 'navSystemError',
                    component: navSystemError
                },
                {
                    path: '/others/samplePage/navReassign',
                    name: 'navReassign',
                    component: navReassign
                },  
                {
                    path: '/others/samplePage/dispatchMonitor',
                    name: 'dispatchMonitor',
                    component: dispatchMonitor
                },
            {
                path: '/others/codingGuidlines',
                name: 'codingGuidlines',
                component: codingGuidlines,
            },
                {
                    path: '/others/codingGuidlines/navBestPractices',
                    name: 'navBestPractices',
                    component: navBestPractices,
                },
                {
                    path: '/others/codingGuidlines/navVueBestPractices',
                    name: 'navVueBestPractices',
                    component: navVueBestPractices
                },
                {
                    path: '/others/codingGuidlines/navCSharpBestPractices',
                    name: 'navCSharpBestPractices',
                    component: navCSharpBestPractices
                },
                {
                    path: '/others/codingGuidlines/navAgileBestPractices',
                    name: 'navAgileBestPractices',
                    component: navAgileBestPractices
                }
    ]
})