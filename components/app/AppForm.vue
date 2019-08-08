<template lang="pug">
  form(v-bind='$attrs' @submit.prevent.stop='handleSubmit')
    slot(v-if='form')
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'AppForm',
  props: {
    name: {
      type: String,
      required: true,
    },
    commit: Object,
    action: Object,
  },
  provide: {
    form: 'AppForm',
  },
  methods: {
    ...mapMutations('form', [
      'SET_STATE_FORM',
      'SET_FORM',
      'DELETE_FORM',
    ]),
    ...mapActions('form', [
      'SUBMIT_FORM'
    ]),
    handleSubmit(e) {
      // console.log(e, 'HANDLE SUBMIT');
      this.SUBMIT_FORM({name: this.name});
    }
  },
  computed: {
    ...mapGetters('form', [
      'getFormByName'
    ]),
    form() {
      return this.getFormByName(this.name);
    }
  },
  mounted() {
    this.SET_FORM({name: this.name});
  },
  beforeDestroy() {
    this.DELETE_FORM();
  }
}
</script>
