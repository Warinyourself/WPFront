<template lang="pug">
  div.container
    AppToggle(:icons='["sun", "moon"]'
              :state='{ key: "isDark", path: "page/getStatePage"}'
              :commit='{key: "isDark", path: "page/SET_STATE_PAGE"}')
    AppToggle(class='mt-2'
              :values='["ru", "en"]'
              :state='{ key: "language", path: "page/locales/getStatePageLocales"}'
              :commit='{key: "language", path: "page/locales/CHANGE_LANGUAGE"}')
</template>

<script>
export default {
  name: 'MainPage'
}
</script>
