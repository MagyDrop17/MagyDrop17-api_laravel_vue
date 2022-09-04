import { ref } from 'vue'

export default function usePost() {

    const posts = ref([])

    const getPosts = async () => {

        try {

            axios.get('/api/posts')
                .then(response => {
                    posts.value = response.data.data
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
