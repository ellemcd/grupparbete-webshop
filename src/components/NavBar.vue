<template>
  
   <div class="nav-bar">
    <h1 class="header">Fashion</h1>
    <div class="links-wrapper">
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/about">About</router-link>
      <router-link class="links" to="/checkout">Checkout</router-link>

        <input
          class="input"
          oninput="search(this.value)"
          type="text"
          id="search"
          placeholder="Type to search"
        />
      
    </div>
  </div>

</template>
<script>
    export default {};
</script>

<style scoped>

.nav-bar {
  align-items: center;
  background: black;
  color: yellow;
  display: flex;
  height: 10vh;
  justify-content: space-between;
  padding: 0 2rem;
  width: 100vw;
}

.header {
  text-align: start;
}

.links {
  color: #fff;
  font-size: 2rem;
  margin: 0 1rem;
  text-decoration: none;
}

.links:hover {
  color: gray;
}
</style>