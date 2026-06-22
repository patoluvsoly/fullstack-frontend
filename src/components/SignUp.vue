<script setup>
import { ref } from 'vue'

const showPassword = ref(false) //controls visibility of password field
const password = ref(null) //model for password field

const confirmPassword= ref(null)
const showConfirm = ref(false)
const rules = {
    required: value => !!value || 'Required.', //if statements
    min: v => v.length >= 8 || 'Min 8 characters', // if statements
    passwordMatch: () => password.value === confirmPassword.value || 'Passwords must match' //function to check if password and confirm password match
  } //validation rules for password fields

//data models
const firstname = ref(null) //NULL MEANS EMPTY. REF MAKES IT REACTIVE
const lastname = ref(null)
const email = ref(null)
const phone = ref(null)
const location = ref(null)
const address = ref(null)

function register()
{
    const data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        location: location.value,
        address: address.value,
        password: password.value,
    }
    try{
        localStorage.setItem("user", JSON.stringify(data)) //store user data in local storage
    }catch{
        console.log("Error signing up")
    }
}

</script>

<template>
    <v-container align="center" class="mt-16">
        <v-row>
            <v-col>
                <v-card max-width="80%" class="bg-secondary">
                    <v-form class="mt-12 mb-6">
                        <v-row>
                            <v-col md="3">
                                <div>first name</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="firstname"></v-text-field>
                            </v-col>
                            <v-col md="3">
                                <div>last name</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="lastname"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="3">
                                <div>Email</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                            <v-col md="3">
                                <div>Phone</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="phone" type="number"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="3">
                                <div>Location</div>
                            </v-col>
                            <v-col md="3">
                                <v-select v-model="location" :items="['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Ruiru']" label="Select your location"></v-select>
                            </v-col>
                            <v-col md="3">
                                <div>Address</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field v-model="address"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="3">
                                <div>Password</div>
                            </v-col>
                            <v-col md="3">
                            <v-text-field 
                                v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword"
                            ></v-text-field>
                            </v-col>
                            <v-col md="3">
                                <div>Confirm Password</div>
                            </v-col>
                            <v-col md="3">
                                <v-text-field 
                                    v-model="confirmPassword"
                                    :append-icon="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.required, rules.min, rules.passwordMatch,]"
                                    :type="showConfirm ? 'text' : 'password'"
                                    variant="outlined"
                                    @click:append="showConfirm = !showConfirm"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="6">
                                <v-btn @click="register()" variant="elevated">Sign Up</v-btn>
                            </v-col>
                            <v-col md="6">
                                <v-text>Already have an account? <v-btn color="primary" variant="text" to="/login">Login</v-btn></v-text>
                            </v-col>
                                

                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>