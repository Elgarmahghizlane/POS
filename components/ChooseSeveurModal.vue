<template>
  <b-modal id="ChooseSeveurModal"
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
  name: 'ChooseSeveurModal',
  data () {
    return {
      items: [
        { nom: 'Said', etat: 'Absent', zone: 'Terrasse', action: '' },
        { nom: 'Amine', etat: 'Disponible', zone: 'Terrasse', action: 'Sélectionner' }
      ]

    }
  }
}
</script>

<style scoped>

</style>
