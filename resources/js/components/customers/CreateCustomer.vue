<template>
    <div>
        <h1>Create A Customer</h1>
        <form @submit.prevent="addCustomer" @keydown="customerForm.onKeydown($event)">
            <alert-error :form="customerForm"></alert-error>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" v-model="customerForm.first_name" :class="{ 'is-invalid': customerForm.errors.has('first_name') }">
                        <has-error :form="customerForm" field="first_name"></has-error>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" class="form-control" v-model="customerForm.last_name" :class="{ 'is-invalid': customerForm.errors.has('last_name') }">
                        <has-error :form="customerForm" field="last_name"></has-error>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="customerForm.email" :class="{ 'is-invalid': customerForm.errors.has('email') }">
                        <has-error :form="customerForm" field="email"></has-error>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Phone:</label>
                        <input type="text" class="form-control" v-model="customerForm.phone":class="{ 'is-invalid': customerForm.errors.has('phone') }">
                        <has-error :form="customerForm" field="phone"></has-error>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Address:</label>
                        <textarea class="form-control" v-model="customerForm.address" rows="5" :class="{ 'is-invalid': customerForm.errors.has('address') }">
                        </textarea>
                        <has-error :form="customerForm" field="address"></has-error>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary" :disable="customerForm.busy">Create</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {

                customerForm:new Form({
                    id:'',
                    first_name:'',
                    last_name:'',
                    email:'',
                    phone:'',
                    address:''
                }),
                formErrors:'',
            }
        },
        methods: {
            addCustomer(){
                this.customerForm.post('/api/customers').then(response=>{
                    this.$router.push({name: 'customers'});
                }).catch(error=>{
                    console.log(error.response.data);
                })
            }
        }
    }
</script>
