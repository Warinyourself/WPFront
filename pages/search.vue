<template lang="pug">
  div.container
    .container__body
    AppSearch
    .flex.mt-2
      AppButton.mr-1.p-2.br-1.bgc-main--lightest(
        icon='products'
        value='products'
        :state='{path: "search/getStateSearch", field: "activeTab"}'
        :commit='{path: "search/SET_STATE_SEARCH", field: "activeTab"}'
      ) {{ $t('search.products')}}
      AppButton.mr-1.p-2.br-1.bgc-main--lightest(
        icon='cycle'
        value='courses'
        :state='{path: "search/getStateSearch", field: "activeTab"}'
        :commit='{path: "search/SET_STATE_SEARCH", field: "activeTab"}'
      ) {{ $t('search.courses')}}
      AppButton.p-2.br-1.bgc-main--lightest(
        icon='recipes'
        value='recipes'
        :state='{path: "search/getStateSearch", field: "activeTab"}'
        :commit='{path: "search/SET_STATE_SEARCH", field: "activeTab"}'
      ) {{ $t('search.recipes')}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchPage',
  computed: {
    ...mapState('search', ['activeTab'])
  }
}
</script>
