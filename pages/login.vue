<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave(:amount='5')
      .animation-cube
    form.form--login.position-center(@submit.prevent )
      h1.ta-center Поле входа
      input.w-100.ta-center(placeholder='Email' type='email' v-model='email' required)
      input.w-100.ta-center(placeholder='Password' v-model='password' type='password' required)
      button.button--login.ta-center(type='primary' @click='loginUser') Login
      button.button--another-step.ta-center(type='primary') Создать нового пользователя
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Wave from '@/components/decorations/Wave'

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
    ...mapActions('user', ['login', 'create']),
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
