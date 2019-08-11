import Vue from 'vue'

Vue.mixin({
  methods: {
    changeData({ key, value }) {
      this[key] = value
    },
    debounce(func, values, immediate) {
      const later = () => {
        this.timeout = false
        if (!immediate) {
          func(values)
        }
      }

      clearTimeout(this.timeout)

      this.timeout = setTimeout(later, this.delay)
      if (immediate) {
        func(values)
      }
    }
  }
})
