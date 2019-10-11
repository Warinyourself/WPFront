<template lang="pug">
  .archive-block.bgc-main--light.flex-center
    h5 {{ data.title }}
</template>

<script>
export default {
  name: 'ArchiveBlock',
  props: {
    data: {
      type: Object,
      default: () => Object.create(null)
    }
  }
}
</script>

<style lang="stylus" scoped>
.archive-block
  width 70px
  height 70px
  border-radius 50%
</style>
