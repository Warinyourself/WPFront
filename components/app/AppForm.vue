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
    this.DELETE_FORM()
  },
  methods: {
    ...mapActions('form', ['SUBMIT_FORM']),
    ...mapMutations('form', ['SET_FORM', 'DELETE_FORM']),
    ...mapMutations('page', ['CLOSE_MODAL']),
    async handleSubmit(e) {
      await this.SUBMIT_FORM({ name: this.name })

      //   await this.checkFormErors({ name: this.name })

      //   if (!this.hasError) {
      //     const answer = await this.getValuesFromForm({ name: this.name })
      //     // eslint-disable-next-line no-console
      //     console.log(answer)
      //   }
    }
  }
}
</script>
