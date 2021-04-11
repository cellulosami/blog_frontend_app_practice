<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>Search: <input v-model="search"></p>
    </div>
    <p style="color: red;">{{ error }}</p>
    <br>
    <hr>
    <div v-for="post in filterBy(posts, search, 'title')">
      <router-link v-bind:to="`/posts/${post.id}`">{{ post.title }}</router-link>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from 'axios';
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Posts",
      posts: [],
      error: "",
      search: ""
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