export const alerts = {

  data() {
    const d_warning = "";
    const d_danger = "";
    return {
      d_warning,
      d_danger
    };
  }, //data

  computed: {
    alertObject: function() {
      return { error: this.d_danger, warning: this.d_warning };
    }
  }, //computed

	methods: {
		//use by form elements sent via slot 
		alerts: function (type, message) {
			// console.log(message);
			if (type == "warning") {
				this.d_warning = message;
			} else if (type == "error") {
				this.d_danger = message;
			} else {
				alert("error in input alert module");
      }
		} //alerts
	}, //methifs

  // watch: {
  //   //send warning messages back to parent component
  //   warning: function(newValue) {
  //     this.$emit("notify", "warning", newValue);
  //   },

  //   //send error messages back to parent component
  //   danger: function(newValue) {
  //     this.$emit("notify", "error", newValue);
  //   }
  // }, //watch
};
