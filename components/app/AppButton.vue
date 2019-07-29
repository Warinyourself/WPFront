<template lang="pug">
  .button.ai-center(@click='handleClick' :class='classObject' )
    AppIcon.icon-3.mr-1(v-if='icon' :icon='icon')
    slot.ln-0
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
    icon: String,
    iconsPosition: {
      type: String,
      default: 'left',
    },
    commit: {
      type: Object,
    },
    action: {
      type: Object,
    },
    disabled: false,
    state: {
      type: Object,
      default: () => {return {}},
    }
  },
  computed: {
    classObject() {
      let classToggle = 'button--' + this.type;
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
    handleClick() {
      console.log('CLICK');
      
      //if (this.active && (this.commitOn || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //} else if (!this.active && (this.commitOff || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //}
    },
  },
}
</script>
