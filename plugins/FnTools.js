class FnTools {
  constructor (app, axios) {
    this.app = app
    this.axios = axios
  }

  isEmail (email) {
    const isEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    return isEmail ? isEmail.length > 0 : false
  }

  isPhone (phone) {
    const isPhone = String(phone)
      .toLowerCase()
      .match(
        /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm
      ).length > 0
    return isPhone ? isPhone.length > 0 : false
  }

  formatDateForHeader (oDate) {
    try {
      const frDays = ['Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.']
      const frMonths = ['Janv.', 'Févr.', 'Mars', 'Avri.', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Octo.', 'Nove.', 'Déce.']
      const year = oDate.getFullYear()
      const month = oDate.getMonth()
      const date = oDate.getDate()
      const dayOfWeek = oDate.getDay()

      return frDays[dayOfWeek] + ' ' + date + ' ' + frMonths[month] + ' ' + year
    } catch {
      return ''
    }
  }

  isSelectedToDay () {
    const cDate = new Date()
    return cDate.getFullYear() === this.app.store.state.selectedDate.getFullYear() &&
      cDate.getMonth() === this.app.store.state.selectedDate.getMonth() &&
      cDate.getDate() === this.app.store.state.selectedDate.getDate()
  }
}

export default ({ app, $axios }, inject) => {
  inject('FnTools', new FnTools(app, $axios))
}
