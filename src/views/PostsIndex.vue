<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p style="color: red;">{{ error }}</p>
    <br>
    <hr>
    <div v-for="post in posts">
      <router-link v-bind:to="`/posts/${post.id}`">{{ post.title }}</router-link>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Posts",
      posts: [],
      error: ""
    };
  },
  created: function() {
    this.postsIndex();
  },
  methods: {
    postsIndex: function () {
      console.log("indexing...");
      axios
        .get("/api/posts")
        .then(response => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch(error => {
          this.error = error.response.statusText;
        });
    }
  }
};
</script>