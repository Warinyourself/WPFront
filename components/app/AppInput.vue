<template lang="pug">
  .input.fd-column
    .input__body(:class='{"input--error": input && input.errors.length}')
      input(
            v-on='$listeners'
            @input='handleInput'
            @focus='onFocus'
            @blur='onBlur'
            v-model='innerValue'
            v-bind='$attrs'
            ref='input'
      )
      .highlight__line(:class='[`highlight__line--${highlightLine.position}`]')
    transition(name='error')
      .error-block(v-if='input && input.errors.length') {{ $t(input.errors[0].pathText) }}
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AppInput',
  props: {
    name: {
      type: String,
      default: 'input'
    },
    value: {
      type: [String, Number, Boolean],
      default: ''
    },
    modifier: {
      type: String,
      default: 'text'
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
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
      default: () => Object.create(null)
    },
    highlightLine: {
      type: Object,
      default: () => Object.create({ position: 'left' })
    }
  },
  data() {
    return {
      innerValue: '',
      timeout: false
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
    if (this.value) {
      this.innerValue = this.value
    }

    if (this.form) {
      this.addInputInForm({
        formName: this.form.name,
        input: {
          name: this.name,
          value: this.innerValue,
          validators: this.validators,
          errors: []
        }
      })
    }
  },
  beforeDestroy() {
    if (this.form) {
      this.DELETE_INPUT_FROM_FORM({
        name: this.name,
        formName: this.form.name
      })
    }
  },
  methods: {
    ...mapActions('page/form', ['updateInputInForm', 'addInputInForm']),
    ...mapMutations('page/form', [
      'SET_STATE_FORM',
      'ADD_INPUT_IN_FORM',
      'DELETE_INPUT_FROM_FORM'
    ]),
    handleInput(e) {
      if (this.delay && this.delayType === 'debounce') {
        this.debounce(this.updateStore, e, false)
      } else if (this.delay && this.delayType === 'throttle') {
        // Create throttle function
      } else if (this.delayType === 'none') {
        this.updateStore(e)
      }
    },
    updateStore(e) {
      this.updateInputInForm({
        name: this.name,
        body: {
          value: this.innerValue
        }
      })
    },
    onFocus(e) {
      this.SET_STATE_FORM({ key: 'elementFocus', items: e.target })
    },
    onBlur(e) {
      this.SET_STATE_FORM({ key: 'elementFocus', items: false })
    }
  }
}
</script>
