<template lang="pug">
  div.container
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
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
