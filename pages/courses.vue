<template lang="pug">
  .container
    h1 Here courses page
    p {{ $t('pages.courses.introduction') }}
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
