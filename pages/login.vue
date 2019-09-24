<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave
      .animation-cube
    AppForm.position-center(
      :actions=`[
        {
          path: "user/login",
          on: "submit"
        },
      ]`
      name='login'
    )
      AppInput.w-100.md12.sm12.mt-1(
        name='username'
        :validators='{required: true}'
        :placeholder='$t("login.username")'
      )
      AppInput.w-100.md12.sm12.mt-1(
        name='password'
        type='password'
        :validators='{required: true}'
        :placeholder='$t("login.password")'
      )
      AppButton.p-2.mt-2.br-1.br-50(
        type='submit'
      ) {{ $t('login.login')}}
</template>

<script>
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
  layout: 'none'
}
</script>
