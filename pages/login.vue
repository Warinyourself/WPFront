<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave(:amount='5')
      .animation-cube
    form.form--login.position-center(@submit.prevent )
      h1.ta-center {{ $t('login.title') }}
      input.w-100.ta-center(:placeholder='$t("login.username")' type='email' v-model='email' required)
      input.w-100.ta-center(:placeholder='$t("login.password")' v-model='password' type='password' required)
      button.button--login.ta-center(type='primary' @click='loginUser') {{ $t('login.login') }}
      button.button--another-step.ta-center(type='primary')  {{ $t('login.create_new_user') }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Wave from '@/components/common/Wave'

export default {
  components: {
    Wave
  },
  data() {
    return {
      email: 'start@gmail.com',
      password: 'test'
    }
  },
  layout: 'none',
  methods: {
    ...mapActions('user', [
      'login', 'create'
    ]),
    async loginUser() {
      const payload = { email: this.email, password: this.password }

      await this.login(payload)
    },
    async createUser() {
      const payload = { email: this.email, password: this.password }

      await this.create(payload)
    }
  }
}
</script>
