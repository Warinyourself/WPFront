<template lang="pug">
  .input.input--upload.fd-column
    .input__body.ai-center.jc-space-between(
      :class='{"input--error": input && input.errors.length}'
    )
      label.flex.w-100.ai-center.jc-space-between.pointer(:for='name')
        .upload-title {{fileName || $attrs.placeholder}}
        .flex-center.input__upload-block-icon
          AppIcon.icon-3(icon='upload')
        .highlight.highlight__line--bottom
      input.d-n(:id='name'
            v-bind='$attrs'
            ref='upload'
            type='file'
            @change='handleUpload')
    .error-block.mt-2(v-if='input')
     .error-blocks(v-for='(error, i) in input.errors' :key='i') {{ $t(error.pathText) }}
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AppUploadInput',
  props: {
    name: {
      type: String,
      default: 'uploads'
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
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
    ...mapGetters('page/form', ['getInputByName']),
    input() {
      return this.getInputByName(this.name)
    }
  },
  mounted() {
    if (this.form) {
      this.ADD_INPUT_IN_FORM({
        formName: this.form.name,
        input: {
          name: this.name,
          value: this.fileValue,
          size: this.fileSize,
          validators: this.validators,
          errors: []
        }
      })
    }
  },
  methods: {
    ...mapActions('page/form', ['updateInputInForm']),
    ...mapMutations('page/form', ['ADD_INPUT_IN_FORM']),
    handleUpload(e) {
      const input = e.target

      this.fileName = input.files[0].name
      this.fileSize = input.files[0].size
      this.fileType = input.files[0].type

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.fileValue = e.target.result
          this.updateInputInForm({
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
  }
}
</script>
