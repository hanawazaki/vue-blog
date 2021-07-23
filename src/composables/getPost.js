import { ref } from 'vue'
import { projectFirestore } from '../firebase/config';
const getPost = (id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {

            // let data = await fetch("http://localhost:3000/posts/" + id);
            // if (!data.ok) {
            //     throw Error("post is not available");
            // }
            // post.value = await data.json();

            // get data from firebase
            let res = await projectFirestore.collection('posts').doc(id).get()

            if (!res.exists) {
                throw Error('the post doesnt exist')
            }

            post.value = { ...res.data(), id: res.id }
        } catch (err) {
            error.value = err.message;
            console.log(error.value)
        }
    };

    return { post, error, load }
}

export default getPost;