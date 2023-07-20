<template>
  <b-modal id="ChooseTableModal"
           body-bg-variant="dark "
           size="lg"
           centered
           hide-header
           hide-footer>
    <b-table bordered
             hover
             table-variant="dark"
             small
             :items="items"
             class="text-white text-center m-0 p-0"
    >
      <template v-slot:cell(action)="data">
        <b-button variant="success" v-if="data.item.action === 'Sélectionner'" >{{ data.item.action }}</b-button>
      </template>
    </b-table>
  </b-modal>
</template>
<script>
export default {
  name: 'ChooseTableModal',
  data () {
    return {
      items: [
        { table: 40, etat: 'Block', nbcouvert: 3, action: '' },
        { table: 21, etat: 'Disponible', nbcouvert: 3, action: 'Sélectionner' },
        { table: 89, etat: 'Occupé', nbcouvert: 3, action: '' },
        { table: 38, etat: 'Block', nbcouvert: 3, action: '' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
