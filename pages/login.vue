<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave
      .animation-cube
    AppForm.form--autumn.position-center.fd-column(
      :actions=`[
        {
          path: "user/login",
          on: "submit"
        },
      ]`
      name='login'
    )
      AppInput.w-100.md12.sm12.mb-2(
        name='username'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.username_or_email")'
      )
      AppInput.w-100.md12.sm12.mb-2(
        name='password'
        type='password'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.password")'
      )
      .flex.w-100.ai-center.jc-space-between
        AppToggle(
          :values='["ru", "en"]'
          :state='language'
          :actions=`[
            {
              type: "commit",
              path: "page/locales/CHANGE_LANGUAGE",
              key: "language",
              on: "change"
            }
          ]`
        )
        AppToggle(
          :icons='["sun", "moon"]'
          :state='isDark'
          :actions=`[
            {
              type: "commit",
              path: "page/SET_STATE_PAGE",
              key: "isDark",
              on: "change"
            }
          ]`
        )
        AppButton.p-2.br-1.br-50(
          type='button'
          @click="$router.push('join')"
        ) {{ $t('forms.buttons.sign_up') }}
        AppButton.p-2.br-1.br-50(
          type='submit'
        ) {{ $t('forms.buttons.login') }}
</template>

<script>
import { mapState } from 'vuex'
import Wave from '@/components/common/Wave'

export default {
  components: {
    Wave
  },
  meta: {
    auth: false
  },
  layout: 'none',
  data() {
    return {
      email: 'start@gmail.com',
      password: 'test'
    }
  },
  metaInfo() {
    return {
      title: this.$t('pages.login.title')
    }
  },
  computed: {
    ...mapState('page', ['isDark']),
    ...mapState('page/locales', ['language'])
  }
}
</script>
