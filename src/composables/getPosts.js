import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPosts = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            // get data from API
            // let data = await fetch("http://localhost:3000/posts");
            // if (!data.ok) {
            //     throw Error("data is not available");
            // }
            // posts.value = await data.json();

            //get data from firebase
            const res = await projectFirestore.collection('posts')
            .orderBy('createdAt','desc')
            .get();
            posts.value = res.docs.map(item => {
                // console.log(doc.data())
                return { ...item.data(), id: item.id }
            })
        } catch (err) {
            error.value = err.message;
        }
    };

    return { posts, error, load }
}

export default getPosts;