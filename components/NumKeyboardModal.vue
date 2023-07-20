<template>
  <b-modal
    id="NumKeyboardModal"
    body-bg-variant="dark"
    :visible="$store.state.showNumKeyboard"
    size="md"
    centered
    hide-header
    hide-footer
    @shown="loadData"
    @hidden="destroyData"
  >
      <b-row class="p-0 m-0">
        <b-input-group class="" style="margin: 5px auto; border: 1px black;">
          <b-form-input v-model="val" class="bg-silver-50" style="background-color: white;" :placeholder="placeholder" readonly />
          <template #append>
            <b-button v-b-toggle.my-keyBoard variant="dark" @click="charClick('delete')">
              Suppr.
            </b-button>
          </template>
        </b-input-group>
      </b-row>
      <b-row class="p-1 mx-1 mt-2">
        <b-col cols="4" v-for="num in nums" :key="'num_'+ num" class=" p-0 m-0 mb-2 text-center" @click="charClick(num) ">
          <b-button class="w-95 font-weight-bold font-15 ">
            {{ num }}
          </b-button>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0 justify-content-center">
        <b-col cols='5' class="p-1 m-0 ">
          <b-button variant="success" class="w-100" style="height: 2.4rem;" @click="validate">
            Valider
          </b-button>
        </b-col>
      </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'NumKeyboardModal',
  data () {
    return {
      nums: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ','
      ],
      val: '',
      placeholder: ''
    }
  },
  methods: {
    loadData () {
      this.placeholder = this.$store.state.showNumKeyboardPlaceholder
    },
    destroyData () {
      this.$store.commit('showNumKeyboardModal', null)
    },
    charClick (char) {
      switch (char) {
        case 'delete':
          if (this.val && this.val.length > 0) {
            this.val = this.val.substring(0, this.val.length - 1)
          }
          break
        default:
          this.val = this.val + char
          break
      }
    },
    validate () {
      if (this.$store.state.showNumKeyboardCallback) {
        this.$store.state.showNumKeyboardCallback(this.val)
      }
    }
  }
}
</script>

<style scoped>

</style>
