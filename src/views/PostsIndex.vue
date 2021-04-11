<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>Search: <input v-model="search"></p>
    </div>
    <div>
      <p>
        Order by:
        <button v-on:click="orderByTitle">
          Title
        </button>
        <button v-on:click="orderById">
          Id
        </button>
      </p>
    </div>
    <p style="color: red;">{{ error }}</p>
    <br>
    <hr>
    <div v-for="post in orderBy(filterBy(posts, search, 'title', 'body'), order, direction)">
      <p><router-link v-bind:to="`/posts/${post.id}`" id="post-link">{{ post.title }}</router-link>Id: {{ post.id }}</p>
      <hr>
    </div>
  </div>
</template>

<style>
button {
  margin: 0% 1%;
}

#post-link {
  margin-right: 3%;
}
</style>

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
      search: "",
      order: "id",
      direction : 1
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
    },
    orderByTitle: function () {
      console.log("title");
      if (this.order !== "title") {
        this.direction = 1;
        this.order = "title";
      } else {
        this.direction *= -1;
      }
    },
    orderById: function () {
      console.log("id");
      if (this.order !== "id") {
        this.direction = 1;
        this.order = "id";
      } else {
        this.direction *= -1;
      }
    }
  }
};
</script>