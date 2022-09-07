<script setup>
    import Logo from "./components/Logo.vue";
</script>

<template>

    <nav class="bg-white border-b border-gray-100">

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div class="flex justify-between h-16">

                <div class="flex">

                    <div class="shrink-0 flex items-center">

                        <Logo />

                    </div>

                    <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                        <router-link :to="{name: 'post.Index'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                            Posts
                        </router-link>
                        <router-link :to="{name: 'post.Create'}" active-class="border-b-2 border-indigo-400" class="inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                            Create Post
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </nav>

    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight"> {{ currentPageTitle }} </h2>
        </div>
    </header>

</template>


<script>

    export default {
        computed: {
            currentPageTitle() {
                return this.$route.meta.title
            }
        }
    }

</script>
