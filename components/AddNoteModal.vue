<template>
  <b-modal
    id="AddNoteModal"
    body-bg-variant="dark "
    size="lg"
    centered
    hide-header
    hide-footer
  >
    <b-form-select v-model="selectedOption" :options="options" value-field="id" text-field="name" class="my-2 bg-silver-50" />
    <b-input-group v-show="selectedOption === -1" class="pb-2" style="margin: 5px auto; border: 1px black;">
      <b-form-input v-model="new_option" class="bg-silver-50" style="background-color: white;" placeholder="Nom" readonly />
      <template #append>
        <b-button v-b-toggle.my-keyBoard variant="dark" @click="getAlpha">
          <b-icon icon="keyboard" />
        </b-button>
      </template>
    </b-input-group>
    <b-input-group class="pb-2" style="margin: 5px auto; border: 1px black;">
      <b-form-input v-model="price" class="bg-silver-50" style="background-color: white;" placeholder="Montant" readonly />
      <template #append>
        <b-button v-b-toggle.num-keyBoard variant="dark" @click="getNum">
          <b-icon icon="keyboard" />
        </b-button>
      </template>
    </b-input-group>
    <b-row class="p-0 m-0 justify-content-center">
      <b-col  cols="5" class="p-1 m-0 ">
        <b-button variant="success" class="w-100" style="height: 2.4rem;" >
          Valider
        </b-button>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'AddNoteModal',
  data () {
    return {
      options: [
        { id: 1, name: 'Mohamed' },
        { id: 2, name: 'Ali' },
        { id: 3, name: 'Ghizlane' },
        { id: 4, name: 'Titi' },
        { id: -1, name: 'Autre' }
      ],
      selectedOption: null,
      price: null,
      new_option: null
    }
  },
  methods: {
    getAlpha () {
      const _this = this
      this.$store.commit('showAlphaKeyboardModal', {
        placeholder: 'Nom de la note',
        callback: (r) => {
          _this.new_option = r
          _this.$store.commit('showAlphaKeyboardModal', null)
        }
      })
    },
    getNum () {
      const _this = this
      this.$store.commit('showNumKeyboardModal', {
        placeholder: 'Montant',
        callback: (p) => {
          _this.price = p
          _this.$store.commit('showNumKeyboardModal', null)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
