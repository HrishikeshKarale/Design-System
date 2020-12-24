export const validator = {
  methods: {
    initializeValidator: function(pattern) {
      this.pattern = pattern;
    }, //initializeValidator

    validator: function(object) {
      let dDanger = null;
      let dWarning = null;

      //if value for val(temp) exists check for warning triggers
      if (object.value) {
        //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
        if (
          object.pattern &&
          this.followsPattern(object.pattern, object.value)
        ) {
          dWarning = "Wrong format: Please follow the pattern.";
        } else if (object.minlength) {
          dWarning = this.isTooShort(object.minlength, object.value);
        } else if (object.maxlength) {
          dWarning = this.isTooLong(object.maxlength, object.value);
        } else {
          //emit/send new values to parent component v-model attribute
          this.$emit("value", object.value);
        }
      }
      //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
        dDanger = this.isRequired();
      }

      return { warning: dWarning, error: dDanger };
    }, //validator

    //value ebsent
    isRequired: function() {
      if (this.required) {
        return "Required field.";
      }
      return null;
    }, //isRequired

    //value present
    isTooShort: function(minlength, value) {
      if (minlength > value.length) {
        return (
          "Invalid Input: Allowed minlength for input is " +
          minlength +
          " characters."
        );
      }
      return null;
    }, //isTooShort
    isTooLong: function(maxlength, value) {
      if (maxlength < value.length) {
        return (
          "Invalid Input: Allowed maxlength for input exceeded by " +
          (maxlength.length - value.length) +
          " characters."
        );
      }
      return null;
    }, //isTooLong

    //pattern matching
    followsPattern: function(pattern, value) {
      if (!pattern.test(value)) {
        return "Wrong email format: Please follow the pattern " + pattern;
      }
    } //followsPattern
  },

  mounted() {
    //something
  }
};
