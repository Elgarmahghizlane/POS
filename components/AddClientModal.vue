<template>
  <b-modal
    id="AddClientModal"
    body-bg-variant="dark "
    size="md"
    centered
    hide-header
    hide-footer
  >
    <b-form-group class="p-0 m-0">
      <b-row class="p-0 m-0">
        <b-col cols="6" class="w-100">
          <b-input-group class="pb-2" style="margin: 5px auto; border: 1px black;">
            <b-form-input
              v-model="nom"
              class=""
              placeholder="Nom"
              required
              readonly
            />
            <template #append>
              <b-button variant="light">
                <b-icon icon="keyboard" @click="getAlpha('Nom')" />
              </b-button>
            </template>
          </b-input-group>
        </b-col>
        <b-col cols="6" class="w-100">
          <b-input-group style="margin: 5px auto; border: 1px black;">
            <b-form-input
              v-model="prenom"
              placeholder="Prénom"
              required
              readonly
            />
            <template #append>
              <b-button variant="light" @click="getAlpha('Prénom')">
                <b-icon icon="keyboard" />
              </b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0 mt-2">
        <b-col cols="12">
          <b-input-group style="margin: 5px auto; border: 1px black;">
            <b-form-input
              v-model="phone"
              placeholder="Téléphone"
              required
            />
            <template #append>
              <b-button variant="light" @click="getNum">
                <b-icon icon="keyboard" />
              </b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0 justify-content-center">
        <b-col cols="5" class="pt-2 m-0 ">
          <b-button variant="success" class="w-100">
            Valider
          </b-button>
        </b-col>
      </b-row>
    </b-form-group>
  </b-modal>
</template>

<script>
export default {
  name: 'AddClientModal',
  data () {
    return {
      nom: '',
      prenom: '',
      phone: ''
    }
  },

  methods: {
    getAlpha (placeholder) {
      const _this = this
      this.$store.commit('showAlphaKeyboardModal', {
        placeholder,
        callback: (n) => {
          _this.nom = n
          _this.$store.commit('showAlphaKeyboardModal', null)
        }
      })
    },
    getNum () {
      const _this = this
      this.$store.commit('showNumKeyboardModal', {
        placeholder: 'Téléphone',
        callback: (p) => {
          _this.phone = p
          _this.$store.commit('showNumKeyboardModal', null)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
