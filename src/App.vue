<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/inputtype">Input Type</router-link> |
    <router-link to="/jsonApi">Api</router-link>
  </div>
  <router-view/>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        backgroundColor: '#eee'
      }
    }
  }
</script>

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
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
