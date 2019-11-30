<template>
    <div class="container">
        <form>
            <div class="row" v-if="!isSubmitted">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <full-name v-model="userData.fullName"></full-name>


                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="email">Email</label><br>
                            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                            <input type="email"
                                    id="email"
                                    class="form-control"
                                    v-model="userData.email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="password">Password</label><br>
                            <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
                            <input type="password"
                                    id="password"
                                    class="form-control"
                                    v-model="userData.password" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <label for="yes">
                                <input
                                        type="radio"
                                        id="yes"
                                        value="true"
                                        v-model="userData.storeData"> Yes
                            </label>
                            <label for="no">
                                <input
                                        type="radio"
                                        id="no"
                                        value="false"
                                        v-model="userData.storeData"> No
                            </label>
                        </div>
                    </div>
                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->
                    <div class="row">
                        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
                            <button class="btn btn-success" @click.prevent="submitForm()" type="submit">Submit</button>
                        </div>
                    </div>
                    

                    
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ userData.fullName}}</p>
                        <p>Mail: {{ userData.email }}</p>
                        <p>Password: {{ userData.password }}</p>
                        <p>Store in Database?: {{ userData.storeData }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName  from './FullName.vue'
    export default {
        data() {
            return {
                userData: {
                    fullName: 'Sébastien Tachier',
                    password: '',
                    email: '',
                    storeData: false
                },
                isSubmitted: false
            }
        },
        methods:{
            submitForm() {
                this.isSubmitted = true
            }
        },
        components: {
            'full-name': FullName
        }
    }
</script>

<style>
</style>
