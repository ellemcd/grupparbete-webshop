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
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

* {
  box-sizing: border-box;
}

body {
  background-color: #cccccc;
  background-size: cover;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 0;
  margin: 0;
}

main {
  padding: 0px 20px;
}

/* note to self: adjust more elements for phones and tablets (ex. navbar and footer)*/
@media only screen and (min-width: 768px) {
  .product-container {
    flex: 0 0 33.3333%;
  }
}

</style>
