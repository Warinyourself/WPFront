<template lang="pug">
  .input.fd-column
    .input__body
      label.upload-block(:for='name')
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
    name: String,
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
      value: ''
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
      console.log(e)
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
