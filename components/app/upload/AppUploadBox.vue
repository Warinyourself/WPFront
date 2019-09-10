<template lang="pug">
  label.upload-block.w-100.h-100.pointer(:for='name')
    input.d-n(type='file' :id='name' @change='handleUpload' :multiple='multiple')
    slot
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AppUploadBox',
  props: {
    type: {
      type: String,
      default: 'images'
    },
    multiple: {
      type: String,
      default: 'multiple'
    }
  },
  computed: {
    ...mapGetters('common', {
      name: 'getUUID'
    })
  },
  methods: {
    ...mapActions('page/form/handler', ['getBase64FromImages']),
    async handleUpload(event) {
      await this.getBase64FromImages(event)
      console.log('Upload Image')
    }
  }
}
</script>
