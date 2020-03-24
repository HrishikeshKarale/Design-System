//https://codepen.io/JMChristensen/pen/Ablch
<template>
    <div 
        class= 'progressCircle' 
        :data-pct= 'val'
    >
        <svg 
            id= "svg" 
            width= "32" 
            height= "32" 
            viewPort= "0 0 32 32"
        >
            <circle 
                :r= "r" 
                :cx= "cx" 
                :cy= "cx" 
                fill= "transparent" 
                stroke-dasharray= "100" 
                stroke-dashoffset= "0"
            />
            <circle 
                :id= '(dashoffset-c)!=0?"bar":"warn"' 
                :r= "r" :cx= "cx" 
                :cy= "cx" 
                fill= "transparent" 
                :stroke-dasharray= "dashoffset" 
                stroke-dashoffset= "300"
            />
        </svg>
    </div>
</template>

<script>

    export default {
        name: 'progressCircle',

        data () {
            return {

                cx: 16,

                r: 12,

                c: null
            } //return
        }, //data

        props: {
            val: {
                type: Number,
                default: 0
            },
            maxlength: {
                type: [Number, String],
                default: 100
            }
        }, //props

        created () {
            var val= this.val
            this.c = Math.PI*(this.r*2);
        }, //created

        computed: {

            dashoffset: function () {
                var val= this.val
                var maxlength= this.maxlength
            
                if (isNaN(val)) {
                return 0; 
                }
                else {
                    return ((maxlength-val)/maxlength)*this.c;
                }
            }, //dashoffset
        }, //computed
    } //default
</script>

<style lang= "less" scoped>

    .progressCircle {
        display: inline-flex;
        height: 32px;
        width: 32px;
        border-radius: 100%;
        position: relative;

        #svg {
            
            circle {
                stroke-dashoffset: 0;
                transition: stroke-dashoffset 0.25s linear;
                stroke: #666;
                stroke-width: 4px;

                #bar {
                    stroke: #FF9F1E;
                }

                #warn {
                    stroke: red;
                }
            }
        }

        &:after {
            position: absolute;
            display: block;
            height: 160px;
            width: 160px;
            left: 50%;
            top: 50%;
            content: attr(data-pct);
            margin-top: -80px;
            margin-left: -80px;
            border-radius: 100%;
            font-weight: bold;
            font-size: @fontSizeSm;
            line-height: 160px;
            text-align: center;
        }
    }
</style>