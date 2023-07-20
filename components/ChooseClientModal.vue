<template>
  <b-modal id="ChooseClientModal"
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
  name: 'ChooseClientModal',
  data () {
    return {
      items: [
        { nom: 'Said', Prénom: 'Rachidi', téléphone: '0612345678', dernierVisite: 'date', action: 'Sélectionner' },
        { nom: 'Saad', Prénom: 'Ahmad', téléphone: '0698765432', dernierVisite: 'date', action: 'Sélectionner' },
        { nom: 'Ashraf', Prénom: 'Yousfi', téléphone: '0632165498', dernierVisite: 'date', action: 'Sélectionner' },
        { nom: 'Sanaa', Prénom: 'Rafii', téléphone: '0678945612', dernierVisite: 'date', action: 'Sélectionner' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
