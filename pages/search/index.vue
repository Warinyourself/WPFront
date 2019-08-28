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
            :state='activeTab'
            :actions=`[
              {
                type: "commit",
                path: "search/SET_STATE_SEARCH",
                key: "activeTab",
                on: "click"
              }
            ]`
          ) {{ $t('search.products')}}
          AppButton.mr-1.p-2.br-1(
            icon='recipes'
            value='recipes'
            :state='activeTab'
            :actions=`[
              {
                type: "commit",
                path: "search/SET_STATE_SEARCH",
                key: "activeTab",
                on: "click"
              }
            ]`
          ) {{ $t('search.recipes')}}
          AppButton.mr-1.p-2.br-1(
            icon='cycle'
            value='courses'
            :state='activeTab'
            :actions=`[
              {
                type: "commit",
                path: "search/SET_STATE_SEARCH",
                key: "activeTab",
                on: "click"
              }
            ]`
          ) {{ $t('search.courses')}}
        AppButton.p-2.br-1.br-50.mr-1(
          icon='filter'
          iconSize='2'
          :value='activeTab'
          :actions=`[
            {
              type: "commit",
              path: "page/EXPAND_BLOCK",
              on: "click"
            }
          ]`
        )
        AppButton.p-2.br-1.br-50(
          icon='plusInCircle'
          value='modalFormProducts'
          :actions=`[
            {
              type: "commit",
              path: "page/OPEN_MODAL",
              on: "click"
            }
          ]`
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
