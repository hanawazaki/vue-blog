<template>
  <div>
    <h1>Realtime</h1>
    <div v-for="post in posts" :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>
<script>
import { projectFirestore } from "../firebase/config";
import { ref } from "vue";

export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let data = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        posts.value = data;
      });

    return { posts };
  },
};
</script>
<style lang="">
</style>