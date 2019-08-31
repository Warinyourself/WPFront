<template lang="pug">
  AppForm.form(
    name='formProducts'
    close
    :actions=`[
      {
        path: "search/product/createProduct",
        on: "submit"
      },
      {
        path: "search/product/getProducts",
        on: "submit"
      },
    ]`
  )
    h2 {{ $t('search.form.title') }}
    .flex.flex-wrap.ai-center
      AppInput.w-100.md6.sm6.mt-1(
        name='name'
        :validators='{required: true, letters: true}'
        :placeholder='$t("search.form.name")'
      )
      AppUpload.w-100.md6.sm6.mt-1(
        name='image'
        accept='image/png, image/jpeg'
        :validators='{required: false}'
        :placeholder='$t("forms.upload")'
      )
      AppInput.w-100.md10.sm11.mt-1(
        name='description'
        :validators='{required: true, letters: true}'
        :placeholder='$t("search.form.description")'
      )
      .flex.md1.flex-center
        AppToggle.bgc-main(
          type='plus'
          :actions=`[
            {
              type: "commit",
              structure: "EXPAND_BLOCK",
              value: "formProducts",
              on: "change"
            }
          ]`
        )

    AppExpand(
      name='formProducts'
    )
      AppInput.w-100.md6.sm12.mr-2(
        name='cost'
        :validators='{number: true}'
        :placeholder='$t("search.form.cost")'
      )
    AppButton.p-2.mt-2.br-1.br-50(
      type='submit'
    ) {{ $t('forms.submit')}}
</template>

<script>
export default {
  name: 'CreateProductForm'
}
</script>
