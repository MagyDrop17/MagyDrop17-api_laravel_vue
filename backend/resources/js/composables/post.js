import { ref } from 'vue'
import { useRouter } from 'vue-router';

export default function usePost() {

    const posts = ref([])
    const router = useRouter()

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

        try {
            axios.post('/api/posts', post)
            .then(response => {
                router.push({ name: 'post.Index' })
            });

        } catch (error) {
            console.log(error)
        }

    }

    return {
        posts,
        getPosts,
        storePosts
    }

}
