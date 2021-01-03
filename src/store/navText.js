var data= {
    label: '<p>The &lt;label&gt; tag defines a label for a &lt;button&gt;, &lt;input&gt;, &lt;meter&gt;, &lt;output&gt;, &lt;progress&gt;, &lt;select&gt;, or &lt;textarea&gt; element.</p>\
            <p>The &lt;label&gt; element does not render as anything special for the user. However, it provides a usability improvement for mouse users, because if the user clicks on the text within the &lt;label&gt; element, it toggles the control.</p>\
            <p>The for attribute of the &lt;label&gt; tag should be equal to the id attribute of the related element to bind them together.</p>.',

    labelText: "Specifies a Label for the input element.",

    name: "<p>The name attribute specifies a name for the element.</p>\
            <p>This name attribute can be used to reference the element in a JavaScript.</p>\
            <p>For form elements it is also used as a reference when the data is submitted,</p>\
            <p>For iframe element it can be used to target a form submission.</p>\
            <p>For the map element, the name attribute is associated with the &lt;img&gt;'s usemap attribute and creates a relationship between the image and the map.</p>\
            <p>For the meta element, the name attribute specifies a name for the information/value of the content attribute.</p>\
            <p>For the param element, the name attribute is used together with the value attribute to specify parameters for the plugin specified with the &lt;object&gt; tag.</p>",
    nameText: "Specifies the name for the input element.",

    type: '<p>The type attribute specifies the type of button.</p>\
                <p><b>Tip:</b> Always specify the type attribute for the &lt;button&gt; element. Different browsers may use different default types for the &lt;button&gt; element.</p>',
    typeText: 'Specifies that type of button (button|submit|reset)',

    tag: "<p>The tag attribute specifies the name for a &lt;button&gt; tag.</p>\
                        <p>The name attribute is used to reference form-data after the form has been submitted, or to reference the element in a JavaScript.</p>\
                        <p><b>Tip:</b> Several &lt;button&gt; elements can share the same name. This allows you to have several buttons with equal names, which can submit different values when used in a form.</p>",
    tagText: "Specifies a name for the button",

    text: "<p>The text attribute specifies the actual text that is displayed on the &lt;button&gt; tag.</p>",
    textText: "Specified the actual text on the button",

    icon: "<p>The icon attribute specifies the actual icon that is displayed on the &lt;button&gt; tag.</p>",
    iconText: "Specified the icon displayed on the button, use fontawesome class names as input.",

    category: '<p>The category  attribute speficies the style that will be applied to the button</p>',
    categoryText: 'Speficies classes applied to the button',
               ctx: '<p>ctx is a function from our parent vue methods which action should be preformed when the button is clicked.</p>',
    ctxText: "Specifies the function that should be called when the button is clicked.",

    form: '<p>Specifies the form element the &lt;button&gt; element belongs to. The value of this attribute must be the id attribute of a &lt;form&gt; element in the same document.</p>',
    formText: 'Specifies one or more forms the button belongs to',
               value: '<p>The value attribute specifies the value of an input element.</p>\
            <p>The value attribute is used differently for different input types:</p>\
            <ul>\
            <li>For "button", "reset", and "submit" - it defines the text on the button</li>\
            <li>For "text", "password", and "hidden" - it defines the initial (default) value of the input field</li>\
            <li>For "checkbox", "radio", "image" - it defines the value associated with the input (this is also the value that is sent on submit)</li>\
            </ul>\
            <p><b>Note:</b> The value attribute cannot be used with &lt;input type:"file"&gt;.</p>',
               vModel: "<p>You can use the <code>v-model</code> directive to create two-way data bindings on form input, textarea, and select elements. It automatically picks the correct way to update the element based on the input type. Although a bit magical, <code>v-model</code> is essentially syntax sugar for updating data on user input events, plus special care for some edge cases.</p>",
    vModelText: "Specifies a two way data binding for form elements.",

    pattern: "<p>The pattern attribute, when specified, is a regular expression that the input's value must match in order for the value to pass constraint validation. It must be a valid JavaScript regular expression, as used by the RegExp type, and as documented in our guide on regular expressions; the 'u' flag is specified when compiling the regular expression, so that the pattern is treated as a sequence of Unicode code points, instead of as ASCII. No forward slashes should be specified around the pattern text.</p>",
    patternText: "Specifies a regular expression that the input fields's value is checked against.",
               maxlength: "<p>The maximum number of characters (as UTF-16 code units) the user can enter into the text input. This must be an integer value 0 or higher. If no maxlength is specified, or an invalid value is specified, the text input has no maximum length. This value must also be greater than or equal to the value of minlength.</p>\
                <p>The input will fail constraint validation if the length of the text value of the field is greater than maxlength UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.</p>",
    maxlengthText: "Specifies the maximum number of user input characters allowed for the input Field.",
               minlength: "<p>The minimum number of characters (as UTF-16 code units) the user can enter into the text input. This must be an non-negative integer value smaller than or equal to the value specified by maxlength. If no minlength is specified, or an invalid value is specified, the text input has no minimum length.\
                <p>The input will fail constraint validation if the length of the text entered into the field is fewer than minlength UTF-16 code units long. Constraint validation is only applied when the value is changed by the user.</p>",
    minlengthText: "Specifies the minimum number of user input characters allowed for the input Field.",
               placeholder: "<p>The placeholder attribute is a string that provides a brief hint to the user as to what kind of information is expected in the field. It should be a word or short phrase that demonstrates the expected type of data, rather than an explanatory message. The text must not include carriage returns or line feeds.</p>\
                        <p>If the control's content has one directionality (LTR or RTL) but needs to present the placeholder in the opposite directionality, you can use Unicode bidirectional algorithm formatting characters to override directionality within the placeholder; see Overriding BiDi using Unicode control characters in The Unicode Bidirectional Text Algorithm for those characters.</p>",
    placeholderText: "Specifies a short hint that describes the expected value for the input element within the input field.",
               readonly: "<p>A Boolean attribute which, if present, means this field cannot be edited by the user. Its value can, however, still be changed by JavaScript code directly setting the HTMLInputElement.value property.</p>",
    readonlyText: 'Specifies that the input element must be filled out before submitting the form.',
               disabled: "<p>A Boolean attribute which, if present, indicates that the user should not be able to interact with the input. Disabled inputs are typically rendered with a dimmer color or using some other form of indication that the field is not available for use.</p>\
                <p>Specifically, disabled inputs do not receive the click event, and disabled inputs are not submitted with the form.</p>",
    disabledText: "Specifies that the input element should be disabled.",
               autofocus: "<p>A Boolean attribute which, if present, indicates that the input should automatically have focus when the page has finished loading (or when the &lt;dialog&gt containing the element has been displayed)</p>\
                <p>No more than one element in the document may have the autofocus attribute, and autofocus cannot be used on inputs of type hidden, because hidden inputs can't be focused.</p>",
    autofocusText: "Specifies that the input element should automatically get focus when the page loads.",
               required: "<p>required is a Boolean attribute which, if present, indicates that the user must specify a value for the input before the owning form can be submitted.</p>\
                <p>When an input has the required attribute, the :required pseudo-class also applies to it. Conversely, inputs without the required attribute (except the elements that don't support it) have the :optional pseudo-class applied</p>",
    requiredText: "Specifies that the input element must be filled out before submitting the form.",
               icon: '<p> accepts a Boolean value.</p>\
                <p>It specifies thaat the current instance of the textbox within the input tag should be read-only.</p>',
    Text: "Specifies icon displayed within the input element.",
               inline: '<p>label and input field inline when set to true else input field goeson next line.</p>',
    inlineText: "Specifies that the label and input tags within the input element appear on the same line or on different lines.",
               alerts: '<p>@alert is a function defined in our vue methods designed to catch any error/warning messages thrown by the component.</p>\
                <pre>\
                alerts: function (type, message) {<br>\
                        if (type== \'error\') {<br>\
                                this.d_danger= message;<br>\
                        }<br>\
                        else {<br>\
                                this.d_warning= message;<br>\
                        }<br>\
                },</pre>',
    alertsText: "Specifies the function that should be used to catch any alert emitted by the input element.",
               multiple: '<p>The multiple attribute is a boolean attribute.</p>\
                <p>When present, it specifies that multiple options can be selected at once.</p>\
                <p>Selecting multiple options vary in different operating systems and browsers:</p>\
                <ul>\
                <li>For windows: Hold down the control (ctrl) button to select multiple options</li>\
                <li>For Mac: Hold down the command button to select multiple options</li>\
                </ul>\
                <p>Because of the different ways of doing this, and because you have to inform the user that multiple selection is available, it is more user-friendly to use checkboxes instead.</p>',
    multipleText: "Specifies that the input element can accept multiple values.",
               size: '<p>The size attribute specifies the number of visible options in a drop-down list.</p>\
            <p>If the value of the size attribute is greater than 1, but lower than the total number of options in the list, the browser will add a scroll bar to indicate that there are more options to view.</p>',
    sizeText: "Defines the number of visible options in a drop-down list",
               strict: '<p>The strict attribute specifies if a custom user input is allowed as input value for a sarchable dropdown list element</p>',
    strictText: "Specifies if the input element accepts custom user input outside the scope of the options provided in the dropdown.",
               options: '<p>The options attribute specifies a list of possible values to be selected by the user in the form of an array.</p>',
    optionsText: "Specifies a list of possible values for the &lt;text-input&gt element.",
               mask: '<p>The options attribute specifies a mask on the label and input field.</p>\
    <p>The mask can be used when a value is being retrieved from the store or an ajaz call. Instead of waiting for the values to come and then load the page.</p>\
    <p>This option allows the users to use the mask as a placeholder and not delay the fields on the page.</p>',
    maskText: "Masks the label and input field.",
};

export { data as navText };