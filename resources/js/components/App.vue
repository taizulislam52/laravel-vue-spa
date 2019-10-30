<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'posts'}" class="nav-link">Posts</router-link>
                </li>
            </ul>
        </nav><br />
        <router-view></router-view>
    </div>
</template>

<style>

</style>

<script>

    export default{
    }
</script>
