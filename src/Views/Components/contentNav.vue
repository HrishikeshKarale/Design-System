<template>
    <div class= 'contentNav'>
        <content-subnav-layout> 
            <template slot= 'left'>
                <slot/>
            </template>
                    
            <template slot= 'right'>
                <li>
                    <a :href= '"#"+title'>
                        {{title}}
                    </a>
                </li>
                <li>
                    <a href= '#AttributeTable'>
                        Attribute Table
                    </a>
                </li>
                <li>
                    <a href= '#AttributeDetails'>
                        Attribute Details
                    </a>
                    <ul v-if= "attributes!= null">
                        <li
                            v-for= "(attr, index) in attributes"
                            :key= "index"
                        >
                            <a :href= '"#"+attr.type'>
                                {{attr.type}}
                            </a>
                        </li>
                    </ul>
                </li>
            </template>
        </content-subnav-layout>
    </div>
</template>

<script>

    import contentSubnavLayout from '@/components/Layout/contentSubnavLayout'

    export default {
        name: "contentNav",

        props: {
            
            attributes: {
                required: true,
                type: Array,
                default: []
            },
            
            title: {
                required: true,
                type: String,
                default: null
            }
        }, //props

        components: {
            
            contentSubnavLayout,
        }, //components
    } // default
</script>
