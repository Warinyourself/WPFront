<template lang="pug">
  .container.search-page
    h2 Update product {{ product }}
</template>

<script>
export default {
  name: 'ProductCreate',
  data() {
    return {
      product: false
    }
  }
}
</script>
