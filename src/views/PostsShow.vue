<template>
  <div class="home" style="text-align: left;">
    <img v-bind:src="currentPost.image" alt="no image available" style="float: right;">
    <p style="font-weight: bold;">Title: {{ currentPost.title }}</p>
    <p>Body: {{ currentPost.body }}</p>
    <br>
    <p style="margin-bottom: 40px;" >Post ID: {{ currentPost.id }}</p>
    <router-link style="text-align: left" to="/posts"> < - - back to posts </router-link>
    <router-link style="text-align: left; margin-left: 40px;" v-bind:to="`/posts/${this.$route.params.id}/edit`" v-if="currentPost.user_id == $parent.getUserId()"> Edit </router-link>
    <button v-on:click="postsDestroy" style="margin-left: 40px;" v-if="currentPost.user_id == $parent.getUserId()">Delete</button>
     parent: {{ $parent.getUserId() }}
    current: {{ currentPost.user_id }}
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
          console.log(response.data);
          this.currentPost = response.data
        })
        .catch(error => {
          console.log(error);
        });
    },
    postsDestroy: function() {
      console.log("destroying...");
      axios
        .delete("/api/posts/" + this.$route.params.id)
        .then(response => {
          console.log("deleted")
          this.$router.push("/posts")
        })
        .catch(error => {
          console.log(error);
        })
    }
  }
};
</script>