<template lang="pug">
  div.container.search-page
    .search-page__header.ai-center.flex
      AppSearch.search-page__search.mr-1(
        :delay='1000'
        :commit='{path: "search/SET_STATE_SEARCH", key: "searchInput"}'
      )
      .search-page__buttons.flex
        .tabs-items
          AppButton.mr-1.p-2.br-1.bgc-main--lightest(
            icon='products'
            value='products'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.products')}}
          AppButton.mr-1.p-2.br-1.bgc-main--lightest(
            icon='cycle'
            value='courses'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.courses')}}
          AppButton.mr-1.p-2.br-1.bgc-main--lightest(
            icon='recipes'
            value='recipes'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.recipes')}}
        AppButton.p-2.br-1.bgc-main--lightest.br-50(
          icon='plusInCircle'
          value='modalFormProducts'
          :commit='{path: "page/ADD_ACTIVE_MODAL"}'
        )
    .flex.mt-2
      span {{activeTab}}
      span {{searchInput}}

      AppModalWindow(name='modalFormProducts')
              AppForm(name='formProducts' close)
                h2 {{ $t('search.form.name') }}
                AppInput.w-100.mb-2(name='ProductTitle'
                  :validators='{required: true, letters: true}'
                  :placeholder='$t("search.form.name_product")'
                )
                AppUpload.w-100(name='ProductUpload'
                  type='file'
                  accept='image/png, image/jpeg'
                  :validators='{required: true}'
                  :placeholder='$t("forms.upload")'
                )
                AppButton.p-2.mt-2.br-1.bgc-main--lightest.br-50(
                  type='submit'
                ) {{ $t('forms.submit')}}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchPage',
  computed: {
    ...mapState('search', ['activeTab', 'searchInput'])
  }
}
</script>
