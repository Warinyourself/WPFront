<template lang="pug">
  form(v-bind='$attrs' @submit.prevent.stop='handleSubmit')
    slot(v-if='form')
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AppForm',
  props: {
    name: {
      type: String,
      required: true
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  provide() {
    const form = {}
    Object.defineProperty(form, 'name', {
      enumerable: true,
      get: () => this.name
    })
    return { form }
  },
  inject: ['modal'],
  computed: {
    ...mapGetters('form', ['getFormByName', 'hasFormErrors']),
    form() {
      return this.getFormByName({ name: this.name })
    },
    hasError() {
      return this.hasFormErrors({ name: this.name })
    }
  },
  mounted() {
    this.SET_FORM({ name: this.name })
  },
  beforeDestroy() {
    this.DELETE_FORM({ name: this.name })
  },
  methods: {
    ...mapActions('form', ['submitForm']),
    ...mapMutations('form', ['SET_FORM', 'DELETE_FORM']),
    ...mapMutations('page', ['CLOSE_MODAL']),
    async handleSubmit(e) {
      const form = { name: this.name }

      if (Object.prototype.hasOwnProperty.call(this.$attrs, 'close')) {
        form.close = {
          type: 'modal',
          name: this.modal.name
        }
      }

      await this.submitForm(form)
    }
  }
}
</script>
