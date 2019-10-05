<template lang="pug">
  .container.container--no-padding
    HeaderImageUpload
    CreateProductForm.p-2
</template>

<script>
import HeaderImageUpload from '@/components/common/header/HeaderImageUpload'
import CreateProductForm from '@/components/common/forms/CreateProductForm'

export default {
  name: 'ProductCreate',
  components: {
    CreateProductForm,
    HeaderImageUpload
  },
  data() {
    return {
      product: false
    }
  }
}
</script>
