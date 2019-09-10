<template lang="pug">
  div.container.search-page
    HeaderImageUpload
    h2 Create product {{ product }}
</template>

<script>
import HeaderImageUpload from '@/components/common/header/HeaderImageUpload'

export default {
  name: 'ProductCreate',
  components: {
    HeaderImageUpload
  },
  data() {
    return {
      product: false
    }
  }
}
</script>
