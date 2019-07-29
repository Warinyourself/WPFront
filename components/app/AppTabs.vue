<template lang="pug">
  .tabs.ai-center.bgc-dark(@changeTab='changeTab' :class='classObject' )
    slot
</template>

<script>
import {mapState} from 'vuex'

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
      default: 'classic',
    },
    icons: {
      type: Array,
      default: () => ['', ''],
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
    state: {
      type: Object,
      default: () => {return {}},
    }
  },
  computed: {
    classObject() {
      let classToggle = 'toggle--' + this.type;
      let classObject = {}

      let path = this.state.path;
      let type = this.state.type;

      if (type && path) {
        let value = this.$store.getters[path](type);
        classObject['toggle--active'] = value;
        this.active = value;
      } else {
        classObject['toggle--active'] = this.active;
      }

      classObject[classToggle] = true;

      return classObject;
    },
  },
  methods: {
    changeTab() {
      console.log('CHANGE TAB')
    }
    //changeToggle() {
      //this.active = !this.active;

      //if (this.active && (this.commitOn || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //} else if (!this.active && (this.commitOff || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //}
    //},
  },
}
</script>
