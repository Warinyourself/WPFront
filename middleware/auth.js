export default function({ store, redirect }) {
  console.log('FROM AUTH', store.state.auth)
  if (store.state.auth.loggedIn) {
    return redirect('/')
  }
}
