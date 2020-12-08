<template>
   <div class="home-page">
   <Header />
   <ProductMain />
   </div>
</template>


<script>
import ProductMain from '../components/home-page/ProductMain.vue';
import Header from '../components/home-page/Header.vue';


export default {
  components: { ProductMain, Header },
  
  
};



</script>

<style scope>

</style>