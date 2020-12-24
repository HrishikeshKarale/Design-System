<template>
                           <article id= 'forms'>
                    <h1>Forms</h1>
                    <p>
                        Forms are commonly used to provide user interaction on websites and in web applications. For example, login, registering, commenting, and purchasing. This tutorial shows you how to create accessible forms. The same concepts apply to all forms, whether they are processed client or server-side.
                    </p>
                    <p>
                        Aside from technical considerations, users usually prefer simple and short forms. Only ask users to enter what is required to complete the transaction or process; if irrelevant or excessive data is requested, users are more likely to abandon the form.
                    </p>
                    <p>Some general Considerations while designing a form are as follows:</p>
                    <ul>
                        <li>
                            <label>Labeling Controls:</label>
                            <p>
                                Use the <code>&lt;label&gt;</code> element, and, in specific cases, other mechanisms (e.g. WAI-ARIA, <code>title</code> attribute etc.), to identify each form control.
                            </p>
                        </li>
                        <li>
                            <label>Grouping Controls:</label>
                            <p>
                                Use the <code>&lt;fieldset&gt;</code> and <code>&lt;legend&gt;</code> elements to group and associate related form controls.
                            </p>
                        </li>
                        <li>
                            <label>Form Instructions:</label>
                            <p>
                                Provide instructions to help users understand how to complete the form and individual form controls.
                            </p>
                        </li>
                        <li>
                            <label>Validating Input:</label>
                            <p>
                                Validate input provided by the user and provide options to undo changes and confirm data entry.
                            </p>
                        </li>
                        <li>
                            <label>User Notifications:</label>
                            <p>
                                Notify users about successful task completion, any errors, and provide instructions to help them correct mistakes.
                            </p>
                        </li>
                        <li>
                            <label>Multi-Page Forms:</label>
                            <p>
                                Divide long forms into multiple smaller forms that constitute a series of logical steps or stages and inform users about their progress.
                            </p>
                        </li>
                        <li>
                            <label>Custom Controls:</label>
                            <p>
                                Use stylized form elements and other progressive enhancement techniques to provide custom controls.
                            </p>
                        </li>
                    </ul>
                    <section id= "importance">    
                        <h3>Why is this important?</h3>
                        <p>
                            Forms can be visually and cognitively complex and challenging to use. Accessible forms are easier to use for everyone, including people with disabilities.
                        </p>
                        <ul>
                            <li><strong>People with cognitive disabilities</strong> can better understand the form and how to complete it, as making forms accessible improves the layout structure, instructions, and feedback.</li>
                            <li><strong>People using speech input</strong> can use the labels via voice commands to activate controls and move the focus to the fields that they have to complete.</li>
                            <li><strong>People with limited dexterity</strong> benefit from large clickable areas that include the labels, especially for smaller controls, such as radio buttons and checkboxes.</li>
                            <li><strong>People using screen readers</strong> can identify and understand form controls more easily because they are associated with labels, field sets, and other structural elements.</li>
                        </ul>
                        <good-vs-bad
                            message= 'A well structured form provides the user with an optimal user experience.'
                        >
                            <template slot= 'good'>
                                <fieldset style= 'width: 400px;'>
                                    <legend style= 'color: #FFFFFF; 
                                                    background-color: #00B6A8;
                                                    text-align: center;'>
                                        <h2>C O M E T</h2>
                                    </legend>
                                    <h4 style= 'color: #333333;
                                                font-weight: bold;'>
                                        Personal Information
                                    </h4>
                                    <text-input 
                                        label= "First Name"
                                        name= "usernameTextField"
                                        :value= 'd_textBoxValue'
                                        placeholder= "Enter text here..."
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        @notify= 'alerts'
                                        @value= 'val=> d_textBoxValue = val'
                                    />
                                    <text-input 
                                        label= "Last Name"
                                        name= "passwordTextField"
                                        :value= 'd_textBoxValue'
                                        placeholder= "Enter text here..."
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        @notify= 'alerts'
                                        @value= 'val=> d_textBoxValue = val'
                                    />
                                    <radio-input 
                                        label= "Gender"
                                        name= "checkboxField"
                                        :value= "d_radio1"
                                        :options= 'd_gender'
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        @notify= 'alerts'
                                        @value= 'val=> d_radio1 = val'
                                    />
                                    <vue-date
                                        label= "Date of Birth"
                                        name= "d_DdateField"
                                        :value= "d_dateValue"
                                        :setDefaultDate= "d_booleanTrue"
                                        min= "2000-12-12"
                                        max= "2040-12-12"
                                        :readonly= 'd_booleanTrue'
                                        inputIcon= "fas fa-calendar-alt"
                                        @notify= 'alerts'
                                        @value= 'val=> d_dateValue = val'
                                    />
                                    <h4 style= 'color: #333333;
                                                font-weight: bold;'>
                                        Contact Information
                                    </h4>
                                    <email-input 
                                        label= "Email"
                                        name= "passwordTextField"
                                        value= 'SFrye@gmail.com'
                                        placeholder= "Enter text here..."
                                        :readonly= 'd_booleanTrue'
                                        inputIcon= "fas fa-at"
                                    />
                                    <text-input 
                                        label= "Phone Number"
                                        name= "passwordTextField"
                                        value= ''
                                        placeholder= "Enter landline number..."
                                        :readonly= 'd_booleanTrue'
                                        inputIcon= "fas fa-phone"
                                    />
                                    <text-input 
                                        label= "Mobile Number"
                                        name= "passwordTextField"
                                        value= '585520727'
                                        placeholder= "Enter your mobile number..."
                                        :readonly= 'd_booleanTrue'
                                        :required= 'd_booleanTrue'
                                        inputIcon= "fas fa-mobile-alt"
                                        :alertMessage= "d_alertMessage"
                                    />
                                    <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Confirm"
                                            category= "small"
                                            icon= "fas fa-clipboard-check"
                                            :ctx= 'buttonClick'
                                        />
                                        <div class= 'divide16'/>
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Cancel"
                                            category= "text"
                                            :ctx= 'buttonClick'
                                        />
                                    </div>
                                </fieldset>
                            </template>
                            <template slot= 'bad'>
                                <fieldset style= ''>
                                    <h2>C O M E T</h2>
                                    <text-input 
                                        label= "Please write your first name"
                                        name= "usernameTextField"
                                        value= 'Steven'
                                        placeholder= "Enter text here..."
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                    />
                                    <text-input 
                                        label= "My Last name is"
                                        name= "passwordTextField"
                                        value= 'Frye'
                                        placeholder= "Enter text here..."
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                    />
                                    <radio-input 
                                        label= "I am"
                                        name= "checkboxField"
                                        :value= "d_radioValue"
                                        :options= 'd_gender'
                                        :required= 'd_booleanTrue'
                                        :readonly= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                        @notify= 'alerts'
                                        @value= 'val=> d_radioValue = val'
                                    />
                                    <vue-date
                                        label= "My DOB is"
                                        name= "d_DdateField"
                                        :value= "d_dateValue"
                                        min= "2000-12-12"
                                        max= "2040-12-12"
                                        :readonly= 'd_booleanTrue'
                                        :setDefaultDate= "d_booleanTrue"
                                        :inline= 'd_booleanTrue'
                                        @notify= 'alerts'
                                        @value= 'val=> d_dateValue = val'
                                    />
                                    <email-input 
                                        label= "Email me at"
                                        name= "passwordTextField"
                                        value= 'SFrye@gmail.com'
                                        placeholder= "Enter text here..."
                                        :readonly= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                    />
                                    <text-input 
                                        label= "what is your phone no?"
                                        name= "passwordTextField"
                                        value= ''
                                        placeholder= "Enter landline number..."
                                        :readonly= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                    />
                                    <text-input 
                                        label= "Mobile No "
                                        name= "passwordTextField"
                                        value= '585520727'
                                        placeholder= "Enter your mobile number..."
                                        :readonly= 'd_booleanTrue'
                                        :required= 'd_booleanTrue'
                                        :inline= 'd_booleanTrue'
                                        :alertMessage= "d_alertMessage"
                                    />
                                </fieldset>
                            </template>
                        </good-vs-bad>
                    </section>
                    <section id= 'dosVsDonts'>
                        <h3>
                            Do's vs Dont's
                        </h3>
                        <p>Whether it is a signup flow, a multi-view stepper, or a monotonous data entry interface, forms are one of the most important components of digital product design. This article focuses on the common dos and don’ts of form design. Keep in mind that these are general guideline and there are exceptions to every rule.</p>
                        <div 
                            id= 'alignTheSection'
                            class= 'subSection'
                        >
                            <h4>
                                Align the sections
                            </h4>
                            <p>
                                Alignment is nothing but arranging text in the most efficient way- allowing for efficient, effective scanning and limiting errors or missed fields. Aligned labels are best for readability and completion. Basically, having the label text as close to the input field makes the grouping more relatable. It is easier to associate them due to their proximity. So the top-left aligned labels work pretty well in this case. It has upper edge as it required fewer ‘visual fixations’, helping the viewer scan the form in one go
                            </p>
                            <p>
                                Google’s UX researchers found that aligning labels above fields on the left-hand side increased form completion time. This is because it requires fewer ‘visual fixations’, as illustrated in the diagram below.
                            </p>
                            <good-vs-bad
                                message= 'Aligning labels above fields on the left-hand side increased form completion time.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <h3 style= 'color: #003A65;'>
                                            Log In
                                        </h3>
                                        <text-input 
                                            label= "Username"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <password-input 
                                            label= "Password"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <checkbox-input 
                                            label= "Remember Me"
                                            name= "shipDyaCheckboxField"
                                            :value= 'd_checkboxValue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_checboxValue = val'
                                        />
                                    </fieldset>
                                </template>

                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                            <h3 style= 'color: #003A65;'>
                                                Log In
                                            </h3>
                                            <text-input 
                                                label= "Username"
                                                name= "usernameTextField"
                                                :value= 'd_textBoxValue'
                                                placeholder= "Enter text here..."
                                                :required= 'd_booleanTrue'
                                                :readonly= 'd_booleanTrue'
                                                :inline= 'd_booleanTrue'
                                                @notify= 'alerts'
                                                @value= 'val=> d_textBoxValue = val'
                                            />
                                            <password-input 
                                                label= "Password"
                                                name= "passwordTextField"
                                                :value= 'd_textBoxValue'
                                                placeholder= "Enter text here..."
                                                :required= 'd_booleanTrue'
                                                :readonly= 'd_booleanTrue'
                                                :inline= 'd_booleanTrue'
                                                @notify= 'alerts'
                                                @value= 'val=> d_textBoxValue = val'
                                            />
                                            <checkbox-input 
                                                label= "Remember Me"
                                                name= "shipDyaCheckboxField"
                                                :value= 'd_checkboxValue'
                                                @notify= 'alerts'
                                                @value= 'val=> d_checkboxValue = val'
                                            />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                            <good-vs-bad
                                message= 'Aligning labels above fields on the left-hand side increased form completion time.'
                            >
                                <template slot= 'bad'>
                                    <fieldset style= ''>
                                        <h2>C O M E T</h2>
                                        <text-input 
                                            label= "Please write your first name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "My Last name is"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "I am"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "My DOB is"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <email-input 
                                            label= "Email me at"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "what is your phone no?"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile No "
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            :inline= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <h2>C O M E T</h2>
                                        <text-input 
                                            label= "Please write your first name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "My Last name is"
                                            name= "passwordTextField"
                                            Value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "I am"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "My DOB is "
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <email-input 
                                            label= "Email me at"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "what is your phone no? "
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile No"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'groupRelatedFields'
                            class= 'subSection'
                        >
                            <h4>
                                Group Related Fields
                            </h4>
                            <p>
                                Grouping information into chunks is an easy way to highlight association. These steps are even more emphasised if each section is given their respective header, and are neatly arranged in a top-down order.
                            </p>
                            <p>
                                Don’t forget to provide a good amount of breathing space (padding/ distance) between the individual sections to distinguish them.
                            </p>
                            <good-vs-bad
                                message= 'If the form has more than six fields, it is recommended to group them into logical sections.'
                            >
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <h2>C O M E T</h2>
                                        <text-input 
                                            label= "Please write your first name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "My Last name is"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "I am"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "My DOB is "
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <email-input 
                                            label= "Email me at"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "what is your phone no?"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile No"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <h2>C O M E T</h2>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "Please write your first name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "My Last name is "
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "I am"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "My DOB is"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email me at"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "what is your phone no?"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile No"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'writeClearLabels'
                            class= 'subSection'
                        >
                            <h4>
                                Write Clear Labels
                            </h4>
                            <p>
                                Using succinct and crisp labels. It helps the user understand what information is required in one glance. Avoid using complete sentences to explain simple questions, just one or two words generally suffice.
                            </p>
                            <good-vs-bad
                                message= 'A clear Label helps users to quickly scan your form.'
                            >
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <h2>C O M E T</h2>
                                        <h4>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "Please write your first name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "My Last name is"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "I am"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "My DOB is"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email me at"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "what is your phone no?"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile No"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003a65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'inputFieldFormat'
                            class= 'subSection'
                        >
                            <h4>
                                Input Field Format
                            </h4>
                            <p>
                                Don’t make the user guess the input the information format. It’s considered a good practice to design the input fields in a customised manner, which explicitly shows how the information is to be fed in. Even short help messages (like password setting guidelines) mentioned clearly next to the input box reduce errors while form filling.
                            </p>
                            <p>
                                To create a clear distinction between the foreground and background, a different shade can be used for the input fields. Here, the rectangles are filled in with a solid white while the borders are made subtler.
                            </p>
                            <good-vs-bad
                                message= 'Leaving the value type to a users imagination creates an opening for potential unwanted errors/warnings. '
                            >
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=>d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'CTAConversion'
                            class= 'subSection'
                        >
                            <h4>
                                Call-To-Action (CTA) Conversion
                            </h4>
                            <p>
                                Now that the form looks pretty neat, let’s concentrate on the call to actions. Most forms will have at least two call to actions — proceed and cancel. Here, submitting the form is definitely more important, hence it is the primary CTA, whereas cancel the Secondary one. Prominence must be given to these accordingly depending on their significance.
                            </p>
                            <p>
                                CTAs can either look like a solid rectangular button, or a text link. Depending on your use case, make sure that only ONE of them is the prominent one.
                            </p>
                            <good-vs-bad
                                message= 'A positive action should be easily distinguishable with a negative action.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "OK"
                                                category= "small"
                                                icon= "fas fa-clipboard-check"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>

                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radioValue"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_radioValue = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "OK"
                                                category= "standard"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "standard"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                            <good-vs-bad
                                message= 'CTA"s should add value to your form.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <h3 style= 'color: #003A65;'>
                                            C O M E T
                                        </h3>
                                        <text-input 
                                            label= "Username"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-user"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <password-input 
                                            label= "Password"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-key"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <checkbox-input 
                                            label= "Remember Me"
                                            name= "shipDyaCheckboxField"
                                            :value= 'd_checkboxValue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_checkboxValue = val'
                                        />
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Log In"
                                            category= "fullWidth"
                                            icon= "fas fa-sign-in-alt"
                                            :ctx= 'buttonClick'
                                        />
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Forgot Username and/or Password"
                                            category= "text"
                                            :ctx= 'buttonClick'
                                        />
                                    </fieldset>
                                </template>
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <h3 style= 'color: #003A65;'>
                                            C O M E T
                                        </h3>
                                        <text-input 
                                            label= "Username"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-user"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <password-input 
                                            label= "Password"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-key"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <checkbox-input 
                                            label= "Remember Me"
                                            name= "shipDyaCheckboxField"
                                            :value= 'd_checkboxValue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_checkboxValue = val'
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Log In"
                                                category= "standard"
                                                icon= "fas fa-unlock-alt"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Forgot Username and/or Password"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                                                           </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'tailorYourCTA'
                            class= 'subSection'
                        >
                            <h4>
                                Tailor Your Call-To-Action (CTA)
                            </h4>
                            <p>
                                The most effective CTAs work because they offer a clear value proposition. They exactly mention what’s going to happen once you hit on the button. This clarity is essential for great CTAs, and can go a long way in making the design more compelling and trustworthy.
                            </p>
                            <good-vs-bad
                                message= 'CTA"s should be precise and clear avoiding any confusion.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio2"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @value= 'val=> d_radio2 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Confirm"
                                                category= "small"
                                                icon= "fas fa-clipboard-check"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio3"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= "alerts"
                                            @value= 'val=> d_radio3 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "OK"
                                                category= "small"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                            <good-vs-bad
                                message= 'Sometimes a clear precise CTA is all you need.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <h3 style= 'color: #003A65;'>
                                            C O M E T
                                        </h3>
                                        <text-input 
                                            label= "Username"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-user"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <password-input 
                                            label= "Password"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-key"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <checkbox-input 
                                            label= "Remember Me"
                                            name= "shipDyaCheckboxField"
                                            :value= 'd_checkboxValue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_checkboxValue = val'
                                        />
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Log In"
                                            category= "fullWidth"
                                            icon= "fas fa-sign-in-alt"
                                            :ctx= 'buttonClick'
                                        />
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Forgot Username and/or Password"
                                            category= "text"
                                            :ctx= 'buttonClick'
                                        />
                                    </fieldset>
                                </template>

                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <h3 style= 'color: #003A65;'>
                                            C O M E T
                                        </h3>
                                        <text-input 
                                            label= "Username"
                                            name= "usernameTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-user"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <password-input 
                                            label= "Password"
                                            name= "passwordTextField"
                                            :value= 'd_textBoxValue'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-key"
                                            @notify= 'alerts'
                                            @value= 'val=> d_textBoxValue = val'
                                        />
                                        <checkbox-input 
                                            label= "Remember Me"
                                            name= "shipDyaCheckboxField"
                                            :value= 'd_checkboxValue'
                                            @notify= 'alerts'
                                            @value= 'val=> d_checkboxValue = val'
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Log In"
                                                category= "standard"
                                                icon= "fas fa-unlock-alt"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Reset"
                                                category= "text"
                                                icon= "fas fa-redo"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                        <vue-button 
                                            type= "button"
                                            tag= "consoleTextButton"
                                            text= "Forgot Username and/or Password"
                                            category= "text"
                                            :ctx= 'buttonClick'
                                        />
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'validateTheForm'
                            class= 'subSection'
                        >
                            <h4>
                                Validate The Form
                            </h4>
                            <p>
                                Generally speaking there are three important messages that a good form validation should convey to the user:
                            </p>
                            <ul>
                                <li >
                                    <label>An error has occurred:</label>
                                    <p>
                                        Display clearly that there is an error in the form, preferably using a red color signal to attract attention.
                                    </p>
                                </li>
                                <li>
                                    <label>Where the error occurred:</label>
                                    <p>
                                        Highlighting the fields that caused the error.
                                    </p>
                                </li>
                                <li>
                                    <label>How the error can be repaired:</label>
                                    <p>
                                        Provide information on what needs to be different in order for the field to validate.
                                    </p>
                                </li>
                            </ul>
                            <p>
                                All these have one clear goal: to avoid confusion. To minimise drop-outs, make sure to create validation that eliminates any risk of customers being confused.
                            </p>
                            <good-vs-bad
                                message= 'Don’t validate after each character typed.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio4"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @value= 'val=> d_radio4 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            :alertMessage= "d_alertMessage"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Confirm"
                                                category= "small"
                                                icon= "fas fa-clipboard-check"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <vue-alert 
                                            type= 'danger'
                                            alert= 'Error'
                                            message= 'Form could not be submitted'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio5"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= "alerts"
                                            @value= 'val=> d_radio5 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Confirm"
                                                category= "small"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                        <div 
                            id= 'useColorsEfficiently'
                            class= 'subSection'
                        >
                            <h4>
                                Use Colors Efficiently
                            </h4>
                            <p>
                                Colors can be cleverly used to direct the user’s attention, and add an aesthetic appeal to the design. The trick is to stick to not more than 2 main colors in the page. Just make sure to use them wisely, keeping the main goal of the form in mind.
                            </p>
                            <good-vs-bad
                                message= 'Use color to highlight or complement what is already visible.'
                            >
                                <template slot= 'good'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #FFFFFF; 
                                                        background-color: @secondaryColor;
                                                        text-align: center;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #333333;
                                                    font-weight: bold;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio6"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= "alerts"
                                            @value= 'val=> d_radio6 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #333333;
                                                    font-weight: bold;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            :alertMessage= "d_alertMessage"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Confirm"
                                                category= "small"
                                                icon= "fas fa-clipboard-check"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                                <template slot= 'bad'>
                                    <fieldset style= 'width: 400px;'>
                                        <legend style= 'color: #003A65;'>
                                            <h2>C O M E T</h2>
                                        </legend>
                                        <h4 style= 'color: #003A65;'>
                                            Personal Information
                                        </h4>
                                        <text-input 
                                            label= "First Name"
                                            name= "usernameTextField"
                                            value= 'Steven'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <text-input 
                                            label= "Last Name"
                                            name= "passwordTextField"
                                            value= 'Frye'
                                            placeholder= "Enter text here..."
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                        />
                                        <radio-input 
                                            label= "Gender"
                                            name= "checkboxField"
                                            :value= "d_radio7"
                                            :options= 'd_gender'
                                            :required= 'd_booleanTrue'
                                            :readonly= 'd_booleanTrue'
                                            @notify= "alerts"
                                            @value= 'val=> d_radio7 = val'
                                        />
                                        <vue-date
                                            label= "Date of Birth"
                                            name= "d_DdateField"
                                            :value= "d_dateValue"
                                            :setDefaultDate= "d_booleanTrue"
                                            min= "2000-12-12"
                                            max= "2040-12-12"
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-calendar-alt"
                                            @notify= 'alerts'
                                            @value= 'val=> d_dateValue = val'
                                        />
                                        <h4 style= 'color: #003A65;'>
                                            Contact Information
                                        </h4>
                                        <email-input 
                                            label= "Email"
                                            name= "passwordTextField"
                                            value= 'SFrye@gmail.com'
                                            placeholder= "Enter text here..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-at"
                                        />
                                        <text-input 
                                            label= "Phone Number"
                                            name= "passwordTextField"
                                            value= ''
                                            placeholder= "Enter landline number..."
                                            :readonly= 'd_booleanTrue'
                                            inputIcon= "fas fa-phone"
                                        />
                                        <text-input 
                                            label= "Mobile Number"
                                            name= "passwordTextField"
                                            value= '(585) 520-727'
                                            placeholder= "Enter your mobile number..."
                                            :readonly= 'd_booleanTrue'
                                            :required= 'd_booleanTrue'
                                            inputIcon= "fas fa-mobile-alt"
                                            :alertMessage= "d_alertMessage"
                                        />
                                        <div style= ' display: flex; flex-direction: row-reverse; flex-wrap: wrap;'>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Confirm"
                                                category= "small"
                                                icon= "fas fa-clipboard-check"
                                                :ctx= 'buttonClick'
                                            />
                                            <div class= 'divide16'/>
                                            <vue-button 
                                                type= "button"
                                                tag= "consoleTextButton"
                                                text= "Cancel"
                                                category= "text"
                                                :ctx= 'buttonClick'
                                            />
                                        </div>
                                    </fieldset>
                                </template>
                            </good-vs-bad>
                        </div>
                    </section>
                </article>
