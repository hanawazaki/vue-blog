<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.title">
      <singlePost :post="post" />
    </div>
  </div>
</template>
<script>
import singlePost from "../components/singlePost.vue";
import Spinner from "../components/Spinner.vue";

export default {
  props: ["posts"],
  components: { singlePost, Spinner },
  setup(props) {
    console.log(props.posts);
  },
};
</script>