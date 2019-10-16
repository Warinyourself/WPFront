<template lang="pug">
  .profile.container
    h4 {{ $t('pages.profile_edit.introduction') }}
    AppForm(
      :actions=`[
        {
          path: "user/create",
          on: "submit"
        },
      ]`
      name='profileEdit'
    )
      AppInput.w-100.md6.sm12.mb-2(
        name='username'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.username")'
      )
      AppInput.w-100.md6.sm12.mb-2(
        name='email'
        type='email'
        :validators='{required: true, email: true}'
        :placeholder='$t("forms.placeholders.email")'
      )
      AppInput.w-100.md6.sm12.mb-2(
        name='name'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.name")'
      )
      AppInput.w-100.md6.sm12.mb-2(
        name='middle_name'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.middle_name")'
      )
      AppInput.w-100.md6.sm12.mb-2(
        name='surname'
        :placeholder='$t("forms.placeholders.surname")'
      )
      AppInput.w-100.md6.sm6.mb-2(
        name='weight'
        :validators='{required: true}'
        :placeholder='$t("forms.placeholders.weight")'
      )
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
</template>

<script>
export default {
  name: 'ProfileEditPage',
  metaInfo() {
    return {
      title: this.$t('pages.profile_edit.title')
    }
  }
}
</script>

<style lang="stylus"></style>
