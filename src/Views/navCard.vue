<template>
    <div class= 'navCard'>
        <content-nav
            :attributes= 'd_vueCard.attributes'
            :title= 'd_vueCard.title'
        >  
            <component-details
                :compData= 'd_vueCard'
                :d_attr= 'd_attr'
            >
                <vue-card
                    :cardTitle= 'd_cardTitle'
                    :cardLogo= 'd_cardLogo'
                    :logoColor= 'd_logoColor'
                    :actionButtons= 'd_booleanTrue'
                    :cardData= 'd_cardData'
                    :onClickAction= 'd_onClickAction' 
                    :cardFooter= 'd_cardFooter'
                    :bookmark= '!d_booleanTrue'
                >
                    <div slot= 'actionButtons'>
                        <div >  
                            <vue-button 
                                :buttonType= 'd_buttonType'
                                buttonName= "closeButton"
                                :buttonText= "d_buttonText"
                                buttonIcon= "fas fa-times"
                                :buttonStyle= 'd_buttonStyle[9]'
                                :disabled= '!d_booleanTrue'
                                :autofocus= '!d_booleanTrue'
                                :formID= "d_form"
                                :onClickAction= 'consoleClickDelete'
                            />
                        </div>
                    </div>
                </vue-card>
            </component-details>
            <div class= 'tag'>
                <card-background
                    low= '1'
                >
                    <div class= 'content'>
                        <div>
                            <text-input 
                                label= "SKU"
                                name= "SKUinputName"
                                v-model= 'd_SKU'
                                value= ''
                                placeholder= "Enter SKU..."
                                :maxlength= 'd_maxlength'
                                :required= 'd_booleanTrue'
                                :disabled= '!d_booleanTrue'
                                :readonly= '!d_booleanTrue'
                                :autofocus= '!d_booleanTrue'
                                inputIcon= 'fas fa-barcode'
                                :inline= '!d_booleanTrue'
                                @alerts= 'alerts'
                            />
                        </div>
                        <div>
                            <div>
                                <number-input 
                                    label= "Quantity"
                                    name= "OrderQuantity"
                                    v-model= 'd_numberValue'
                                    value= ''
                                    placeholder= "0"
                                    :required= 'd_booleanTrue'
                                    :disabled= '!d_booleanTrue'
                                    :readonly= '!d_booleanTrue'
                                    :autofocus= '!d_booleanTrue'
                                    inputIcon= 'fas fa-hashtag'
                                    :inline= '!d_booleanTrue'
                                    @alerts= 'alerts'
                                />
                            </div>
                            <div>
                                <vue-info 
                                    label= "Available"
                                    :value= 'd_info'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <vue-button 
                            :buttonType= 'd_buttonType'
                            buttonName= "AddSKUButton"
                            buttonText= "Add SKU"
                            buttonIcon= "fas fa-plus"
                            :buttonStyle= 'd_buttonStyle[9]'
                            :disabled= '!d_booleanTrue'
                            :autofocus= '!d_booleanTrue'
                            :formID= "d_form"
                            :onClickAction= 'createCard.bind()'
                        />
                    </div>
                </card-background>
                <div
                    v-for= '(dat, index) in d_SKUData["data"]' 
                    :key= 'index'
                    class= 'tagCards'
                >
                    <vue-card
                        :actionButtons= 'd_booleanTrue'
                        :cardData= '{"cols": d_SKUData["cols"], "data": dat}'
                    >
                        <div slot= 'actionButtons'>
                            <div >  
                                <vue-button 
                                    :buttonType= 'd_buttonType'
                                    buttonName= "closeButton"
                                    :buttonText= "d_buttonText"
                                    buttonIcon= "fas fa-times"
                                    :buttonStyle= 'd_buttonStyle[9]'
                                    :disabled= '!d_booleanTrue'
                                    :autofocus= '!d_booleanTrue'
                                    :formID= "d_form"
                                    :onClickAction= 'delCard.bind(this, index)'
                                />
                            </div>
                        </div>
                    </vue-card>
                </div>
            </div>
        </content-nav>
    </div>
</template>

