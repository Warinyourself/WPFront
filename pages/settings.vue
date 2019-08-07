<template lang="pug">
  div.container
    AppToggle(:icons='["sun", "moon"]'
              :state='{ field: "isDark", path: "page/getStatePage"}'
              :commit='{field: "isDark", path: "page/SET_STATE_PAGE"}')
    AppToggle(class='mt-2'
              :values='["ru", "en"]'
              :state='{ field: "language", path: "page/getStatePage"}'
              :commit='{field: "language", path: "page/CHANGE_LANGUAGE"}')
</template>

<script>
export default {
  name: 'MainPage',
}
</script>

