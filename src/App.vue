<template>
  <div id="app">
    <button @click="search">search</button>
  </div>
</template>

<script> 
import { getSearch } from './api/google/youtubeApi';
export default {
  name: 'App',
  methods: {
    search(){
      console.log("funciono");
      getSearch("blinding lighting");
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
  margin-top: 60px;
}
</style>
