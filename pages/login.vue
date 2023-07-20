<template>
  <div class="container-fluid justify-content-center h-100 gradient-custom">
    <b-row class="d-flex justify-content-center align-items-center h-100 bg">
      <b-col sm="8" md="8" lg="4">
        <b-card border="false" class="mx-auto top-4 w-100 " style="background-color: transparent;">
          <div class="logo text-center mb-4">
            <img class="mx-auto" src="~static/img/logo-white.png" alt="logo" style="width:11rem;height: 5rem; ">
          </div>
          <b-input-group class="mb-4">
            <b-form-input v-model="code" :type="show_code ? 'text': 'password'" placeholder="Code Utilisateur" />
            <template #append>
              <b-button variant="primary" size="sm" @click="show_code = !show_code">
                <b-icon v-if="show_code" icon="eye-slash" />
                <b-icon v-else icon="eye" />
              </b-button>
            </template>
          </b-input-group>
          <NumKeyboard :callback="keyNumCallback" />
          <b-button
            class="mx-auto px-5 btn-block"
            style="border-radius:3rem;"
            variant="primary"
            type="button"
            @click="login"
          >
            Se connecter
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data () {
    return {
      code: '',
      show_code: false
    }
  },
  methods: {
    keyNumCallback (r) {
      this.code = r
    },
    async login () {
      if (this.code !== '') {
        await this.$axios.post('/auth/login-code', { code: this.code })
          .then((r) => {
            const token = r.data.jwt
            const user = r.data.user
            this.$auth.setUser(user)
            this.$auth.setUserToken(token, null)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    }
  }
}
</script>
<style scoped>

.container-fluid{
  background-image:url("~static/img/bg.png");
  height: 50%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h2{
  font-weight: 500;
  letter-spacing: 0.038em;
  font-size: 1.55rem;
}
</style>
