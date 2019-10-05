<template lang="pug">
  .container
    AppToggle(
      :icons='["sun", "moon"]'
      :state='$store.state.page.isDark'
      :actions=`[
          {
            type: "commit",
            path: "page/SET_STATE_PAGE",
            key: "isDark",
            on: "change"
          }
        ]`
    )
    AppToggle(
      class='mt-2'
      :values='["ru", "en"]'
      :state='$store.state.page.locales.language'
      :actions=`[
        {
          type: "commit",
          path: "page/locales/CHANGE_LANGUAGE",
          key: "language",
          on: "change"
        }
      ]`
    )
    AppButton.mt-2(
      iconSize='2'
      :actions=`[
        {
          type: 'action',
          structure: "ROUTER_PUSH",
          value: "home",
          on: "click"
        }
      ]`
      icon='settings'
    ) Push route home
</template>

<script>
export default {
  name: 'SettingsPage',
  metaInfo() {
    return {
      title: this.$t('pages.settings.title')
    }
  }
}
</script>
