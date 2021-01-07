<template>
    <div class= 'systemError'>
        <div class= "top">
            <h3>Oops, Something unexpected happened.</h3>
        </div>
        <div class= "container">
            <div class= "ghost-copy">
                <div class= "one"></div>
                <div class= "two"></div>
                <div class= "three"></div>
                <div class= "four"></div>
            </div>
            <div class= "ghost">
                <div class= "face">
                    <div class= "eye"></div>
                    <div class= "eye-right"></div>
                    <div class= "mouth"></div>
                </div>
            </div>
            <div class= "shadow"></div>
        </div>
        <div class= 'details'>
            <div>
                <span @click= "d_hideDetails= !d_hideDetails" :class= '["fas", d_hideDetails? "fa-plus": "fa-minus"]'>  Details</span>
                <vue-clipboard
                    :copy= 'd_danger'
                    tag= 'StackTrace'
                    text= 'Copy'
                    category= "text-sm"
                    id= 'stackTrace'
                />
            </div>
            <table v-if= '!d_hideDetails'>
                <body>
                    <tr>
                        <td>App:</td>
                        <td>
                            {{app}} - {{version}}
                        </td>
                    </tr>
                    <tr>
                        <td>URL:</td>
                        <td>
                            {{url}}
                        </td>
                    </tr>
                    <tr>
                        <td>date & Time:</td>
                        <td>
                            {{date}}
                        </td>
                    </tr>
                    <tr v-if= 'errorCode'>
                        <td>Error Code:</td>
                        <td>
                            {{errorCode}}
                        </td>
                    </tr>
                    <tr v-if= 'errorMessage'>
                        <td>Message:</td>
                        <td>
                            {{errorMessage}}
                        </td>
                    </tr>
                    <tr v-if= 'stackTrace'>
                        <td>stacktrace:</td>
                        <td class= 'stackTrace'>
                            <textarea :value= 'stackTrace' rows= "4" disabled/>
                        </td>
                    </tr>
                </body>
            </table>
        </div>
        <div class= "bottom">
            <div class= "buttons">
                <slot name= 'buttons'/>
            </div>
        </div>
    </div>
</template>

<script>

    import vueClipboard from '../../components/Code/vueClipboard.vue';

    export default {
        name:'systemError',

        data() {
            const d_hideDetails= true
            const d_danger= "error=\n\
            {\n\
                app: "+this.app+",\n\
                version: "+this.version+",\n\
                url: "+this.url+",\n\
                date: "+this.date+",\n\
                errorCode: "+this.errorCode+",\n\
                errorMessage: "+this.errorMessage+",\n\
                stackTrace: "+this.stackTrace+",\n\
            }"
            //object (JSON)
            const d_errorObject= {
                "app": this.app,
                "version": this.version,
                "url": this.url,
                "date": this.date,
                "errorCode": this.errorCode,
                "errorMessage": this.errorMessage,
                "stackTrace": this.stackTrace,
            }
            return {

                d_hideDetails,

                d_danger,

                d_errorObject,
            }//return
        }, //data

        props: {

            errorCode: {
                type: String,
                required: true,
            },

            errorMessage: {
                type: String,
                required: true,
            },

            stackTrace: {
                type: String,
                required: false,
            },

            url: {
                type: String,
                required: true,
            },

            date:  {
                type: String,
                required: true,
            },

            app:  {
                type: String,
                required: true,
            },

            version:  {
                type: String,
                required: true,
            },
        },

        components: {
            vueClipboard,
        }
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "./../../Less/customMixins.less";
    @import (reference) "./../../Less/customVariables.less";

    @height: 800px;
    @planet: 30em;
    @size: 2;
    @top: 4em;

    @white: #EDEDED;
    @ghostBorder: #BFC0C0;
    @dark: @primaryColor;
    @light: red;

    .systemError {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: auto;
        min-height: (@height/@size)+64px;
        max-height: @height;

        & > .top {
            margin-top: 32px;
        }

        & > .container {
            margin: 0 auto;
            position: relative;
            width: 240px;
            height: 240px;

            & > .ghost {
                width: 50%;
                height: 53%;
                left: 25%;
                top: 10%;
                position: absolute;
                border-radius: 50% 50% 0 0;
                background: @white;
                border: 1px solid @ghostBorder;
                border-bottom: none;
                animation: float 2s ease-out infinite;

                & > .face {
                    position: absolute;
                    width: 100%;
                    height: 60%;
                    top: 20%;
                                       & > .eye,
                    & > .eye-right {
                        position: absolute;
                        background: @dark;
                        width: 13px;
                        height: 13px;
                        border-radius: 50%;
                        top: 40%;
                    }

                    & > .eye {
                        left: 25%;
                    }

                    & > .eye-right {
                        right: 25%;
                    }

                    & > .mouth {
                        position:absolute;
                        top: 50%;
                        left: 45%;
                        width: 10px;
                        height: 10px;
                        border: 3px solid;
                        border-radius: 50%;
                        border-color: transparent @dark @dark transparent;
                        transform: rotate(45deg);
                    }
                }
            }

            & > .shadow {
                position: absolute;
                width: 30%;
                height: 7%;
                background: @ghostBorder;
                left: 35%;
                top: 80%;
                border-radius: 50%;
                animation: scale 2s infinite;
            }

            & > .ghost-copy {
                width: 50%;
                height: 53%;
                left: 25%;
                top: 10%;
                position: absolute;
                border-radius: 50% 50% 0 0;
                background: @white;
                border: 1px solid @ghostBorder;
                border-bottom: none;
                animation: float 2s ease-out infinite;
                z-index: 0;

                & > .one,
                & > .two,
                & > .three,
                & > .four {
                    position: absolute;
                    background: @white;
                    top: 85%;
                    width: 25%;
                    height: 23%;
                    border: 1px solid @ghostBorder;
                    z-index: 0;
                }

                & > .one {
                    border-radius: 0 0 100% 30%;
                    left: -1px;
                }

                & > .two {
                    left: 23%;
                    border-radius: 0 0 50% 50%;
                }

                & > .three {
                    left: 50%;
                    border-radius: 0 0 50% 50%;
                }

                & > .four {
                    left: 75.5%;
                    border-radius: 0 0 30% 100%;
                }
            }

        }

        & > .details {
            display: flex;
            flex-direction: column;

            background-color:@backgroundColor;
            border: 1px solid ~"darken(@backgroundColor, 10%)";
            padding: @spaceSm @spaceMd;
            border-radius: @borderRadius;

             & > div {
                display: flex;
                flex-direction: row;
                justify-content: space-between;

                & > span {
                    margin: auto 0;
                    cursor: pointer;
                }
             }

            & > table {
                text-align: left;
                margin: auto;

                & > body {

                    tr {
                        margin: @spaceXs @spaceSm;;

                        td {
                            padding: @spaceSm @spaceMd;
                                                       &:first-child {
                                font-weight: bold;
                            }
                                                       &.stackTrace {
                                border-radius: @borderRadius;

                                textarea:disabled {
                                    background-color: transparent;
                                    border-color: ~"darken(@backgroundColor, 25%)";
                                    border-radius: @borderRadius;
                                    width: auto;
                                }
                            }
                        }

                        &:last-child {
                            margin-bottom: 400px;
                        }
                    }
                }
            }
        }

        @keyframes scale {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes float {
            50% {
                transform: translateY(8px);
            }
        }
    }
</style>