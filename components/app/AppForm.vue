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
  computed: {
    ...mapGetters('form', ['getFormByName']),
    form() {
      return this.getFormByName({ name: this.name })
    }
  },
  mounted() {
    this.SET_FORM({ name: this.name })
  },
  beforeDestroy() {
    this.DELETE_FORM()
  },
  methods: {
    ...mapMutations('form', ['SET_FORM', 'DELETE_FORM']),
    ...mapActions('form', ['SUBMIT_FORM']),
    handleSubmit(e) {
      this.SUBMIT_FORM({ name: this.name })
    }
  }
}
</script>
