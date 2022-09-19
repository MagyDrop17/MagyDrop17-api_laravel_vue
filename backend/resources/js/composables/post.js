import axios from 'axios';
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router';

export default function usePost() {

    const posts = ref([]);
    const post = ref([]);
    const router = useRouter();
    const validationErrors = ref([]);
    const isLoading = ref(false);
    const swal = inject('$swal');

    const getPosts = async (page = 1,
                            category = '',
                            order_column = 'created_at',
                            order_direction = 'desc') => {

        try {

            axios.get('/api/posts?page=' + page
                                + '&category=' + category
                                + '&order_column=' + order_column
                                + '&order_direction=' + order_direction)
                .then(response => {
                    posts.value = response.data
                })

        } catch (error) {
            console.log(error)
        }

    }

    const storePosts = async (post) => {

        if (isLoading.value) return;
        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();
        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedPost.append(item, post[item]);
            }
        }

        axios.post('/api/posts', post)
        .then(response => {
            router.push({ name: 'post.Index' })
            swal({
                icon: 'success',
                title: 'Post created!'
            })
        }).catch(error => {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        })
        .finally(() => isLoading.value = false);

    }

    const getPost = async (id) => {

        axios.get('/api/posts/' + id)
            .then(response => {
                post.value = response.data.data;
            }
        );

    }

    const updatePost = async (post) => {

        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        axios.put('/api/posts/' + post.id , post)
        .then(response => {
            router.push({ name: 'post.Index' })
            swal({
                icon: 'success',
                title: 'Post updated!'
            })
        }).catch(error => {
            if (error.response?.data) {
                validationErrors.value = error.response.data.errors;
            }
        })
        .finally(() => isLoading.value = false);

    }

    const deletePost = async (id) => {

        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {

                axios.delete('/api/posts/' + id)
                    .then(response => {
                        getPosts();
                        router.push({ name: 'post.Index' })
                        swal({
                            icon: 'success',
                            title: 'Post deleted!'
                        })
                    })
                    .catch(error => {
                        swal({
                            icon: 'error',
                            title: 'Something went wrong deleted!'
                        })
                    })
                }
        })

    }

    return {
        posts,
        post,
        getPosts,
        getPost,
        storePosts,
        updatePost,
        deletePost,
        validationErrors,
        isLoading
    }

}
