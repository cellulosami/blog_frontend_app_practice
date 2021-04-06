<template>
  <div class="home">
    <form v-on:submit.prevent="postsEdit">
      <h1>{{ message }}</h1>
      <p class="text-danger">{{ errors }}</p>
      <div class="form-group">
        <label>Title:</label>
        <input class="form-control" v-model="post.title">
      </div>
      <div class="form-group">
        <label>Body:</label>
        <input class="form-control" v-model="post.body">
      </div>
      <router-link v-bind:to="`/posts/${this.$route.params.id}`" style="margin-right: 30px;">< - - Back</router-link>
      <input type="submit" class="btn btn-primary" value="Submit" style="width: 80px;">
    </form>
  </div>
</template>

<style>
input {
  width: 400px;
}
</style>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      message: "EDIT",
      post: {},
      errors: ""
    };
  },
  created: function() {
    axios
      .get("/api/posts/" + this.$route.params.id)
      .then(response => {
        this.post = response.data
      })
      .catch(error => {
        console.log("error")
      });
  },
  methods: {
    postsEdit: function () {
      console.log('editing');
      let params = {
        title: this.post.title,
        body: this.post.body,
      }
      axios
        .patch("/api/posts/" + this.$route.params.id, params)
        .then(response => {
          console.log("response")
          this.$router.push(`/posts/${this.$route.params.id}`)
        })
        .catch(error => {
          console.log("error");
        });
    }
  }
};
</script>