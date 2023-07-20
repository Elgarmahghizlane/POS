<template>
  <div v-if="cat" class="cat-card">
    <div v-if="cat.image" style="width: 40%; background-repeat: no-repeat; background-size: cover;" :style="{'background-image': 'url(' + cat.image + ')'}" />
    <div :style="{'width': cat.image ? '60%' : '100%' }">
      <span class="d-block w-auth h-auto align-self-center text-wrap">
        {{ cat.name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCmp',
  props: {
    cat: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.cat-card {
  width: 200px;
  height: 66px;
  display: inline-block;
  margin: 5px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background-color: black;
}
.cat-card > div {
  height: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  float: left;
}
</style>
