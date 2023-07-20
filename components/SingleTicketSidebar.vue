<template>
  <b-sidebar
    v-if="$store.state.singleTicketSBData"
    :visible="$store.state.showSingleTicketSidebar"
    width="50%"
    bg-variant="black"
    text-variant="white"
    body-class="bg-dark mt-2"
    right
    shadow
    no-header
    no-header-close
    backdrop
    @hidden="$store.commit('showSingleTicketSB', null)"
  >
    <b-table-simple hover small caption-top responsive class="mt-4 text-center w-100">
      <b-tbody class="text-white ">
        <b-tr class="text-center  ">
          <b-th rowspan="1" class="w-25"> Table n° </b-th>
          <b-td class="w-25" >{{ ticket.table }}</b-td>
          <b-th  class=" w-25 border-left" rowspan="1"> Serveur </b-th>
          <b-td class="w-25">{{ticket.serveur }}</b-td>
        </b-tr>
        <b-tr class="text-center ">
          <b-th rowspan="1" class="w-25"> Commande n° </b-th>
          <b-td class="w-25" >1052</b-td>
          <b-th class="border-left w-25" rowspan="1"> Date et Heure  </b-th>
          <b-td class="w-25" style="white-space: nowrap">25 Fév. 2023 15h</b-td>
        </b-tr>
      </b-tbody>
      <b-tfoot>
        <b-tr>
          <b-td colspan="9" variant="secondary" class="ml-4">
            Client : <b>{{ticket.client}}</b>
          </b-td>
        </b-tr>
      </b-tfoot>
    </b-table-simple>
    <b-table
      class="w-100 text-white text-center border-top "
      style="white-space: pre-line;"
      borderless
      :items="items"
    >
    </b-table>
    <template #footer>
      <b-row class="p-3 m-0 bg-dark text-center font-20 text-success">
        <b-col cols="4" class="p-0 m-0 ">
          Total
        </b-col>
        <b-col cols="2" class="p-0 m-0 ">
          :
        </b-col>
        <b-col cols="6" class="p-0 m-0 font-weight-bolder">
          TK123658
        </b-col>
      </b-row>
      <b-col v-if="ticket" cols="12" class="p-0 mb-2 text-center border-top ">
        <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
          <b-button class="my-button bg-secondary font-20 w-100 p-3 mr-1 text-light">
            Paiement
          </b-button>
          <b-button class="my-button bg-secondary font-20 w-100 p-3 mr-1 text-light">
            Annuler
          </b-button>
          <b-button class="my-button bg-secondary font-20 w-100 p-3 mr-1 text-light">
            Transferer
          </b-button>
          <b-button class="my-button bg-secondary font-20 w-100 p-3 text-light">
            Modifier
          </b-button>
        </div>
      </b-col>
    </template>
  </b-sidebar>
</template>
<script>
export default {
  name: 'SingleTicketSidebar',
  data () {
    return {
      ticket: null,
      counter: 0,
      fields: [
        { label: 'Article', key: 'name' },
        { label: 'Qty', key: 'qty' },
        { label: 'Total', key: 'total' }
      ],
      items: [
        { article: 'Pizza italienne avec fruit de mere', option: 'Sans fromage', Qty: '2', Total: '150' },
        { article: 'Pizza italienne avec fruit de mere', option: 'Sans fromage', Qty: '3', Total: '150' },
        { article: 'Pizza italienne avec fruit de mere', option: 'Sans fromage', Qty: '5', Total: '150' },
        { article: 'Pizza italienne avec fruit de mere', option: 'Sans fromage', Qty: '9', Total: '150' },
        { article: 'Pizza italienne avec fruit de mere', option: 'Sans fromage', Qty: '7', Total: '150' }
      ]
    }
  },
  watch: {
    async '$store.state.singleTicketSBData' () {
      if (this.$store.state.singleTicketSBData) {
        await this.loadData()
      }
    }
  },
  methods: {
    loadData () {
      this.ticket = { ...this.$store.state.singleTicketSBData }
      this.counter++
    }
  }
}
</script>

<style scoped>

</style>
