<template lang="pug">
  .input.fd-column
    .input__body.ai-center.jc-space-between
      .upload-title {{fileName || $attrs.placeholder}}
      label.flex-center.upload-block.pointer(:for='name')
        AppIcon.icon-3(icon='upload')
      input.d-n(:id='name'
            v-bind='$attrs'
            ref='upload'
            type='file'
            @change='handleUpload')
      .highlight.highlight__line--bottom
    .error-block.mt-2(v-if='input')
     .error-blocks(v-for='(error, i) in input.errors' :key='i') {{ $t(error.pathText) }}
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AppUpload',
  props: {
    name: {
      type: String,
      default: 'uploads'
    },
    commit: Object,
    action: Object,
    type: String,
    validators: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  data() {
    return {
      fileName: '',
      fileSize: 0,
      fileType: '',
      fileValue: ''
    }
  },
  inject: ['form'],
  computed: {
    ...mapGetters('form', ['getInputByName']),
    input() {
      return this.getInputByName({ name: this.name })
    }
  },
  methods: {
    ...mapActions('form', ['UPDATE_INPUT_IN_FORM']),
    ...mapMutations('form', ['ADD_INPUT_IN_FORM']),
    handleUpload(e) {
      const input = e.target

      this.fileName = input.files[0].name
      this.fileSize = input.files[0].size
      this.fileType = input.files[0].type

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.fileValue = e.target.result
          this.UPDATE_INPUT_IN_FORM({
            name: this.name,
            body: {
              size: this.fileSize,
              value: this.fileValue
            }
          })
        }

        reader.readAsDataURL(input.files[0])
      }
    }
  },
  mounted() {
    if (this.form) {
      this.ADD_INPUT_IN_FORM({
        name: this.name,
        size: this.fileSize,
        value: this.fileValue,
        validators: this.validators,
        errors: []
      })
    }
  }
}
</script>
