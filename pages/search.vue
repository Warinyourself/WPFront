<template lang="pug">
  div.container
    .container__body
    AppSearch(
      :delay='1000'
      :commit='{path: "search/SET_STATE_SEARCH", field: "searchInput"}'
    )
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
      AppButton.mr-1.p-2.br-1.bgc-main--lightest(
        icon='recipes'
        value='recipes'
        :state='{path: "search/getStateSearch", field: "activeTab"}'
        :commit='{path: "search/SET_STATE_SEARCH", field: "activeTab"}'
      ) {{ $t('search.recipes')}}
      AppModalWindow(name='modalFormProducts')
        AppForm(name='formProducts')
          h2 FORM
          AppInput.w-100(name='ProductTitle'
            :validators='{required: true}'
            placeholder='Title'
          )
          AppButton.p-2.mt-2.br-1.bgc-main--lightest.br-50(
            icon='submit'
            type='submit'
          )

      AppButton.p-2.br-1.bgc-main--lightest.br-50(
          icon='plus'
          value='modalFormProducts'
          :commit='{path: "page/ADD_ACTIVE_MODAL"}'
        )
    .flex.mt-2
      span {{activeTab}}
      span {{searchInput}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchPage',
  computed: {
    ...mapState('search', [
      'activeTab',
      'searchInput',
    ]),
  },
}
</script>
