export const state = () => ({
  counter: 0,
  showSingleTicketSidebar: false,
  singleTicketSBData: null,
  showAlphaKeyboard: false,
  showAlphaKeyboardPlaceholder: '',
  showAlphaKeyboardCallback: false,
  showNumKeyboard: false,
  showNumKeyboardPlaceholder: '',
  showNumKeyboardCallback: false
})
export const mutations = {
  increment (state) {
    state.counter++
  },
  showSingleTicketSB (state, data) {
    state.singleTicketSBData = data
    state.showSingleTicketSidebar = (!!data)
    state.counter++
  },
  showAlphaKeyboardModal (state, data) {
    if (data) {
      state.showAlphaKeyboardPlaceholder = data.placeholder
      state.showAlphaKeyboardCallback = data.callback
      state.showAlphaKeyboard = true
    } else {
      state.showAlphaKeyboard = false
    }
  },
  showNumKeyboardModal (state, data) {
    if (data) {
      state.showNumKeyboardPlaceholder = data.placeholder
      state.showNumKeyboardCallback = data.callback
      state.showNumKeyboard = true
    } else {
      state.showNumKeyboard = false
    }
  }
}
