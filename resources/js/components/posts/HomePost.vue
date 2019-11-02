<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div> All Posts</div>
                        <router-link :to="{name:'post-create'}" class="text-primary">Create Post</router-link>
                    </div>

                    <div class="card-body">
                        <div class="card" v-for="post in posts" :key="post.id">
                            <div class="card-body">
                                <h5 class="card-title">{{post.title}}</h5>
                                <p class="card-text">{{post.body}}</p>
                                <p class="card-text"><small class="text-muted">Post on : {{post.created_at}}</small></p>
                                <div class="d-flex justify-content-end align-items-baseline">
                                    <router-link :to="{name:'post-edit', params:{ id: post.id }}" class="text-primary pr-1">Edit</router-link>
                                    |
                                    <button  class="btn btn-link text-danger" @click="deletePost(post)" >Delete</button>

                                </div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <pagination-component v-if="pagination.last_page >1" :pagination="pagination" :offset="5"
                                                  @paginate="getAllPosts()"></pagination-component>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import PaginationComponent from "../plugins/PaginationComponent";
    export default {
        components:{PaginationComponent},
        data(){
            return {
                posts: [],
                pagination: {
                    current_page: 1
                }
            }
        },
        created(){
            this.getAllPosts();
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            getAllPosts(){
                axios.get('/api/posts?page=' + this.pagination.current_page).then(response=>{
                    this.posts = response.data.data;
                    this.pagination=response.data.meta;
                }).catch(error=>{
                    console.log('Error', error);
                })
            },
            deletePost(post){
                if(confirm("Are you sure to Delete")){
                    axios.delete(`/api/posts/${post.id}`).then(response=>{
                        this.getAllPosts();
                    })
                }
            }
        }
    }
</script>
