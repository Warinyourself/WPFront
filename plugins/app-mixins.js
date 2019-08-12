import Vue from 'vue'

Vue.mixin({
  methods: {
    // changeData({ key, value }) {
    //   // eslint-disable-next-line no-console
    //   console.log(this)
    //   this[key] = value
    // },
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
