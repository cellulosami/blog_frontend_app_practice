<template>
  <div class="home">
    <p>ID: {{ currentPost.id }}</p>
    <p>Title: {{ currentPost.title }}</p>
    <p>Body: {{ currentPost.body }}</p>
    <img v-bind:src="currentPost.image" alt="no image">
    <br>
    <router-link style="text-align: left" to="/posts"> < - - back to posts </router-link>
  </div>
</template>

<style></style>

<script>
import axios from 'axios';
export default {
  data: function() {
    return {
      currentPost: {
      }
    };
  },
  created: function() {
    this.postsShow();
  },
  methods: {
    postsShow: function () {
      axios
        .get(`/api/posts/${this.$route.params.id}`)
        .then(response => {
          this.currentPost = response.data
        });
    }
  }
};
</script>