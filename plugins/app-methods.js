export default ({ app }, inject) => {
  // Set the function directly on the context.app object
  inject('myInjectedFunction', (string) =>
    console.log('Okay, another function', string)
  )
}
