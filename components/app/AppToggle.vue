<template lang="pug">
  .toggle.ai-center(@click='changeToggle' :class='classObject')
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='type === "arrow"' icon='arrow')
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons && icons[0]' :icon='icons[0]')
    span.toggle__text(v-if='values && values[0]') {{values[0]}}
    .toggle__item.bgc-main
    AppIcon.toggle__icon.icon-1.icon-darkest(v-if='icons && icons[1]' :icon='icons[1]')
    span.toggle__text(v-if='values && values[1]') {{values[1]}}
</template>

<script>
export default {
  name: 'AppToggle',
  props: {
    type: {
      type: String,
      default: 'classic'
    },
    icons: {
      type: Array,
      default: () => ['', '']
    },
    commit: {
      type: Object,
      default: () => Object.create(null)
    },
    commitOn: {
      type: Object,
      default: () => Object.create(null)
    },
    commitOff: {
      type: Object,
      default: () => Object.create(null)
    },
    action: {
      type: Object,
      default: () => Object.create(null)
    },
    actionOn: {
      type: Object,
      default: () => Object.create(null)
    },
    actionOff: {
      type: Object,
      default: () => Object.create(null)
    },
    values: {
      type: Array,
      default: () => []
    },
    state: {
      type: Object,
      default: () => Object.create(null)
    }
  },
  data() {
    return {
      active: false
    }
  },
  computed: {
    classObject() {
      const classToggle = 'toggle--' + this.type
      const classObject = {}

      const path = this.state.path
      const key = this.state.key

      if (key && path) {
        let value = this.$store.getters[path](key)

        if (this.values.length) {
          value = this.values[0] !== value

          classObject['toggle--active'] = value
          // this.changeData({ key: 'active', value })
        } else {
          classObject['toggle--active'] = value
          // this.changeData({ key: 'active', value })
        }
      } else {
        classObject['toggle--active'] = this.active
      }

      if (this.type === 'arrow') {
        classObject['bgc-main'] = true
      } else {
        classObject['bgc-dark'] = true
      }

      classObject[classToggle] = true

      return classObject
    }
  },
  methods: {
    // changeData({ key, value }) {
    //   // eslint-disable-next-line no-console
    //   console.log(this)
    //   this[key] = value
    // },
    changeToggle() {
      if (!this.values.length && !this.state) {
        this.active = !this.active
      }

      if (this.active && this.commit) {
        this.$store.commit(this.commit.path, {
          key: this.commit.key,
          value: this.values[0] || !this.active
        })

        this.active = !this.active
      } else if (!this.active && this.commit) {
        this.$store.commit(this.commit.path, {
          key: this.commit.key,
          value: this.values[1] || !this.active
        })

        this.active = !this.active
      }
    }
  }
}
</script>
