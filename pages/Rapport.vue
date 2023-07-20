<template>
  <b-row class="p-0 m-0 h-100">
    <b-col sm="6" md="7" lg="8" xl="9" class="m-0 pl-2 pt-2 pb-2 pr-0 h-100">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="h-100"
        header-class="p-0 m-0 font-15"
        body-class="p-0 m-0 font-15 text-center h-100"
      />
    </b-col>
    <b-col sm="6" md="5" lg="4" xl="3" class="m-0 p-2 h-100">
      <b-card
        bg-variant="dark"
        text-variant="white"
        class="h-100"
        header-class="m-0 font-15 p-1 border-bottom"
        footer-class="m-0 font-15 p-1 border-top"
        body-class="p-0 m-0 font-15 text-center h-100 overflow-y"
        body-text-variant="white"
        header-bg-variant="dark"
        footer-bg-variant="dark"
      >
        <template #header>
          <div class="px-3 py-3 ">
            <h2 class="font-20 text-center">
              26 Janv. 2022
            </h2>
            <h3 class="font-20 text-center">
              Rapport
            </h3>
          </div>
        </template>
        <template #footer>
          <b-row class="p-0 m-0 mt-2 mb-1">
            <b-col cols="4" class="p-0 text-center">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3" style="white-space: nowrap;">
                Tiroir
              </b-button>
            </b-col>
            <b-col cols="4" class="p-0 text-center">
              <b-button class="my-button bg-silver-50 font-20 w-95 p-3">
                Caisse
              </b-button>
            </b-col>
            <b-col cols="4" class="p-0 text-center">
              <b-button v-b-toggle.sidebar-right class="my-button bg-silver-50 font-20 w-95 p-3">
                Menu
              </b-button>
            </b-col>
          </b-row>
        </template>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'RapportPage',
  auth: false
}
</script>

<style scoped>

</style>
