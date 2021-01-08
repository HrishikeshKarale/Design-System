//https://stackoverflow.com/questions/40573011/dynamically-inject-vue-2-compoonent-from-shortcode

<script>

    import { vueForm } from "vue2-component-library"
    import { vueText as textInput  } from "vue2-component-library"
    import { vuePassword as passwordInput } from "vue2-component-library"
    import { vueEmail as emailInput } from "vue2-component-library"
    import { vueNumber as numberInput } from "vue2-component-library"
    import { vueFile as fileInput } from "vue2-component-library"
    import { vueSearchableDropdown as searchableDropdownList  } from "vue2-component-library"
    import { vueToggle as multiToggle } from "vue2-component-library";
    import { vueDropdown as dropdownList } from "vue2-component-library";
    import { vueCheckbox  as checkboxInput } from "vue2-component-library"
    import vueDate from "vue2-component-library"
    import vueTextarea from "vue2-component-library"
    import vueInfo from "vue2-component-library"
    import vueClipboard from "vue2-component-library"
    import vueModal from "vue2-component-library"
    import vueButton from "vue2-component-library"
    import vueCard from '@/components/UIComponents/Cards/vueCard'
    import vueTable from "vue2-component-library"
    import { vueAlert } from "vue2-component-library"
    import { vueInputResponse as inputResponse } from "vue2-component-library"
    import { vueSideNav as sideNav } from "vue2-component-library"
    import vueWizard from "vue2-component-library"
    import masterDetail from "@/components/UIComponents/MasterDetail/masterDetail"
// import all other dynamically rendered components


    export default {
        components: {
            // let it know what components are there
            vueForm,
            textInput,
            passwordInput,
            emailInput,
            numberInput,
            searchableDropdownList,
            dropdownList,
            fileInput,
            multiToggle,
            checkboxInput,
            checkboxInput,
            vueDate,
            vueTextarea,
            vueInfo,
            vueClipboard,
            vueModal,
            vueButton,
            vueCard,
            vueTable,
            vueAlert,
            inputResponse,
            sideNav,
            vueWizard,
            masterDetail,
        },

        props: ['type', 'props'],

        render(h) {
            var temp= h(this.type, {props: this.props}, this.$slots.default)
            return temp;
            // return h(input, {attrs: {type: "text", id: 'id', class:'btn' }})
            // return h('input', {attrs: {props}},[h('p', 'Example Text')]);
        }
    }
</script>