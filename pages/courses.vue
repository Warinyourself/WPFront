<template lang="pug">
  .container
    h4 {{ $t('pages.courses.introduction') }}
</template>

<script>
export default {
  name: 'CoursesPage',
  metaInfo() {
    return {
      title: this.$t('pages.courses.title')
    }
  }
}
</script>
