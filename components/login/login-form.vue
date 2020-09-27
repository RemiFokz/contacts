<template>
  <div class="row">
    <input
      class="input-field"
      type="text"
      v-model="login"
      placeholder="login"
    />
    <input
      class="input-field"
      type="password"
      v-model="password"
      placeholder="password"
    />
    <button @click="loginToApp()" class="btn">login</button>
  </div>
</template>
<script>
import { mapActions,mapState } from 'vuex'
export default {
  data: () => ({
    login: '',
    password: '',
  }),
  computed: {
    ...mapState({
      loginStatus: 'loginStatus'
    })
  },
  methods: {
    ...mapActions({
      api_Login:'api_Login'
    }),
    loginToApp() {
      this.api_Login().finally(() => {
        if(this.loginStatus) {
          this.$router.push('/')
        }
      })
      
    },
  },
}
</script>
