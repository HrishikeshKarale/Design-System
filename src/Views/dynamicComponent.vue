//https://stackoverflow.com/questions/40573011/dynamically-inject-vue-2-compoonent-from-shortcode

<script>

    import textInput from "@/components/FormElements/textInput";
    import passwordInput from "@/components/FormElements/passwordInput";
    import emailInput from "@/components/FormElements/emailInput";
    import numberInput from "@/components/FormElements/numberInput";
    import fileInput from "@/components/FormElements/fileInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import multiToggle from "@/components/FormElements/multiToggle";
    import dropdownList from "@/components/FormElements/dropdownList";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import radioInput from "@/components/FormElements/radioInput";
    import vueDate from "@/components/FormElements/vueDate";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    import vueInfo from "@/components/FormElements/vueInfo";
    import vueClipboard from "@/components/Code/vueClipboard";
    import vueModal from "@/components/UIComponents/Modal/vueModal";
    import vueButton from '@/components/UIComponents/Buttons'
    import vueCard from '@/components/UIComponents/Cards/vueCard'
    import vueTable from '@/components/UIComponents/Table/vueTable'
    import vueAlert from '@/components/Alerts/vueAlert'
    import inputResponse from '@/components/Alerts/inputResponse'
    import sideNav from '@/components/UIComponents/Navigation/sideNav'
    import vueWizard from "@/components/UIComponents/StepWizard/vueWizard"
    import masterDetail from "@/components/UIComponents/MasterDetail/masterDetail"
// import all other dynamically rendered components


    export default {
        components: {
            // let it know what components are there
            textInput,
            passwordInput,
            emailInput,
            numberInput,
            searchableDropdownList,
            dropdownList,
            fileInput,
            multiToggle,
            checkboxInput,
            radioInput,
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
            // console.log("YYYYYYYYYYYYYYYYYYYYYYYYY", temp)
            return temp;
            // return h(input, {attrs: {type: "text", id: 'id', class:'btn' }})
            // return h('input', {attrs: {props}},[h('p', 'Example Text')]);
        }
           }
</script>