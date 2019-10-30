<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">See Recent Post</div>

                    <div class="card-body">
                        <div class="card" v-for="post in getAllRecentPosts" :key="post.id">
                            <div class="card-body">
                                <h5 class="card-title">{{post.title}}</h5>
                                <p class="card-text">{{post.body}}</p>
                                <p class="card-text"><small class="text-muted">Post on : {{post.created_at}}</small></p>

                            </div>
                        </div>
                        <div class="d-flex justify-content-center">
                           <span class="mr-1">To see all posts please visit </span><router-link :to="{name:'posts'}">  here</router-link>
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
                getAllRecentPosts: []
            }
        },
        created(){
            this.getRecentPosts()
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            getRecentPosts(){
                axios.get('/api/posts').then(response=>{
                    this.getAllRecentPosts = response.data.data;
                }).catch(error=>{
                    console.log('Error', error);
                })
            }
        }
    }
</script>
