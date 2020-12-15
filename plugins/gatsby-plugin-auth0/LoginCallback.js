import React, { Component } from 'react'

import { Auth0Context } from './'

class LoginCallbackInner extends Component {
  componentDidMount() {
    this.props.auth0.onLogin()
  }

  render() {
    return null
  }
}

export default class LoginCallback extends Component {
  render() {
    return (
      <Auth0Context.Consumer>
        {auth0 => <LoginCallbackInner auth0={auth0} />}
      </Auth0Context.Consumer>
    )
  }
}
