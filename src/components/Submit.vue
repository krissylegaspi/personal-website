<template>
    <form @submit.prevent="submitForm" class="cf">
        <div class="half left cf">
            <input type="text" v-model="fullname" id="input-name" placeholder="Full Name">
            <!-- <span v-if="(!$v.name.required || !$v.name.alpha) && $v.name.$dirty" class="text-danger">Full name is required.</span>
            <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-danger">Full name is required.</span> -->

            <input type="email" v-model="email" id="input-email" placeholder="E-mail Address">
            <!-- <span v-if="(!$v.email.required || !$v.email.email) && $v.name.$dirty" class="text-danger">Valid e-mail address is required.</span> -->
        </div>

        <div class="half right cf">
            <input type="text" v-model="subject" id="input-subject" placeholder="Subject">
            <!-- <span v-if="!$v.subject.required && $v.name.$dirty" class="text-danger">Subject is required.</span> -->

            <textarea name="message" v-model="message" type="text" id="input-message" placeholder="Message">
            </textarea>
            <!-- <span v-if="!$v.message.required && $v.name.$dirty" class="text-danger">Message is required.</span> -->
        </div>

        <button type="submit" value="Submit" id="input-submit">Submit</button>
    </form>
</template>

<script>
import { 
    required, 
    email, 
    alpha
    // maxLength 
    } from 'vuelidate/lib/validators'

export default {
    name: 'Submit',
    data: () => ({
        fullname: '',
        email: '',
        subject: '',
        message: ''
    }),
    validations: {
        fullname: {
            required, 
            alpha
        },
        email: {
            required, 
            email
        },
        subject: {
            required
        },
        message: {
            required
            // maxLength: maxLength(800)
        }
    },
    methods: {
        resetData: function() {
            this.fullname = '';
            this.email = '';
            this.subject = '';
            this.message = '';
        },
        submitForm: function() {
            this.$v.$touch();
            if (this.$v.$pendding || this.$v.$error) return;

            alert('Data Submitted');
            this.$v.$reset();
            this.resetData();
        }
        // submitForm() {
        //     this.$v.$touch();
        //     if (!this.$v.$invalid) {
        //         console.log(
        //             'Full Name: ${this.fullname}, Email: ${this.email}, Subject: ${this.subject}, Message: ${this.message}'
        //         );
        //     }
        // }
    }
}

</script>

<style scoped>

/* *, *:before, *:after {
    @include box-sizing(border-box);
} */

html, body {
    background: transparent;
    padding: 1em;
    font-size: 18px;
}

form {
    max-width: 600px;
    text-align: center;
    margin: 20px auto;
    padding-top: 30px;
}

form input, form textarea {
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    margin-top: 1em;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    resize: none;
    border-radius: 3px;
    font-size: 18px;
}

form textarea {
    height: 126px;
}

/* .half {
    float: left;
    width: 40%;
    margin-bottom: 1em;
}

.right {
    width: 50%;
}

.left {
    margin-right: 2%;
} */

button {
    padding: 10px 45px;
    margin-top: 30px;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

button:hover {
    transform: scale(1.05);
}

button a {
    text-decoration: none;
    color: black;
}

</style>