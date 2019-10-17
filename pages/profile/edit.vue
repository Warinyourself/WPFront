<template lang="pug">
  .profile.container
    h4 {{ $t('pages.profile_edit.introduction') }}
    AppForm.flex.fw-wrap(
      :actions=`[
        {
          path: "user/update",
          on: "submit"
        },
      ]`
      name='profileEdit'
    )
      AppInput.md4.sm6.mb-2(
        name='username'
        :value='user.username'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.username")'
      )
      AppInput.md4.sm6.mb-2(
        name='email'
        type='email'
        :value='user.email'
        :validators='{required: true, email: true}'
        :placeholder='$t("forms.placeholders.email")'
      )
      AppInput.md4.sm6.mb-2(
        name='name'
        :value='user.name'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.name")'
      )
      AppInput.md4.sm6.mb-2(
        name='middle_name'
        :value='user.middle_name'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.middle_name")'
      )
      AppInput.md4.sm6.mb-2(
        name='surname'
        :value='user.surname'
        :placeholder='$t("forms.placeholders.surname")'
      )
      AppInput.md4.sm6.mb-2(
        name='weight'
        :value='user.weight'
        :placeholder='$t("forms.placeholders.weight")'
      )
      AppInput.md4.sm6.mb-2(
        name='age'
        :value='user.age'
        :validators='{number: true}'
        :placeholder='$t("forms.placeholders.age")'
      )
      .flex.w-100.ai-center.jc-space-between
        AppButton.p-2.br-1.br-50(
          type='submit'
        ) {{ $t('forms.buttons.submit') }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfileEditPage',
  metaInfo() {
    return {
      title: this.$t('pages.profile_edit.title')
    }
  },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="stylus"></style>
