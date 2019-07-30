<template lang="pug">
  div.container 
    .container__body
    AppSearch
    .flex.mt-2
      AppButton.mr-1.p-2.br-1.bgc-main--second(icon='products') {{ $t('search.products')}}
      AppButton.mr-1.p-2.br-1.bgc-main--second(icon='cycle') {{ $t('search.courses')}}
      AppButton.p-2.br-1.bgc-main--second(icon='recipes') {{ $t('search.recipes')}}
</template>

<script>

export default {
  name: 'SearchPage',
}
</script>

