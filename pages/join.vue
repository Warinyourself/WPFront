<template lang="pug">
  .one-page
    .circe-gradient
    .clip-wave
      Wave
      .animation-cube
    AppForm.form--autumn.position-center(
      :actions=`[
        {
          path: "user/create",
          on: "submit"
        },
      ]`
      name='signUp'
    )
      AppInput.w-100.md12.sm12.mb-2(
        name='username'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.username")'
      )
      AppInput.w-100.md12.sm12.mb-2(
        name='email'
        type='email'
        :validators='{required: true, email: true}'
        :placeholder='$t("forms.placeholders.email")'
      )
      //- AppInput.w-100.md4.sm12.mb-2(
      //-   name='name'
      //-   :validators='{required: true}'
      //-   :placeholder='$t("forms.placeholders.name")'
      //- )
      //- AppInput.w-100.md4.sm12.mb-2(
      //-   name='middle_name'
      //-   :validators='{required: true}'
      //-   :placeholder='$t("forms.placeholders.middle_name")'
      //- )
      //- AppInput.w-100.md4.sm12.mb-2(
      //-   name='surname'
      //-   :placeholder='$t("forms.placeholders.surname")'
      //- )
      //- AppInput.w-100.md6.sm6.mb-2(
      //-   name='weight'
      //-   :validators='{required: true}'
      //-   :placeholder='$t("forms.placeholders.weight")'
      //- )
      AppInput.w-100.md6.sm6.mb-2(
        name='age'
        :validators='{required: true, number: true}'
        :placeholder='$t("forms.placeholders.age")'
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
          @click="$router.push('login')"
        ) {{ $t('forms.buttons.login') }}
        AppButton.p-2.br-1.br-50(
          type='submit'
          :disabled="isDisabled"
        ) {{ $t('forms.buttons.sign_up') }}
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Wave from '@/components/common/Wave'

export default {
  name: 'JoinPage',
  components: {
    Wave
  },
  meta: {
    auth: false
  },
  metaInfo() {
    return {
      title: this.$t('pages.join.title')
    }
  },
  auth: false,
  layout: 'none',
  computed: {
    ...mapState('page', ['isDark']),
    ...mapState('page/locales', ['language']),
    ...mapGetters('page/form', ['hasFormErrors']),
    isDisabled() {
      return this.hasFormErrors('signUp')
    }
  }
}
</script>
