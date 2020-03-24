export const validator= {

    data () {

        //stores warning messages thrown by the input fields 
        var d_warning= null,
        //stores danger alerts thrown by the input fields 
        var d_danger= null,
        //stores success message thrown by the input fields 
        var d_success= null,
        //stores info message thrown by the input fields 
        var d_info= null,
        //stores inpu field value
        var d_value= null,
        

        return {

            d_danger: d_danger,
            d_warning: d_warning,
            d_success: d_success,
            d_info: d_info,
            d_value: d_value

        }
    },

    computed: {

        //returns the difference between maxlength and textboxValue.
        //a negative value indicates that we have exceeded the allowed maximum for the textbox and 
        lengthDelta: function () {
            var val= this.d_value
            var maxLength= this.maxlength

            if (maxLength && val) {
                return maxLength- val.length
            }
            return null
        }, //lengthDelta
    }, //computed

    methods: {

        //validate the textbox input and set alert messages if required.
        //it also emits/send the current textbox value to  parent component as v-model attribute value
        validate: function () {
            //loads current value stored from data variables into temp variable val for readability of code
            var val= this.d_value
            var maxlength= this.maxLength
            var minlength= this.minLength

            
            var pattern= null
            if(this.pattern.constructor!= RegExp) {
                pattern= new RegExp (this.pattern)
            }
            else {
                pattern= this.pattern
            }

            //initialize warning and error messages to null to accomodate change in alert messages
            this.d_danger= null
            this.d_warning= null
            //if value for val(temp) exists check for warning triggers
            if (val) {
                //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
                if (pattern && !val.match(pattern))
                {
                    this.d_warning= 'Wrong format: Please follow the pattern '+ pattern;
                }
                //if a pattern does not exist or value matches the pattern, check if minlength exists and length of text entered is less than than maxlength 
                //if true trigger an alert and set warning message
                else if (minlength && minlength> val.length)
                {
                    this.d_warning= 'Invalid Input: Allowed minlength for input is '+minlength+' characters.';
                }
                //if a pattern does not exist or value matches the pattern, check if maxlength exists and length of text entered is greater than maxlength 
                //if true trigger an alert and set warning message
                else if (maxlength && maxlength< val.length)
                {
                    this.d_warning= 'Invalid Input: Allowed maxlength for input exceeded by -'+this.lengthDelta+' characters.';
                }
                else{
                    //emit/send new values to parent component v-model attribute
                    this.$emit('input', val)
                }
            }
            //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
            else {
                if (this.required) {
                    this.d_danger= 'Required field.';
                }
            }
        }, //validate
    }, //methods
}