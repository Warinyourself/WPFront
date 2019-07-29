<template lang="pug">
  div.container 
    .container__body
    AppSearch
    .flex.mt-2
      AppButton.mr-1.p-2.br-1.bgc-main--second(icon='products') Продукты
      AppButton.mr-1.p-2.br-1.bgc-main--second(icon='cycle') Курсы
      AppButton.p-2.br-1.bgc-main--second(icon='recipes') Рецепты
</template>

<script>

export default {
  name: 'SearchPage',
}
</script>

