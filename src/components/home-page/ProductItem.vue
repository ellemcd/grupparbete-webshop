<template>

<div class="main-container">


        <div class="product-container">
          <div class="product-inner">
            <div class="product-name">productName</div>

            <div class="product-thumb">
              <img
                src="https://www.bankvogue.com/wp-content/uploads/2017/12/shutterstock_461853448-300x200.jpg"
              />
            </div>
            
            <div class="product-price">123456 KR</div>
            <div class="small-spacer"></div>
            
            <div class="desc-container">
              <div class="desc-product">
                this is a bunch of text that describes the product and tries to prove that it's worth it to click that "Add to Cart" button. Note to self to make sure to set the min-height so that it'll still be the same amount of space/line up space/line up when amount of description text varies.
              </div>
            </div>
            
            <div class="large-spacer"></div>
            <button class="cart-button">add to cart</button>
          </div>
        </div>


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

<style scoped>
.main-container {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 60px;
}

.product-container {
  padding: 20px;
  flex: 0 0 100%;
  min-height: 600px;
}

.product-inner {
  height: 100%;
  padding: 40px 30px 48px 30px;
  background: rgb(214, 212, 212);
  box-shadow: 5px 5px 5px 1px rgba(30,30,30,0.15);
}

@media only screen and (min-width: 768px) {
  .product-container {
    flex: 0 0 33.3333%;
  }
}

.product-name {
  font-family: 'Oswald', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #1e1e1e;
  padding-bottom: 4px;
}

.product-thumb {
  text-align: left;
  max-height: 300px;
  overflow: hidden;  
}

.product-thumb>img {
  height: 100%;
  width: 100%;
}

.product-price {
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #1e1e1e;
}

.small-spacer {
  padding: 2px;
}

.large-spacer {
  padding: 8px;
}

/* this is where to set the height of the description text, adjust as needed */
.desc-container {
  min-height: 150px;
}

.desc-product {
  height: 100%;
  font-family: 'PT Sans', sans-serif;
  color: #746e6e;
}

.cart-button {
  border: none;
  border-radius: 12px;
  background-color: #1e1e1e;
  font-family: 'PT Sans', sans-serif;
  color: #f5c12e;
  font-size: 1.2rem;
  padding: 16px 20px;
}
</style>