<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br>
    <hr>
    <div v-for="post in posts">
      <p>{{ post.title }}</p>
      <p>{{ post }}</p>
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
      posts: []
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
        });
    }
  }
};
</script>