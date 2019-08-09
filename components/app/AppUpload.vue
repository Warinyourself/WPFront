<template lang="pug">
  .input.fd-column
    .input__body.ai-center.jc-space-between
      .upload-title {{fileName || $attrs.placeholder}}
      label.upload-block.pointer(:for='name')
      input.d-n(:id='name'
            v-bind='$attrs'
            ref='upload'
            type='file'
            @change='handleUpload')
      .highlight.highlight__line--bottom
    //- .error-block.mt-2(v-if='input')
    //-  .error-blocks(v-for='(error, i) in input.errors' :key='i') {{ $t(error.pathText) }}
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

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
      default: {}
    }
  },
  data() {
    return {
      fileName: ''
    }
  },
  inject: ['form'],
  // computed: {
  // ...mapGetters('form', ['getInputByName']),
  // input() {
  //   return this.getInputByName(this.name)
  // }
  // },
  methods: {
    ...mapMutations('form', ['SET_STATE_FORM', 'ADD_INPUT_IN_FORM']),
    handleUpload(e) {
      const input = e.target

      this.fileName = input.files[0].name

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          console.log(e, e.target.result)
        }

        // reader.readAsDataURL(input.files[0])
      }
    }
  },
  mounted() {
    console.log('MOUNTED UPLOAD')
    //   console.log('MOUNTED CHILD INPUT')
    //   if (this.form) {
    //     this.ADD_INPUT_IN_FORM({
    //       name: this.name,
    //       errors: [],
    //       node: this.$refs.input,
    //       validators: this.validators
    //     })
    //   }
  }
}
</script>
