<template>
  <b-sidebar
    id="sidebar-right"
    title="Menu"
    width="50%"
    bg-variant="black"
    right
    shadow
    no-header
    no-header-close
    body-class="bg-dark mt-2 "
    backdrop
  >
    <div class="px-3 py-4 my-3 text-white text-center">
      <h1 class="font-30">
        My Meal
      </h1>
      <h1 class="font-20">
        35 Bd de Magenta, 75010 Paris, France
      </h1>
    </div>
    <b-col cols="12" class="p-0 mb-3 text-center">
      <nuxt-link
        to="/"
        class="btn btn-dark my-button bg-secondary font-20 w-95 p-3 text-light"
        :class="{'active': $route.path === '/'}"
        active-class="a-active"
      >
        Vente
      </nuxt-link>
    </b-col>
    <b-col cols="12" class="p-0 mb-3 text-center">
      <nuxt-link
        to="/tickets"
        class="btn btn-dark my-button  bg-secondary font-20 w-95 p-3 text-light"
        :class="{'active': $route.path === '/tickets'}"
        active-class="a-active"
      >
        Tickets
      </nuxt-link>
    </b-col>
    <b-col cols="12" class="p-0 mb-3 text-center">
      <nuxt-link
        to="/caisse"
        class="btn my-button bg-secondary font-20 w-95 p-3 text-light"
        :class="{'active': $route.path === '/caisse'}"
        active-class="a-active"
      >
        Caisse
      </nuxt-link>
    </b-col>
    <b-col cols="12" class="p-0 mb-3 text-center ">
      <nuxt-link
        to="/clients"
        class="btn my-button bg-secondary font-20 w-95 p-3 text-light"
        :class="{'active': $route.path === '/clients'}"
        active-class="a-active"
      >
        Clients
      </nuxt-link>
    </b-col>
    <b-col cols="12" class="p-0 mb-3 text-center ">
      <nuxt-link
        to="/rapport"
        class="btn my-button bg-secondary font-20 w-95 p-3 text-light"
        :class="{'active': $route.path === '/rapport'}"
        active-class="a-active"
      >
        Rapport
      </nuxt-link>
    </b-col>
    <template #footer>
      <b-col cols="12" class="p-0 mb-2 text-center border-top ">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <b-button class="my-button bg-secondary font-20 w-100 p-3 text-light">
            Fermer la session
          </b-button>
        </div>
      </b-col>
    </template>
  </b-sidebar>
</template>

<script>
export default {
  name: 'MenuSidebar'
}
</script>

<style scoped>

</style>
