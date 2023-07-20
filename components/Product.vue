<template>
  <b-card
    v-if="product"
    overlay
    bg-variant="black"
    style="width: 150px;max-width: 150px;height: 150px;max-height: 150px;overflow: hidden;border-radius: 10px;border: 0;box-shadow: 1px 1px 10px black;"
    class="product-card"
    :img-src="product.image"
    body-class="h-100 p-0 m-0 w-100 d-flex justify-content-center align-items-center flex-column"
  >
    <b-card-text class="text-center bg-black w-100">
      <span class="d-block">{{ product.name }}</span>
      <span class="d-block font-20 text-danger">{{ product.price ? parseFloat(product.price).toFixed(2) : '' }}</span>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'ProductCmp',
  props: {
    product: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.product-card {
  display: inline-block;
  margin: 5px;
}
.card-text {
  background-color: rgb(0 0 0 / 71%) !important;
}
.card-img {
  filter: brightness(0.6);
}
</style>
