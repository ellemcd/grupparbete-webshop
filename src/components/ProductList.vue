<template>
  <div class="product-list">
     
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