</template>

<script>

    import goodVsBad from "@/Views/goodVsBad"
    import vueButton from "@/components/UIComponents/Buttons"
    import vueAlert from "@/components/Alerts/vueAlert"
    import textInput from "@/components/FormElements/textInput";
    import passwordInput from "@/components/FormElements/passwordInput";
    import emailInput from "@/components/FormElements/emailInput";
    import numberInput from "@/components/FormElements/numberInput";
    import fileInput from "@/components/FormElements/fileInput";
    import searchableDropdownList from "@/components/FormElements/searchableDropdownList";
    import dropdownList from "@/components/FormElements/dropdownList";
    import multiToggle from "@/components/FormElements/multiToggle";
    import checkboxInput from "@/components/FormElements/checkboxInput";
    import radioInput from "@/components/FormElements/radioInput";
    import vueDate from "@/components/FormElements/vueDate";
    import vueTextarea from "@/components/FormElements/vueTextarea";
    import vueInfo from "@/components/FormElements/vueInfo";
    import { alerts } from "@/typeScript/common/alerts"

    export default {
        name: "formElements",

        mixins: [alerts], //mixins

        components: {
            goodVsBad,
            vueButton,
            vueAlert,
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
            vueInfo,
            vueTextarea,
        }, //components

        methods: {
            buttonClick: function () {}, //buttonClick
        }, //methods

        data() {
            const d_radio1= ''
            const d_radio2= ''
            const d_radio3= ''
            const d_radio4= ''
            const d_radio5= ''
            const d_radio6= ''
            const d_radio7= ''
            const d_checkboxValue= ''
            const d_radioValue= ''
            const d_dateValue= ''
            const d_textBoxValue= ''
            const d_booleanTrue= true
            const d_gender= ["Male", "Female", "Other"]
            const d_alertMessage=  {
                error: "Invalid mobile Number. Please enter a valid 10 digit mobile number"
            }
            return {
                d_radio1,
                d_radio2,
                d_radio3,
                d_radio4,
                d_radio5,
                d_radio6,
                d_radio7,
                d_gender,
                d_alertMessage,
                d_checkboxValue,
                d_radioValue,
                d_dateValue,
                d_textBoxValue,
                d_booleanTrue,
            } //return
        }, //data    
    }
</script>

<style lang= "less" scoped>

    @import (reference) "../../../Less/customMixins.less";
    @import (reference) "../../../Less/customVariables.less";
    
    .forms {

        div {
            margin-bottom: 8px;

            & > .FormsTitle {
                margin-bottom: 96px;
                text-align: center; 
            }
        }
    }
</style>