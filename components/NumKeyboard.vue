<template>
  <b-row class="m-0 p-0 mb-2 text-center">
    <b-col v-for="num in nums" :key="num" :cols="num === 'Suppr.' ? (parseNumber ? '6' : '9') : '3'" class="m-0 p-0 mb-1">
      <b-button variant="secondary" class="w-95 font-weight-bolder font-20" @click="addNum(num)">
        {{ num }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'NumKeyboard',
  props: {
    callback: {
      default: null,
      type: Function
    },
    parseNumber: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      nums: [
        7, 8, 9, 'A',
        4, 5, 6, 'B',
        1, 2, 3, 'C',
        0, ',', 'Suppr.'
      ],
      value: ''
    }
  },
  mounted () {
    if (this.parseNumber) {
      this.nums = [
        7, 8, 9, 'A',
        4, 5, 6, 'B',
        1, 2, 3, 'C',
        0, ',', 'Suppr.'
      ]
    } else {
      this.nums = [
        7, 8, 9, 'A',
        4, 5, 6, 'B',
        1, 2, 3, 'C',
        0, 'Suppr.'
      ]
    }
  },
  methods: {
    addNum (num) {
      switch (num) {
        case 'Suppr.':
          if (this.value.length > 0) {
            this.value = this.value.substring(0, this.value.length - 1)
          }
          break
        default:
          this.value = this.value + '' + num
          break
      }
      if (this.callback) {
        this.callback(this.value)
      }
    }
  }
}
</script>

<style scoped>

</style>
