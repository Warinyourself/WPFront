<template lang="pug">
  .input.fd-column
    .input__body
      input(v-bind='$attrs'
            ref='input'
            :type='type'
            v-model='value'
            @input='handleInput'
            @focus='onFocus'
            @blur='onBlur')
      .highlight.highlight__line--bottom
    .error-block.mt-2(v-if='input')
     .error-blocks(v-for='(error, i) in input.errors' :key='i') {{ $t(error.pathText) }}
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppInput',
  props: {
    name: String,
    commit: Object,
    action: Object,
    type: String,
    delay: {
      type: Number,
      default: 500
    },
    delayType: {
      type: String,
      default: 'debounce'
    },
    validators: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      value: '',
      timeout: false
    }
  },
  inject: ['form'],
  computed: {
    ...mapGetters('form', ['getInputByName']),
    input() {
      return this.getInputByName(this.name)
    }
  },
  methods: {
    ...mapMutations('form', ['SET_STATE_FORM', 'ADD_INPUT_IN_FORM']),
    handleInput(e) {
      console.log(e)
      // if (this.delay && this.delayType === 'debounce') {
      //   this.debounce(this.updateStore, e, false);
      // } else if (this.delay && this.delayType === 'throttle') {
      //   console.log('create throttle function');
      // } else if (this.delayType === 'none'){
      //   this.updateStore(e);
      // }
    },
    updateStore(e) {
      console.log(e)
      // this.$store.commit(this.commit.path, {field: this.commit.field, value: e.target.value})
    },
    onFocus(e) {
      // this.SET_STATE_FORM({ field: 'elementFocus', items: e.target })
    },
    onBlur(e) {
      // this.SET_STATE_FORM({ field: 'elementFocus', items: false })
    }
  },
  mounted() {
    if (this.form) {
      this.ADD_INPUT_IN_FORM({
        name: this.name,
        value: this.value,
        validators: this.validators,
        errors: []
      })
    }
  }
}
</script>
