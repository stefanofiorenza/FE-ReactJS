const fakeAuth = {
    isAuthenticated: false,

    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout(cb, 100) //simulates a call to a rest service..
    },
    signout(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100) //simulates a call to a rest service..
    }
  }

  export default fakeAuth;