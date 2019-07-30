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
    value: String,
    iconsPosition: {
      type: String,
      default: 'left',
    },
    commit: Object,
    action: Object,
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
      let field = this.state.field;

      if (field && path) {
        let value = this.$store.getters[path](field);

        console.log(value, this.value, value === this.value)

        classObject['button--active'] = value === this.value;
      } 


      classObject[classToggle] = true;

      return classObject;
    },
  },
  methods: {
    handleClick() {
      console.log('CLICK');
      
      if (this.value && this.commit) {
        console.log('TAB state')
        this.$store.commit(this.commit.path, {field: this.commit.field, value: this.value})
      }
      //if (this.active && (this.commitOn || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //} else if (!this.active && (this.commitOff || this.commit)) {
        //this.$store.commit(this.commit.path, {type: this.commit.type, value: this.active})
      //}
    },
  },
}
</script>
