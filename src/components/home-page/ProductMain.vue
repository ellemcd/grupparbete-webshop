<template>

  <div class="products">
    <ProductList/>
    <ProductItem/>
  </div>
</template>

 
 <script>
 import ProductList from "../ProductList"  
 import ProductItem from "./ProductItem"
 export default{
   components:{
    ProductList,
    ProductItem
   }
 }
</script> 

 
  