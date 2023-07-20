<template>
  <b-card
    v-if="ticket"
    overlay
    bg-variant=""
    style="width: 150px;height: 100px;overflow: hidden;border-radius: 10px;border: 0;box-shadow: 1px 1px 10px black;"
    class=" ticket-card"
    body-class="h-100 p-0 m-0 w-100 d-flex justify-content-center align-items-center flex-column cursor-pointer"
    @click="showTicketDetail"
  >
    <b-card-text class="text-center text-black font-10 w-100">
      <span class="d-block font-weight-bold font-15  ">Table n°: {{ ticket.table }}</span>
      <span class="d-block ">S : {{ ticket.serveur }}</span>
      <span class="d-block ">C : {{ ticket.client }}</span>
      <span class="d-block font-20 font-weight-bold text-black-50">{{ ticket.total }}</span>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'TicketCmp',
  props: {
    ticket: {
      type: Object,
      default: null
    }
  },
  methods: {
    showTicketDetail () {
      this.$store.commit('showSingleTicketSB', this.ticket)
    }
  }
}
</script>
<style scoped>
.ticket-card{
  background-color: silver;
  display: inline-block;
  margin: 5px;
}
</style>
