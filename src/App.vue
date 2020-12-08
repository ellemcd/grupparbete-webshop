<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: { NavBar, Footer },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #ccc;
  background-size: cover;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0;
  margin: 0;
}

</style>
