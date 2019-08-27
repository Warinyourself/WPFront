import Vue from 'vue'
import { conformToMask } from 'text-mask-core'

// function createOptions() {
//   const elementOptions = new Map()
//   const defaultOptions = { previousValue: '', mask: [] }

//   function get(el) {
//     return elementOptions.get(el) || { ...defaultOptions }
//   }

//   function partiallyUpdate(el, newOptions) {
//     elementOptions.set(el, { ...get(el), ...newOptions })
//   }

//   function remove(el) {
//     elementOptions.delete(el)
//   }

//   return {
//     partiallyUpdate,
//     remove,
//     get
//   }
// }

// const options = createOptions()

// function triggerInputUpdate(el) {
//   const fn = trigger.bind(null, el, 'input')
//   fn()
//   // if (isAndroid && isChrome) {
//   //   setTimeout(fn, 0);
//   // } else {
//   //   fn();
//   // }
// }

/**
 * Notifies Vue about internal value change
 *
 * @param {HTMLInputElement} el
 * @param {String}           type
 */
// const trigger = (el, type) => {
//   const e = document.createEvent('HTMLEvents')
//   e.initEvent(type, true, true)
//   el.dispatchEvent(e)
// }

/**
 * Extracts first input element inside given html element (if any)
 * @param {HTMLElement} el
 * @returns {HTMLElement|HTMLInputElement}
 */
const queryInputElementInside = (el) => {
  return el instanceof HTMLInputElement ? el : el.querySelector('input') || el
}

/**
 * Event handler
 * @param {HTMLInputElement} el
 * @param {Boolean}          force
 */
// function updateValue(el, force = false) {
//   const { value } = el
//   const { previousValue, mask } = options.get(el)

//   const isValueChanged = value !== previousValue
//   const isLengthIncreased = value.length > previousValue.length
//   const isUpdateNeeded = value && isValueChanged && isLengthIncreased

//   if (force || isUpdateNeeded) {
//     const { conformedValue } = conformToMask(value, mask, { guide: false })
//     el.value = conformedValue
//     triggerInputUpdate(el)
//   }

//   options.partiallyUpdate(el, { previousValue: value })
// }

// function updateMask(el, mask) {
//   options.partiallyUpdate(el, { mask: mask })
// }

Vue.directive('mask', {
  bind(el, { value }) {
    el = queryInputElementInside(el)
    // eslint-disable-next-line no-console
    console.log(el, value, 'BIND')

    // updateMask(el, value)
    // updateValue(el)
  },
  componentUpdated(el, { value, oldValue }) {
    alert('UPDAED')
    el = queryInputElementInside(el)
    // eslint-disable-next-line no-console
    console.log(el, conformToMask, value, oldValue, 'Updated')

    // const isMaskChanged = value !== oldValue

    // // update mask first if changed
    // if (isMaskChanged) {
    //   updateMask(el, value)
    // }

    // // update value
    // updateValue(el, isMaskChanged)
  }
})
