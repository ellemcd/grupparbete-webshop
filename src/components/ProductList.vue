<template>
  <div class="product-list">
      <h1>productlist</h1>
  </div>
</template>

<script>
export default {
    computed: {
        productList (){
            console.log(this.$store.state.productList);
            return this.$store.state.productList;
        }

    }
}
</script>

<style>

</style>