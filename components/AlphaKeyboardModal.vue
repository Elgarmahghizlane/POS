<template>
  <b-modal
    id="AlphaKeyboardModal"
    body-bg-variant="dark"
    size="lg"
    :visible="$store.state.showAlphaKeyboard"
    centered
    hide-header
    hide-footer
    @shown="loadData"
    @hidden="destroyData"
  >
    <div class="p-4">
      <b-row class="p-0 m-0">
        <b-input-group class="pb-2" style="margin: 5px auto; border: 1px black;">
          <b-form-input v-model="val" class="bg-silver-50" style="background-color: white;" :placeholder="placeholder" readonly />
          <template #append>
            <b-button v-b-toggle.my-keyBoard variant="dark" @click="charClick('delete')">
              Suppr.
            </b-button>
          </template>
        </b-input-group>
      </b-row>
      <b-row class="p-0 m-0">
        <b-col v-for="num in line1" :key="'num_' + num" class=" p-0 m-1" @click="charClick(num)">
          <b-button class="num ">
            {{ num }}
          </b-button>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0">
        <b-col v-for="num in line2" :key="'num_' + num" class=" p-0 m-1" @click="charClick(num)">
          <b-button class="num">
            {{ num }}
          </b-button>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0">
        <b-col v-for="num in line3" :key="'num_' + num" class=" p-0 m-1" @click="charClick(num)">
          <b-button class="num">
            {{ num }}
          </b-button>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0 text-center">
        <b-col v-for="num in line4" :key="'num_' + num" class=" p-0 m-1" @click="charClick(num)">
          <b-button class=" num">
            {{ num }}
          </b-button>
        </b-col>
      </b-row>
      <b-row class="p-0 m-0 text-center">
        <b-col cols="8" class="p-1 m-0">
          <b-button class="w-100" style="height: 2.4rem;" @click="charClick(' ')">
            Espace
          </b-button>
        </b-col>
        <b-col cols="4" class="p-1 m-0">
          <b-button variant="success" class="w-100" style="height: 2.4rem;" @click="validate">
            Valider
          </b-button>
        </b-col>
      </b-row>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'AlphaKeyboardModal',
  data () {
    return {
      line1: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0
      ],
      line2: [
        'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'
      ],
      line3: [
        'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm'
      ],
      line4: [
        'w', 'x', 'c', 'v', 'b', 'n', ',', '-', 'é', 'à'
      ],
      val: '',
      placeholder: ''
    }
  },
  methods: {
    loadData () {
      this.placeholder = this.$store.state.showAlphaKeyboardPlaceholder
    },
    destroyData () {
      this.$store.commit('showAlphaKeyboardModal', null)
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
      if (this.$store.state.showAlphaKeyboardCallback) {
        this.$store.state.showAlphaKeyboardCallback(this.val)
      }
    }
  }
}
</script>

<style scoped>
.num{
  width: 3.7rem;
}
</style>
