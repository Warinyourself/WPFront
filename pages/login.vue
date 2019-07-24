<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave(:amount='5')
      .animation-cube
    form.form--login.center-position(@submit.prevent )
      h1.ta-center Поле входа
      input.w-100.ta-center(placeholder='Email' type='email' v-model='email' required)
      input.w-100.ta-center(placeholder='Password' v-model='password' type='password' required)
      button.button--login.ta-center(type='primary' @click='loginUser') Login
      button.button--another-step.ta-center(type='primary') Создать нового пользователя
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Wave from '@/components/decorations/Wave'

export default {
  data() {
    return {
      email: 'start@gmail.com',
      password: 'test'
    }
  },
  layout: 'none',
  components: {
    Wave,
  },
  methods: {
    ...mapActions('user', [
      'login',
      'create',
    ]),
    async loginUser() {
      let payload = {email: this.email, password: this.password};

      await this.login(payload);
    },
    async createUser() {
      let payload = {email: this.email, password: this.password};

      await this.create(payload);
    }
  }
}
</script>
