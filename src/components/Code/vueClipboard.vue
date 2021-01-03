<template>
  <div class="copyClipboard">
    <vue-button
      type="button"
      :tag="tag"
      :text="text"
      :icon="icon"
      :category="category"
      :ctx="copyToClipboard.bind(this)"
    />
    <textarea :id="id" :value="copy"></textarea>
  </div>
</template>
<script>
import vueButton from "@/components/UIComponents/Button";

export default {
  name: "VueClipboard",

  components: {
    vueButton
  }, //components

  props: {
    text: {
      required: false,
      type: String,
      default: ""
    },

    tag: {
      required: false,
      type: String,
      default: "copyToClipboard"
    },

    icon: {
      required: false,
      type: String,
      default: "fas fa-copy"
    },

    category: {
      required: false,
      type: String,
      default: "small"
    },

    //content to be copied
    copy: {
      type: String,
      required: true
    },

    id: {
      required: true,
      type: String
    }
  }, //props

  methods: {
    copyToClipboard: function() {
      const tempId = "#" + this.id;
      const codeToCopy = document.querySelector(tempId);
      codeToCopy.style.display = "block";
      codeToCopy.select();

      try {
        const successful = document.execCommand("copy");
        // document.execCommand("copy");
        const msg = successful ? "successful" : "unsuccessful";
        alert("code copied!", msg);
        // console.log('copy successfull', tempId)
        // alert("copied: ", successful)
      } catch (err) {
        alert("Oops, unable to copy");
      }

      document.querySelector(tempId).style.display = "none";
      window.getSelection().removeAllRanges();
    } //copyToClipboard
  } //methods
}; //default
</script>

<style lang="less" scoped>
.copyClipboard {
  display: flex;

  textarea {
    display: none;
  }
}
</style>
