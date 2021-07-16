import { ref } from 'vue'

const useTags = (posts) => {
    const tags = ref([])
    const tagSet = new Set()

    console.log(posts)
    posts.forEach(post => {
        post.tags.forEach(tag => tagSet.add(tag))
    });

    tags.value = [...tagSet]

    return { tags }
}

export default useTags;