<template>
    <div class= 'contentSubnavLayout'>
        <div class= 'content'>
            <slot name= "left"/>
        </div>
        <ul class= 'contentNav'>
            <li><h4>Content</h4></li>
            <slot name= "right"/>
            <li>
                <img :src= "d_Comet" alt= "COMET">
            </li>
            <li>
                <img :src= "d_VueJs" alt= "VUE JS">
            </li>
            <li>
                <img :src= "d_Typescript" alt= "Typescript">
            </li>
            <li>
                <img :src= "d_Less" alt= "Less">
            </li>
            <li>
                <img :src= "d_FontAwesome" alt= "Font Awesome 5.9v">
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'contentSubnavLayout',

        data() {
            
            const d_Comet= require('@/assets/SVG/COMET.svg')

            const d_FontAwesome= require('@/assets/SVG/font-awesome-seeklogo.svg')

            const d_Less= require('@/assets/SVG/LESS_Logo.svg')
            
            const d_Typescript= require('@/assets/SVG/typescriptlang-official.svg')
            
            const d_VueJs= require('@/assets/SVG/Vue.js_Logo_2.svg')
            return {

                d_Comet: d_Comet,

                d_FontAwesome: d_FontAwesome,

                d_Less: d_Less,

                d_Typescript: d_Typescript,

                d_VueJs: d_VueJs,
            } //return
        }, //data
        
        // mounted() {
        //     // Cache selectors
        //     //http://jsfiddle.net/go2e6fqp/26/
        //     var lastId,
        //         topMenu = document.getElementsByClassName("contentNav"),
        //         topMenuHeight = topMenu.offsetHeight,

        //         // All list items
        //         menuItems = topMenu[0].getElementsByTagName("a");
        //         // Anchors corresponding to menu items
        //         // scrollItems = menuItems.map(
        //         //     function () {
        //         //         console.log(" yes.", this)
        //         //         var item = this.getAttribute("href");
        //         //         if (item.length) { return item; }
        //         //     }
        //         // );

        //     // Bind click handler to menu items
        //     // so we can get a fancy scroll animation
        //     menuItems.click(
        //         function (e){
        //             var href = this.attr("href"),
        //                 offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+40;
        //             $('html, body').stop().animate({ 
        //                 scrollTop: offsetTop
        //             }, 300);
        //             e.preventDefault();
        //         }
        //     );

        //     // Bind to scroll
        //     $(window).scroll(function (){
        //         // Get container scroll position
        //         var fromTop = $(this).scrollTop()+topMenuHeight;
                
        //         // Get id of current scroll item
        //         var cur = scrollItems.map(function (){
        //             if ($(this).offset().top < fromTop)
        //             return this;
        //         });
        //         // Get the id of the current element
        //         cur = cur[cur.length-1];
        //         var id = cur && cur.length ? cur[0].id : "";
                
        //         if (lastId !== id) {
        //             lastId = id;
        //             // Set/remove active class
        //             menuItems
        //                 .parent().removeClass("active")
        //                 .end().filter("[href='#"+id+"']").parent().addClass("active");
        //         }                   
        //     });
        // }, //mounted
    }

</script>

<style lang= "less" scoped>

    @import (reference) "./../../Less/customMixins.less";
    @import (reference) "./../../Less/customVariables";

    .contentSubnavLayout {

        .navComponent();
        
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        
        & > ul {
            padding: 0;
            margin-left: 4vw;
            
            &.contentNav {
                position: sticky;
                height: fit-content;
                top: 5vh;
                font-size: 16px;

                a {
                    text-decoration: none;
                    color: ~"lighten(@textColor, 8%)";
                }
                
                & > li {
                    list-style: none;
                    margin: @spaceMd 0;

                    & > img {
                        height: 48px;
                        padding: @spaceSm @spaceMd;
                    }

                    & > ul {
                        padding-left: 16px; 
                        
                        & > li {
                            list-style: none;
                        }
                    }
                }
            }
            @media screen {
                @media (max-width: 960px) {
                    display: none !important;
                }
            }
        }
    }
</style>