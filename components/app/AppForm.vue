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
    actions: {
      type: Array,
      default: () => []
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
    ...mapGetters('page/form', ['getFormByName', 'hasFormErrors']),
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
  destroyed() {
    this.DELETE_FORM({ name: this.name })
  },
  methods: {
    ...mapActions('page/form', ['submitForm']),
    ...mapMutations('page/form', ['SET_FORM', 'DELETE_FORM']),
    ...mapMutations('page', ['CLOSE_MODAL']),
    async handleSubmit(e) {
      const form = { name: this.name }

      // Maybe after add option structure values
      if (Object.prototype.hasOwnProperty.call(this.$attrs, 'close')) {
        form.close = {
          type: 'modal',
          name: this.modal.name
        }
      }

      form.functions = this.actions.filter((func) => {
        return func.on === 'submit'
      })

      await this.submitForm(form)
    }
  }
}
</script>
