<template lang="pug">
  AppForm(name='formProducts' close :actionOff='{path: "search/createProduct"}')
    h2 {{ $t('search.form.name') }}
    .flex.flex-wrap
      AppInput.w-100.md6.sm12.mt-1(name='title'
        :validators='{required: true, letters: true}'
        :placeholder='$t("search.form.name_product")'
      )
      AppUpload.w-100.md6.sm12.mt-1(name='image'
        accept='image/png, image/jpeg'
        :validators='{required: true}'
        :placeholder='$t("forms.upload")'
      )
      AppInput.w-100.md6.sm12.mt-1(name='description'
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
</template>

<script>
export default {
  name: 'CreateProductForm'
}
</script>
