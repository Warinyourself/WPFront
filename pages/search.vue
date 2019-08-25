<template lang="pug">
  div.container.search-page
    .search-page__header.ai-center.flex
      AppSearch.search-page__search.mr-1(
        :delay='1000'
        :commit='{path: "search/SET_STATE_SEARCH", key: "searchInput"}'
      )
      .search-page__buttons.flex
        .tabs-items
          AppButton.mr-1.p-2.br-1(
            icon='products'
            value='products'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.products')}}
          AppButton.mr-1.p-2.br-1(
            icon='cycle'
            value='courses'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.courses')}}
          AppButton.mr-1.p-2.br-1(
            icon='recipes'
            value='recipes'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.recipes')}}

        AppButton.p-2.br-1.br-50(
          icon='plusInCircle'
          value='modalFormProducts'
          :commit='{path: "page/ADD_MODAL"}'
        )

    AppTabs(:state='$store.state.search.activeTab')
      AppTabsItem(
        :state='$store.state.search.activeTab'
        :action='{path: "search/getProducts"}'
        value='products'
      )
        ProductItem.mt-1(
          v-for='(product, i) in $store.state.search.products'
          :key='i'
          :product='product'
        )
      AppTabsItem(
        :state='$store.state.search.activeTab'
        value='courses'
      ) courses
      AppTabsItem(
        :state='$store.state.search.activeTab'
        value='recipes'
      ) recipes

    AppModalWindow(name='modalFormProducts')
      AppForm(name='formProducts' close :actionOff='{path: "search/createProduct"}')
        h2 {{ $t('search.form.name') }}
        .flex
          AppInput.w-100.md6.mr-2(name='title'
            :validators='{required: true, letters: true}'
            :placeholder='$t("search.form.name_product")'
          )
          AppUpload.w-100.md6(name='image'
            accept='image/png, image/jpeg'
            :validators='{required: true}'
            :placeholder='$t("forms.upload")'
          )
          AppInput.w-100.md6.mr-2(name='description'
            :validators='{required: true, letters: true}'
            :placeholder='$t("search.form.name_product")'
          )
        .flex.jc-space-between.mt-2
          AppToggle.bgc-main(
            type='plus'
            :commit='{structure: "EXPAND_BLOCK", value: "formProducts"}'
          )
        AppExpand(
          name='formProducts'
        )
          AppInput.w-100.md6.mr-2(name='calories'
            :validators='{}'
            :placeholder='$t("search.form.name_product")'
          )

        AppButton.p-2.mt-2.br-1.br-50(
          type='submit'
        ) {{ $t('forms.submit')}}
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/pages/search/ProductItem.vue'

export default {
  name: 'SearchPage',
  computed: {
    ...mapState('search', ['activeTab', 'searchInput'])
  },
  components: {
    ProductItem
  }
}
</script>
