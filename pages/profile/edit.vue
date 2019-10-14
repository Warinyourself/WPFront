<template lang="pug">
  .profile.container
    h4 {{ $t('pages.profile_edit.introduction') }}
</template>

<script>
export default {
  name: 'ProfileEditPage',
  metaInfo() {
    return {
      title: this.$t('pages.profile_edit.title')
    }
  }
}
</script>

<style lang="stylus"></style>
