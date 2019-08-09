<template lang="pug">
  .input.ai-center
    input(v-bind='$attrs'
          ref='input'
          v-model='value'
          @input='handleInput'
          @focus='onFocus'
          @blur='onBlur')
    .error-block(v-if='input')
     .error-blocks(v-for='(error, i) in input.errors' :key='i') {{error.text}}
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'AppInput',
  data() {
    return {
      value: '',
      timeout: false,
    }
  },
  watch: {
    input() {
      console.log('UPDATED COMPUTED INPUT', this.input)
    }
  },
  inject: ['form'],
  props: {
    name: String,
    commit: Object,
    action: Object,
    delay: {
      type: Number,
      default: 500,
    },
    delayType: {
      type: String,
      default: 'debounce',
    },
    validators: {
      type: Object,
      default: {},
    }
  },
  computed: {
    ...mapGetters('form', [
      'getInputByName',
    ]),
    input() {
      return this.getInputByName(this.name);
    }
  },
  methods: {
    ...mapMutations('form', [
      'SET_STATE_FORM',
      'ADD_INPUT_IN_FORM',
    ]),
    handleInput(e) {
      console.log(e);
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
    },
  },
  mounted() {
    console.log('MOUNTED CHILD INPUT');
    if (this.form) {
      this.ADD_INPUT_IN_FORM({
        name: this.name,
        errors: [],
        node: this.$refs.input,
        validators: this.validators, 
      })
    }
  },
  // beforeDestroy() {
  //   this.SET_STATE_FORM({ field: 'searchView', items: false })
  // }
}
</script>