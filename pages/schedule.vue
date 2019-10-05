<template lang="pug">
  .container {{ $t('menu.schedule') }}
    AppModalWindow
      h2 Hello
    AppButton.p-2.br-1(
        icon='love'
        value='Classic'
        :actions=`[
          {
            type: "commit",
            path: "page/OPEN_MODAL",
            on: "click"
          }
        ]`
      ) {{ $t('search.recipes')}}
</template>

<script>
export default {
  name: 'SchedulePage',
  metaInfo() {
    return {
      title: this.$t('pages.schedule.title')
    }
  }
}
</script>
