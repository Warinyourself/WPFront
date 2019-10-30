<template lang="pug">
  label.upload-block.h-100.pointer(:for='name')
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
      type: Boolean,
      default: false
    },
    actions: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      baseURL: ''
    }
  },
  computed: {
    ...mapGetters('common', {
      name: 'getUUID'
    }),
    backgroundStyle() {
      return this.baseURL
        ? `background: url(${this.baseURL}) center/cover no-repeat;`
        : ''
    }
  },
  methods: {
    ...mapActions(['globalDistributor']),
    ...mapActions('page/form/handler', ['getBase64FromImages']),
    async handleUpload(event) {
      const files = await this.getBase64FromImages(event)

      if (this.$attrs.hasOwnProperty('set-image')) {
        this.baseURL = files[0].value
        this.$slots.default[0].elm.style = this.backgroundStyle
      }

      this.globalDistributor(
        this.actions
          .filter((action) => {
            return action.on === 'upload'
          })
          .map((action) => {
            return Object.assign({ value: files[0] }, action)
          })
      )
    }
  }
}
</script>
