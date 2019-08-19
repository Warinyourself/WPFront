<template lang="pug">
  div.container {{ $t('menu.schedule') }}
    AppModalWindow
      h2 Hello
    AppButton.p-2.br-1(
        icon='love'
        value='Classic'
        :commit='{path: "page/ADD_MODAL"}'
      ) {{ $t('search.recipes')}}
</template>

<script>
export default {
  name: 'SchedulePage'
}
</script>
