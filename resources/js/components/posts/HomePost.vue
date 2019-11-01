<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <div> All Posts</div>
                        <router-link :to="{name:'create'}" class="text-primary">Create Post</router-link>
                    </div>

                    <div class="card-body">
                        <div class="card" v-for="post in posts" :key="post.id">
                            <div class="card-body">
                                <h5 class="card-title">{{post.title}}</h5>
                                <p class="card-text">{{post.body}}</p>
                                <p class="card-text"><small class="text-muted">Post on : {{post.created_at}}</small></p>
                                <div class="d-flex justify-content-end">
                                    <router-link :to="{name:'edit', params:{ id: post.id }}" class="text-primary pr-1">Edit</router-link>
                                    |
                                    <a  href="#" class="text-danger pl-1">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                posts: []
            }
        },
        created(){
            this.getAllPosts();
            console.log('R',this.$route.name)
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            getAllPosts(){
                axios.get('/api/posts').then(response=>{
                    this.posts = response.data.data;
                }).catch(error=>{
                    console.log('Error', error);
                })
            }
        }
    }
</script>
