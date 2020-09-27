export default function isLogin({ store, redirect, route }) {
  if (!store.state.loginStatus && route.name !== 'login') {
    redirect('/login')
  }
}
