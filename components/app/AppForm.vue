<template lang="pug">
  form(v-bind='$attrs' @submit.prevent.stop='handleSubmit')
    slot
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
  computed: {
    ...mapGetters('page/form', ['getFormByName', 'hasFormErrors']),
    form() {
      return this.getFormByName(this.name)
    },
    hasError() {
      return this.hasFormErrors(this.name)
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
    async handleSubmit(e) {
      const form = { name: this.name }

      if (Object.prototype.hasOwnProperty.call(this.$attrs, 'close')) {
        this.$emit('closeModal')
      }

      form.functions = this.actions.filter((func) => {
        return func.on === 'submit'
      })

      await this.submitForm(form)
    }
  }
}
</script>
