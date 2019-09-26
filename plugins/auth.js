export default function({ $auth }) {
  // if (!$auth.loggedIn) {
  //   console.log('ALERT EXIT FROM PLUGIN AUTH')
  //   return
  // }

  const auth = $auth
  console.log('Username:', auth)
}
