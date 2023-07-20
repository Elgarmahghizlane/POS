<template>
  <b-container fluid class="w-100 h-100 m-0 p-0 overflow-hidden bg-black app-content">
    <Nuxt />
    <MenuSidebar />
    <SingleTicketSidebar />
    <AlphaKeyboardModal />
    <NumKeyboardModal />
  </b-container>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
