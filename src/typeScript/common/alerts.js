export const alerts = {

  data() {
    const warning = "";
    const danger = "";
    return {
      warning,
      danger
    };
  }, //data

	methods: {
		//use by form elements sent via slot 
		alerts: function (type, message) {
			// console.log(message);
			if (type == "warning") {
				this.warning = message;
			} else if (type == "error") {
				this.danger = message;
			} else {
				alert("error in input alert module");
			}
		} //alerts
	}, //methifs

  mounted() {
    //something
  }
};
