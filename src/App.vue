<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/sample">Sample</router-link> |
      <router-link to="/signup" v-if="loggedIn()">Signup</router-link> |
      <router-link to="/login" v-if="!loggedIn()">Login</router-link> |
      <router-link to="/logout" v-if="loggedIn()">Logout</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/posts/new">Make New Post</router-link> |
      <button v-on:click="loggedIn">log check</button>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    loggedIn: function () {
      // console.log("logged in!");
      if (localStorage.getItem("jwt")) {
        // console.log("true");
        return true;
      } else {
        // console.log("false");
        return false;
      }
    }
  }
}
</script>
