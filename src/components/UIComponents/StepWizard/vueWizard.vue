<template>
    <div class= 'vueWizard'>
        <div class= 'wizardSteps'>
            <ol class= "step-indicator">
                <li
                    v-for= "(step, index) in steps"
                    :key= "index"
                    :class=  '{active: (index+1) == d_currentStep, complete: d_currentStep > (index+1) || d_completed}'
                >
                    <div class= "step">
                        <i :class= "step.icon_class"/>
                    </div>
                    <div class= "caption">
                        Step {{index+1}} : {{step.title}}
                    </div>
                </li>
            </ol>
        </div>
        <div class= 'wizardForm'>
            <div v-show= "d_currentStep == 1 && !d_completed" >
                <slot name= '1'/>
            </div>
            <div v-show= "d_currentStep == 2 && !d_completed">
                <slot name= '2'/>
            </div>

            <div v-if= "d_completed">
                <h3>Overview</h3>
                <slot name= '1'/>
                <slot name= '2'/>
            </div>
               </div>
        <div class= 'wizardButtons'>
            <div v-if= 'd_completed'>
                <vue-button
                    :type= 'd_type'
                    tag= "ConfirmDetailsButton"
                    :text= "d_textConfirm"
                    :icon= "d_icon"
                    :category= 'd_category[3]'


                    :form= "d_form"
                    :ctx= 'd_ctx'
                />
            </div>
            <div v-else>
                <div >
                    <vue-button
                        v-if= 'd_currentStep>1'
                        :type= 'd_type'
                        :text= "steps[d_currentStep-1].title"
                        tag= "Previous"
                        :category= 'd_category[0]'
                        icon= "fas fa-angle-double-left"


                        :form= "d_form"
                        :ctx= 'consoleClickPrevious'
                    />
                </div>
                <div>
                    <vue-button
                        v-if= 'd_currentStep<d_totalSteps'
                        :type= 'd_type'
                        :text= "steps[d_currentStep].title"
                        tag= "Next"
                        :category= 'd_category[0]'
                        icon= "fas fa-angle-double-right"
                        :disabled= 'validInput'

                        :form= "d_form"
                        :ctx= 'consoleClickNext'
                    />
                    <vue-button
                        v-else-if= 'd_currentStep==d_totalSteps'
                        :type= 'd_type'
                        tag= "submitDetailsButton"
                        :text= "d_textSubmit"
                        icon= "fas fa-check"
                        :category= 'd_category[0]'


                        :form= "d_form"
                        :ctx= 'consoleClickSubmit'
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import vueButton from '@/components/UIComponents/Button'
    import { alerts } from "@/typeScript/common/alerts";

    export default {
        name: 'vueWizard',

        mixins: [ alerts ],

        data() {

            const type= 'button'

            const tag= 'consoleTextButton'

            const text= 'Click Me'

            const icon= 'fas fa-registered'

            const category= this.$store.state.category

            const d_booleanTrue= true

            const form= ''

            const ctx= this.consoleClickConfirm

            return {

                d_type: d_type,

                d_tag: d_tag,

                d_text: d_text,

                d_icon: d_icon,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

                d_textSubmit: 'Submit',

                d_textNext: 'Next Page',

                d_textPrevious: 'Previous Page',

                d_textConfirm: 'Confirm',

                d_completed: false,

                d_totalSteps: null,

                d_currentStep: null,
            }
        }, //data

        props: {

            steps: {
                type: Array,
                required: true,
            },

            alert: {
                type: Object,
                required: true,
                default: () => {
                return {
                    error: "",
                    warning
                }
                }
            }
        }, //props

        components: {
                       vueButton
        }, //components

        computed: {
                       validInput: function () {
                               var alerts= this.alerts
                var inputs = document.getElementsByTagName('input');

                for (var index = 0; index < inputs.length; ++index) {
                        // console.log(inputs[index].name)

                    if (!alerts['error'] && !alerts['warning'] && inputs[index].required && !inputs[index].value) {
                        // console.log(inputs[index].name, inputs[index].value, '-required')
                        return true
                    }
                }
                return false
            }, //validInput
        }, //computed

        methods: {

            consoleClickNext: function () {
                    this.d_currentStep+= 1;
                    // console.log("NextPageButtonClick", "Page: ", this.d_currentStep)
            }, // consoleClickNext

            consoleClickPrevious: function () {
                    this.d_currentStep-= 1;
                    // console.log("PreviousPageButtonClick", "Page: ", this.d_currentStep)
            }, // consoleClickPrevious

            consoleClickSubmit: function () {
                    // console.log("Submit")
                    this.d_completed= true;
            }, // consoleClickSubmit

            consoleClickConfirm: function () {
                    // console.log("Close")
            }, // consoleClickConfirm
        }, //methods

        created() {

            // console.log(this.steps.length)
            this.d_totalSteps= this.steps.length;
            this.d_currentStep= 1;
        }, //created
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) '../../../Less/customVariables.less';
    @import (reference) '../../../Less/customMixins.less';

    @wizard-color-neutral: #ccc ;
    @wizard-color-active: #4183D7 ;
    @wizard-color-complete: #87D37C ;
    @wizard-step-width-height: 48px ;
    @wizard-step-font-size: 20px;

    .vueWizard {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: nowrap;

        .wizardSteps {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            margin: auto;

            .step-indicator {
                border-collapse: separate;
                display: table;
                margin-left: 0px;
                position: relative;
                table-layout: fixed;
                text-align: center;
                vertical-align: middle;
                padding-left: 0;
                               li {
                    display: table-cell;
                    position: relative;
                    float: none;
                    padding: 0;
                    width: 1%;
                                       &:after {
                        background-color: @wizard-color-neutral;
                        content: "";
                        display: block;
                        height: 4px;
                        position: absolute;
                        width: 100%;
                        top: @wizard-step-width-height/2;
                    }
                                       &:after {
                        left: 50%;
                    }
                                       &:last-child {
                        &:after {
                            display: none;
                        }
                    }
                                       &.active {
                        .step {
                            border-color: @wizard-color-active;
                            color: @wizard-color-active;
                        }
                                               .caption {
                            width: 100%;
                            color: @wizard-color-active;
                        }
                    }
                                       &.complete {
                        &:after {
                            background-color: @wizard-color-complete;
                        }
                                               .step {
                            border-color: @wizard-color-complete;
                            color: @wizard-color-complete;
                        }
                                               .caption {
                            color: @wizard-color-complete;
                        }
                    }
                }
                               .step {
                    background-color: @white;
                    border-radius: 50%;
                    border: 2px solid @wizard-color-neutral;
                    color: @wizard-color-neutral;
                    font-size: @wizard-step-font-size;
                    height: @wizard-step-width-height;
                    line-height: @wizard-step-width-height;
                    margin: 0 auto;
                    position: relative;
                    width: @wizard-step-width-height;
                    z-index: 1;
                                       &:hover {
                        cursor: pointer;
                    }
                }
                               .caption {
                    color: @wizard-color-neutral;
                    padding: @spaceMd @spaceLg;
                }
            }
        }

        .wizardFrom {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            margin: 0 auto;
            padding: @spaceLg @spaceXl;
        }
               .wizardButtons {
            margin-top: 16px;
            // margin: 0 auto;
            // padding: @spaceLg @spaceXl;
            // background-color: @backgroundColor;
                       & > div {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: nowrap;
                width: 100%;
            }
        }
    }
</style>