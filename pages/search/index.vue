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
            icon='recipes'
            value='recipes'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.recipes')}}
          AppButton.mr-1.p-2.br-1(
            icon='cycle'
            value='courses'
            :state='{path: "search/getStateSearch", key: "activeTab"}'
            :commit='{path: "search/SET_STATE_SEARCH", key: "activeTab"}'
          ) {{ $t('search.courses')}}

        AppButton.p-2.br-1.br-50(
          icon='plusInCircle'
          value='modalFormProducts'
          :commit='{path: "page/ADD_MODAL"}'
        )

    AppTabs(:state='activeTab')
      AppTabsItem(
        :state='activeTab'
        :action='{path: "search/getProducts"}'
        value='products'
      )
        ProductItem.mt-1(
          v-for='(product, i) in $store.state.search.products'
          :key='i'
          :product='product'
        )
      AppTabsItem(
        :state='activeTab'
        value='recipes'
      ) recipes
      AppTabsItem(
        :state='activeTab'
        value='courses'
      ) courses

    AppModalWindow(name='modalFormProducts')
      CreateProductForm

        AppButton.p-2.mt-2.br-1.br-50(
          type='submit'
        ) {{ $t('forms.submit')}}
</template>

<script>
import { mapState } from 'vuex'
import ProductItem from '@/components/pages/search/ProductItem.vue'
import CreateProductForm from '@/components/common/forms/CreateProductForm.vue'

export default {
  name: 'SearchPage',
  components: {
    ProductItem,
    CreateProductForm
  },
  computed: {
    ...mapState('search', ['activeTab'])
  }
}
</script>
