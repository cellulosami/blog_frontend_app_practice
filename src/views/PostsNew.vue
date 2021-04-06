<template>
  <div class="home">
    <form v-on:submit.prevent="postsCreate">
      <h1>{{ message }}</h1>
      <p class="text-danger">{{ errors }}</p>
      <div class="form-group">
        <label>Title:</label>
        <input class="form-control" v-model="title">
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input class="form-control" v-model="body">
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input class="form-control" v-model="image">
      </div>
      <input type="submit" class="btn btn-primary" value="Create">
    </form>
  </div>
</template>

<style></style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "Make a new post",
      title: "",
      body: "",
      image: "",
      errors: ""
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
      }
      axios
        .post("/api/posts", params)
        .then(response => {
          console.log("created")
          this.$router.push("/posts")
        })
        .catch(error => {
          console.log(error.response.statusText);
          this.errors = error.response.statusText;
        });
    }
  }
};
</script>