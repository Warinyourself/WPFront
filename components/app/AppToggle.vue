<template lang="pug">
  .toggle.ai-center(@click='changeToggle' :class='classObject' )
    .toggle__item
</template>

<script>
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'AppToggle',
  data() {
    return {
      active: false,
    }
  },
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    commit: {
      type: Object,
    },
    commitOn: {
      type: Object,
    },
    commitOff: {
      type: Object,
    },
    action: {
      type: Object,
    },
    actionOn: {
      type: Object,
    },
    actionOff: {
      type: Object,
    },
  },
  computed: {
    classObject() {
      let classToggle = 'toggle--' + this.type;
      let classObject = {}

      classObject['toggle--active'] = this.active;
      classObject[classToggle] = true;

      return classObject;
    }
  },
  methods: {
    ...mapMutations('form', [
      'SET_FORM'
    ]),
    changeToggle() {
      this.active = !this.active;

      if (this.active && (this.commitOn || this.commit)) {
        console.log(this.commit, this.commitOn);
        this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
        //if (this.values) {
          //this.$store.commit(this.commitOn.path, {type: this.commitOn.type, items: this.commitOn.items})
        //}
      } else if (!this.active && (this.commitOff || this.commit)) {
        console.log(this.commit);
        this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
        //if (this.values) {
          //this.$store.commit(this.commitOff.path, {type: this.commitOff.type, items: this.commitOff.items})
        //}
      }
    },
  },
}
</script>
