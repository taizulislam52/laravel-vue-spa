<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col-3">
                        Customers Details
                    </div>
                    <div class="col-7"></div>
                    <div class="col-2">
                        <button class="btn btn-primary" @click="reloadCustomers">Reload</button>
                        <router-link :to="{name:'customer-create'}">Create</router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <div class="row">
                        <div class="col-2">
                            <strong>Search By: </strong>
                        </div>
                        <div class="col-3">
                            <select name="" id="" class="form-control" v-model="fields">
                                <option value="first_name">First Name</option>
                                <option value="last_name">Last name</option>
                                <option value="email">Email</option>
                                <option value="address">Address</option>
                                <option value="phone">Phone</option>
                            </select>
                        </div>
                        <div class="col-7">
                            <input type="text" placeholder="Search here.." class="form-control" v-model="query">
                        </div>
                    </div>
                </div>
                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-show="customers.length" v-for="(customer, index) in customers" :key="customer.id">
                        <th scope="row">{{index+1}}</th>
                        <td>{{customer.first_name}}</td>
                        <td>{{customer.last_name}}</td>
                        <td>{{customer.email}}</td>
                        <td>{{customer.phone}}</td>
                        <td>
                            <router-link :to="{name:'customer-edit',params:{id:customer.id}}">Edit</router-link>
                            <button  class="btn btn-link text-danger" @click="deleteCustomer(customer)" >Delete</button>
                        </td>
                    </tr>
                    <tr v-show="!customers.length">
                        <td colspan="6">
                            <div class="alert alert-danger">
                                No data Found
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <pagination-component v-if="pagination.last_page>1" :pagination="pagination" :offset="5"
                                      @paginate="query===''?getAllCustomers():searchCustomers()"></pagination-component>
            </div>
        </div>
    </div>
</template>

<script>
    import PaginationComponent from "../plugins/PaginationComponent";

    export default {
        components: {PaginationComponent},
        name: "CustomerComponent",
        data() {
            return {
                query: '',
                fields: 'first_name',
                customers: [],
                pagination: {
                    current_page: 1
                }
            }
        },
        created() {
            this.getAllCustomers();
        },
        methods: {
            async getAllCustomers() {
                await axios.get('/api/customers?page=' + this.pagination.current_page).then(res => {
                    this.customers = res.data.data;
                    this.pagination = res.data.meta;
                }).catch(err => {
                    console.log("ERROR", err);
                })
            },
            searchCustomers(){
                axios.get(`/api/customers/search/${this.fields}/${this.query}?page=${this.pagination.current_page}`).then(res=>{
                    this.customers=res.data.data;
                    this.pagination = res.data.meta;
                })
            },
            reloadCustomers(){
                this.query='';
                this.fields='name';
                this.getAllCustomers();
            },
            deleteCustomer(customer){
                if(confirm("Are you sure??")){
                    axios.delete(`/api/customers/${customer.id}`).then(response=>{
                        this.getAllCustomers();
                    });

                }
            }
        },
        watch: {
            query(newQ, oldQ) {
                if(newQ===''){
                    this.getAllCustomers();
                }
                else{
                    this.searchCustomers();
                }
            }
        }
    }
</script>

<style scoped>

</style>
