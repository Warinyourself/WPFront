<template lang="pug">
  .header-image-upload
    AppUploadBox.flex-center
      .block.ai-center.fd-column
        AppIcon.icon-5.mb-1(name='upload')
        h3 Upload Image
</template>

<script>
export default {
  name: 'HeaderImageUpload',
  data() {
    return {
      product: false
    }
  }
}
</script>
