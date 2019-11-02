<template>
    <div>
        <router-link :to="{name:'customers'}">back to customers</router-link>
        <h1>Edit Customer</h1>
        <form @submit.prevent="updateCustomer">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>First Name:</label>
                        <input type="text" class="form-control" v-model="customer.first_name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Last Name:</label>
                        <input type="text" class="form-control" v-model="customer.last_name">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Email:</label>
                        <input type="email" class="form-control" v-model="customer.email">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Phone:</label>
                        <input type="text" class="form-control" v-model="customer.phone">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label>Address:</label>
                        <textarea class="form-control" v-model="customer.address" rows="5"></textarea>
                    </div>
                </div>
            </div><br />
            <div class="form-group">
                <button class="btn btn-primary">update</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                customer: {}
            }
        },
        created() {
            axios.get(`/api/customers/${this.$route.params.id}`).then((response) => {
                this.customer = response.data.data;
            });
        },
        methods: {
            updateCustomer() {
                axios.patch(`/api/customers/${this.$route.params.id}`, this.customer).then((response) => {
                    this.$router.push({name: 'customers'});
                });
            }
        }
    }
</script>
