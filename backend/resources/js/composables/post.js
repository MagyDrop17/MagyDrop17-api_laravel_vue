import { ref } from 'vue'

export default function usePost() {

    const posts = ref([])

    const getPosts = async (page = 1) => {

        try {

            axios.get('/api/posts?page=' + page)
                .then(response => {
                    posts.value = response.data
                })

        } catch (error) {
            console.log(error)
        }

    }


    return {
        posts,
        getPosts
    }

}
