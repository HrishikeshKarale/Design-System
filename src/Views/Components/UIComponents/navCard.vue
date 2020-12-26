<template>
    <div class= 'navCard'>
            <component-details
                :compData= 'd_vueCard'
                :attr= 'attr'
            >
                <vue-card
                    :title= 'd_title'
                    :logo= 'd_logo'
                    :logoColor= 'd_logoColor'
                    :details= 'd_data'
                    :ctx= 'd_ctx' 
                    :cardFooter= 'd_cardFooter'
                    :bookmark= '!bookmark'
                    @bookmark= "val => bookmark = val"
                >
                    <div slot= 'actionButtons'>
                        <div >  
                            <vue-button 
                                :type= 'd_type'
                                tag= "closeButton"
                                :text= "d_text"
                                icon= "fas fa-times"
                                :category= 'd_category[9]'
                               
                                
                                :form= "d_form"
                                :ctx= 'consoleClickDelete'
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
                                :value= 'd_SKU'
                                placeholder= "Enter SKU..."
                                :maxlength= 'd_maxlength'
                                :required= 'd_booleanTrue'
                               
                                
                                
                                inputIcon= 'fas fa-barcode'
                                
                                @notify= 'alerts'
                                @value= 'val=> d_SKU = val'
                            />
                        </div>
                        <div>
                            <div>
                                <number-input 
                                    label= "Quantity"
                                    name= "OrderQuantity"
                                    :value= 'd_numberValue'
                                    placeholder= "0"
                                    :required= 'd_booleanTrue'
                                   
                                    
                                    
                                    inputIcon= 'fas fa-hashtag'
                                    
                                    @notify= 'alerts'
                                    @value= 'val=> d_numberValue = val'
                                />
                            </div>
                            <div>
                                <vue-info 
                                    label= "Available"
                                    :value= 'info'
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <vue-button 
                            :type= 'd_type'
                            tag= "AddSKUButton"
                            text= "Add SKU"
                            icon= "fas fa-plus"
                            :category= 'd_category[9]'
                           
                            
                            :form= "d_form"
                            :ctx= 'createCard.bind()'
                        />
                    </div>
                </card-background>
                <div
                    v-for= '(dat, index) in d_SKUData["data"]' 
                    :key= 'index'
                    class= 'tagCards'
                >
                    <vue-card
                        :details= '{"cols": d_SKUData["cols"], "values": dat}'
                    >
                        <div slot= 'actionButtons'>
                            <div >  
                                <vue-button 
                                    :type= 'd_type'
                                    tag= "closeButton"
                                    :text= "d_text"
                                    icon= "fas fa-times"
                                    :category= 'd_category[9]'
                                   
                                    
                                    :form= "d_form"
                                    :ctx= 'delCard.bind(this, index)'
                                />
                            </div>
                        </div>
                    </vue-card>
                </div>
            </div>
           </div>
</template>

<script>

    import productTag from '@/components/UIComponents/Cards/Tag/productTag'
    
    
    import componentDetails from "@/Views/componentDetails";    
    import vueCard from '@/components/UIComponents/Cards/vueCard';
    import cardBackground from '@/components/UIComponents/Cards/cardBackground'
    import vueButton from '@/components/UIComponents/Button'
    import textInput from "@/components/FormElements/textInput";
    import numberInput from "@/components/FormElements/numberInput";
    import vueInfo from "@/components/FormElements/vueInfo";
    import { alerts } from "@/typeScript/common/alerts";
    
    // import { store } from '@/store/store'
    

    export default {
        name: 'navCard',
        
        mixins: [ alerts ],

        // store,

        data() {
                       const d_cardDetails= this.$store.state.cardDetails

            const d_customerCarts= this.$store.state.customerCarts

            const d_cardFooter= this.$store.state.customfooter

            const d_title= 'Custom Card'

            const d_logo= 'fas fa-user fa-3x'

            const d_logoColor= '#015D9A'

            const d_booleanTrue= true
                       const bookmark = d_booleanTrue;

            const d_data= {"cols":d_cardDetails.cols, "values": d_cardDetails.data[0]}

            const d_ctx= this.consoleClick 

            const d_type= 'button'

            const d_tag= 'consoleTextButton'

            const d_text= 'Click Me'

            const d_icon= 'fas fa-registered'

            const d_category= this.$store.state.category

            const d_form= ''

            const d_column= ['SKU', 'Quantity', 'Available']

            const d_SKUData= {
                'cols': d_column, 
                'data': new Array()
            }

            return {

                d_type,

                d_tag,

                d_text,

                d_icon,

                d_category,

                d_form,

                d_ctx,

                d_customerCarts,

                d_customerCarts,

                d_cardFooter,

                d_title,
                               d_logo,

                d_logoColor,

                d_data,
                               d_ctx,
                bookmark,
                               d_maxlength: 20,
                d_value: null,
                d_SKU: null,
                d_SKUData: d_SKUData,
                d_numberValue: null,
                info: 900,
                               d_booleanTrue: d_booleanTrue,

                attr: {'type':['d_category'] , 'value': [d_category]},

                d_vueCard: {
                                       title: 'Vue Card',

                    compName: 'vue-card',

                    import: 'import vueCard from "@/components/UIComponents/Cards/vueCard"',

                    description: '<p>The &lt;card&gt; tag specifies a output field where the content is displayed in the shape of a card.</p>',

                    attributes:[
                        {
                            type: "title",
                            value: d_title,
                            description: '<p>The title attribute specifies the title for the Card which is displayed on top of the card.</p>',
                            text: 'Specifies the Name/Title of the card',
                        },
                        {
                            type: "logo",
                            value: d_logo,
                            description: '<p>The logo attribute specifies the logo/image which is displayed on top of the card.</p>',
                            text: 'Specifies the logo/image to be displayed on the card',
                        },
                        {
                            type: "logoColor",
                            value: d_logoColor,
                            description: '<p>The logoColor attribute specifies the color of the logo which is displayed on top of the card.</p>',
                            text: 'Specifies the color of the logo to be displayed on the card, Accepts hex values in string format.',
                        },
                        {
                            type: "data",
                            value: d_data,
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
                            type: "ctx",
                            value: d_ctx,
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
            vueInfo
        }, //components

        methods: {

            delCard: function (index) {
                this.d_SKUData.data.splice(index, 1)
            }, //delCard

            createCard: function () {
                const quantity= this.d_numberValue
                const sku= this.d_SKU
                const info= this.d_info
                const details= new Array()
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

    @import (reference) "../../../Less/customMixins.less";
    @import (reference) "../../../Less/customvariables.less";

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