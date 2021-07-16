<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script>
import getPosts from "../composables/getPosts";
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import Spinner from "../components/Spinner.vue";

import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { PostList, Spinner, TagCloud },
  setup() {
    const router = useRoute();

    const { posts, error, load } = getPosts(router.params.tag);
    load();
    console.log(router.params.tag);
    const filteredPosts = computed(() => {
      return posts.value.filter((post) =>
        post.tags.includes(router.params.tag)
      );
    });

    return { posts, error, filteredPosts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
