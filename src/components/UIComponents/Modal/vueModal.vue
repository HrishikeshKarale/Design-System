<template>
    <div class= 'vueModal'>
        <div
            id= "show-modal"
        >  
            <vue-button 
                v-if= "text"
                :type= 'd_type'
                :tag= '"open"+tag+"Modal"'
                :text= "text"
                :icon= "icon"
                :category= 'd_category[2]'
               
                
                :form= "d_form"
                :ctx= 'd_ctx'
            />
                         <vue-button 
                v-else
                :type= 'd_type'
                tag= '"open"+tag+"Modal"'
                :text= "text"
                :icon= "icon"
                :category= 'd_category[9]'
               
                
                :form= "d_form"
                :ctx= 'd_ctx'
            />
        </div>
        <transition 
            name= "modal"
            :showModal= 'd_showModal' 
            v-if= "d_showModal"
        >
            <div class= "modal-mask">
                <div class= "modal-wrapper">
                    <div class= "modal-container">

                    <div
                        v-if= 'modalTitle'
                        class= "modal-header"
                    >
                        {{modalTitle}}
                    </div>

                    <div class= "modal-body">
                        <slot>
                            default body
                        </slot>
                    </div>

                    <div class= "modal-footer">
                        <div
                            v-if= 'ctx'
                        >
                            <vue-button
                                :type= 'd_type'
                                :tag= "tag"
                                text= "CONFIRM"
                                :icon= 'icon'
                                :category= 'd_category[2]'
                               
                                
                                :form= "d_form"
                                :ctx= 'ctx'
                            />
                        </div>
                        <div>  
                            <vue-button
                                :type= 'd_type'
                                tag= "closeModal"
                                text= "Close"
                                :category= 'd_category[11]'
                               
                                
                                :form= "d_form"
                                :ctx= 'd_ctx'
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    import vueButton from '@/components/UIComponents/Buttons'
    import vueClipboard from '@/components/Code/vueClipboard'

    export default {
        name: 'vueModal',

        data () {

            const type= 'button'

            const category= this.$store.state.category

            const d_booleanTrue= true

            const form= ''

            const ctx= this.toggle

            const showModal= false

            return {

                d_type: d_type,

                d_category: d_category,

                d_booleanTrue: d_booleanTrue,

                d_form: d_form,

                d_ctx: d_ctx,

                d_showModal: d_showModal
            } //return
        }, //data
               props: {

            modalTitle: {
                required: false,
                type: String,
            },

            text: {
                required: false,
                type: String,
                default: null
            },

            tag: {
                required: false,
                type: String,
                default: null
            },

            icon: {
                required: false,
                type: String,
                default: null
            },

            showModal: {
                required: false,
                type: Boolean,
                default: false
            },

            ctx: {
                required: false,
                type: Function
            }
        }, //props

        components: {

            vueButton,
        }, //components

        methods: {

            toggle: function () {
                this.d_showModal= !this.d_showModal;
            }, //toggle
        }, //methods

        created() {
                       this.d_showModal= this.showModal
        }, //created
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) '../../../Less/customMixins.less';
    @import (reference) '../../../Less/customVariables.less';

    .vueModal {
        display: inline-flex;

        .modal-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            display: table;
            transition: opacity .3s ease;

            .modal-wrapper {
                display: table-cell;
                vertical-align: middle;

                .modal-container {
                    min-width: 320px;
                    max-width: 800px;
                    height: fit-content;
                    margin: 0px auto;
                    background-color: @backgroundColor;
                    border-radius: @borderRadius;
                    .boxShadow(0 2px 8px rgba(0, 0, 0, .33));
                    transition: all .3s ease;

                    .modal-header {
                        color: @backgroundColor;
                        background-color: #003a65;
                        border-top-left-radius: 4px;
                        border-top-right-radius: 4px;
                        padding: @spaceMd @spaceLg;
                        font-size: 32px;
                        height: auto;
                        text-align: left;
                    }

                    .modal-body {
                        margin: 8px 16px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                    }

                    .modal-footer {
                        padding: @spaceMd @spaceLg;
                        display: flex;
                        flex-direction: row-reverse;
                        flex-wrap: nowrap;

                        & > div {
                            margin: auto 0 auto 32px;
                            justify-content: space-around;

                            &:last-child {
                                margin-left: 0px;
                            }
                        }
                    }
                }
            }
        }
    }

    /*
    * The following styles are auto-applied to elements with
    * transition= "modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

    .modal-enter,
    .modal-leave-active {
        .opacity(0);
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

</style>

