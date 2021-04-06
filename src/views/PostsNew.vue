<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <p>User ID: <input v-model="userId"></p>
    <p>Title: <input v-model="title"></p> 
    <p>Body: <input v-model="body"></p>
    <p>Image: <input v-model="image"></p>
    <button v-on:click="postsCreate">Post</button>
  </div>
</template>

<style></style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Make a new post",
      userId: "",
      title: "",
      body: "",
      image: ""
    };
  },
  created: function() {},
  methods: {
    postsCreate: function () {
      console.log("creating...");
      let params = {
        title: this.title,
        body: this.body,
        image: this.image,
        user_id: this.user_id
      }
      axios
        .post("/api/posts", params)
        .then(response => {
          console.log("created")
        });
    }
  }
};
</script>