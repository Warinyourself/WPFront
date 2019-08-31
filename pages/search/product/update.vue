<template lang="pug">
  div.container.search-page
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