<script>

    import productTag from '@/components/UIComponents/Cards/Tag/productTag'
    import contentNav from '@/Views/components/contentNav';
    
    import componentDetails from "@/Views/componentDetails";    
    import vueCard from '@/components/UIComponents/Cards/vueCard';
    import cardBackground from '@/components/UIComponents/Cards/cardBackground'
    import vueButton from '@/components/UIComponents/Buttons'
    import textInput from "@/components/FormElements/textInput";
    import numberInput from "@/components/FormElements/numberInput";
    import vueInfo from "@/components/FormElements/vueInfo";
    
    // import { store } from '@/store/store'
    

    export default {
        name: 'navCard',

        // store,

        data() {
            
            var d_cardDetails= this.$store.state.cardDetails

            var d_customerCarts= this.$store.state.customerCarts

            var d_cardFooter= this.$store.state.customfooter

            var d_cardTitle= 'Custom Card'

            var d_cardLogo= 'fas fa-user fa-3x'

            var d_logoColor= '#015D9A'

            var d_booleanTrue= true

            var d_cardData= {"cols":d_cardDetails.cols, "data": d_cardDetails.data[0]}

            var d_onClickAction= this.consoleClick 

            var d_buttonType= 'button'

            var d_buttonName= 'consoleTextButton'

            var d_buttonText= 'Click Me'

            var d_buttonIcon= 'fas fa-registered'

            var d_buttonStyle= this.$store.state.buttonStyle

            var d_form= ''

            var d_column= ['SKU', 'Quantity', 'Available']

            var d_SKUData= {
                'cols': d_column, 
                'data': new Array()
            }

            return {

                d_buttonType: d_buttonType,

                d_buttonName: d_buttonName,

                d_buttonText: d_buttonText,

                d_buttonIcon: d_buttonIcon,

                d_buttonStyle: d_buttonStyle,

                d_form: d_form,

                d_onClickAction: d_onClickAction,

                d_customerCarts: d_customerCarts,

                d_customerCarts: d_customerCarts,

                d_cardFooter: d_cardFooter,

                d_cardTitle: d_cardTitle,
                
                d_cardLogo: d_cardLogo,

                d_logoColor: d_logoColor,

                d_cardData: d_cardData,
                
                d_onClickAction: d_onClickAction,
                
                d_maxlength: 20,
                d_value: null,
                d_SKU: null,
                d_SKUData: d_SKUData,
                d_numberValue: null,
                d_info: 900,
                
                d_booleanTrue: d_booleanTrue,

                d_attr: {'type':['d_buttonStyle'] , 'value': [d_buttonStyle]},

                d_vueCard: {
                    
                    title: 'Vue Card',

                    compName: 'vue-card',

                    import: 'import vueCard from "@/components/UIComponents/Cards/vueCard"',

                    description: '<p>The &lt;card&gt; tag specifies a output field where the content is displayed in the shape of a card.</p>',

                    attributes:[
                        {
                            type: "cardTitle",
                            value: d_cardTitle,
                            description: '<p>The cardTitle attribute specifies the title for the Card which is displayed on top of the card.</p>',
                            text: 'Specifies the Name/Title of the card',
                        },
                        {
                            type: "cardLogo",
                            value: d_cardLogo,
                            description: '<p>The cardLogo attribute specifies the logo/image which is displayed on top of the card.</p>',
                            text: 'Specifies the logo/image to be displayed on the card',
                        },
                        {
                            type: "logoColor",
                            value: d_logoColor,
                            description: '<p>The logoColor attribute specifies the color of the logo which is displayed on top of the card.</p>',
                            text: 'Specifies the color of the logo to be displayed on the card, Accepts hex values in string format.',
                        },
                        {
                            type: "cardData",
                            value: d_cardData,
                            description: this.$store.state.navText.value,
                            text: "Specifies the value for the &lt;multi-toggle&gt element.",
                        },
                        {
                            type: "actionButtons",
                            value: d_booleanTrue,
                            description: '<p>It sets the label for unchecked value if showLabel is true.</p>',
                            text: 'Specifies the value for the unchecked label'
                        },
                        {
                            type: "cardFooter",
                            value: d_cardFooter,
                            description: '<p>It sets the label for checked value if showLabel is true.</p>',
                            text: 'Specifies the value for the checked label'
                        },
                        {
                            type: "onClickAction",
                            value: d_onClickAction,
                            description: '<p>display the label as checked/unchecked state for toggle.</p>',
                            text: 'Specifies the if the labels should be displayed'
                        },
                        {
                            type: "selectedCard",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.disabled,
                            text: this.$store.state.navText.disabledText,
                        },
                        {
                            type: "bookmark",
                            value: !d_booleanTrue,
                            description: this.$store.state.navText.inline,
                            text: this.$store.state.navText.inlineText,
                        },
                    ]
                }, //vueCard
            } //return
        }, //data

        components: {

            componentDetails,
            productTag,
            vueCard,
            cardBackground,
            vueButton,
            textInput,
            numberInput,
            vueInfo,
            contentNav
        }, //components

        methods: {

            delCard: function (index) {
                this.d_SKUData.data.splice(index, 1)
            }, //delCard

            createCard: function () {
                var quantity= this.d_numberValue
                var sku= this.d_SKU
                var info= this.d_info
                var data= new Array()
                // console.log('data: ', sku, quantity, info)
                    
                if (quantity && sku) {
                    // console.log('this', this.d_SKUData['data'][0])
                    if (this.d_SKUData['data'][0]){
                        this.d_SKUData['data'].push(new Array(sku, quantity, info))
                        // console.log('data: ', typeof this.d_SKUData['cols'], Array.isArray(this.d_SKUData), Array.isArray(this.d_SKUData.cols), this.d_SKUData)
                    }
                    else{
                        // console.log('cols: ', typeof this.d_SKUData.cols, Array.isArray(this.d_SKUData), Array.isArray(this.d_SKUData.cols), this.d_SKUData)
                        this.d_SKUData['data']= new Array(new Array(sku, quantity, info))
                    }
                }
                else{
                    // console.log('ERROR in data')
                }
            }, //createCard


            //handels alerts thrown by the component
            alerts: function (type, message) {
                if (type== 'error') {
                    this.d_danger= message;
                }
                else {
                    this.d_warning= message;
                }
            }, //alerts

            consoleClickDelete: function () {
                // console.log("CardClickClose")
            }, // consoleClickClose

            consoleClick: function () {
                // console.log("CardClick")
            }, // consoleClick

            consoleClickNull: function () {
            }, // consoleClickNull
        }, //methods
    } //default
</script>

<style lang= "less" scoped>

    @import (reference) "./../Less/customMixins.less";
    @import (reference) "./../Less/customVariables.less";

    .navCard {
        
        .tag {
            width: fit-content;
            margin-bottom: 32px;

            & > .content,
            & > div {
                    display: flex;
                    flex-direction: row;
                    padding: @spaceMd @spaceLg;
                    max-width: 100%;
                    background-color: @backgroundColor;

                & > div {
                    display: flex;
                    flex-direction: column;

                    & > div {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        justify-items: center;
                    }
                }
            }
            
            & > .tagCards {
                background-color: transparent;
                margin-bottom: 16px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }  
    }  
</style>