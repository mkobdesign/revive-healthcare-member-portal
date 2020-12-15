import React, { Component } from 'react'
import { WebAuth } from 'auth0-js'
import { navigate } from 'gatsby'

import { Auth0Context } from './'

const defaultAuthOptions = {
  responseType: 'token id_token',
  scope: 'openid email profile',
}

export default class RootWrapper extends Component {
  constructor(props) {
    super(props)

    const { redirectDomain, ...authOptions } = props.authOptions

    this.webAuth = new WebAuth({
      ...defaultAuthOptions,
      redirectUri: `${redirectDomain}/login_callback`,
      ...authOptions,
    })

    this.passwordlessStart = email => {
      this.webAuth.passwordlessStart(
        {
          connection: 'email',
          email,
          send: 'link',
        },
        err =>
          this.setState({
            passwordless: {
              initiated: true,
              err: err || null,
            },
          })
      )
    }

    this.onLogin = () => {
      this.webAuth.parseHash((err, res) => {
        if (err) {
          this.setState({
            loggedIn: false,
            data: null,
            err,
          })
        } else {
          this.setState({
            loggedIn: true,
            data: { ...res },
            err: null,
          })
        }
      })
      navigate('/')
    }

    this.logout = () => {
      this.webAuth.logout({
        clientID: props.authOptions.clientID,
        returnTo: `${redirectDomain}/`,
      })
    }

    this.state = {
      loggedIn: false,
      data: null,
      err: null,
      passwordlessStart: this.passwordlessStart,
      logout: this.logout,
      onLogin: this.onLogin,
      passwordless: {
        initiated: false,
        err: null,
      },
    }
  }

  componentDidMount() {
    this.renewToken()
  }

  renewToken() {
    this.webAuth.checkSession({}, (err, res) => {
      this.setState({
        loggedIn: !!res,
        data: res || null,
        err: err || null,
      })
    })
    // Re-new again in 15 mins
    setTimeout(() => this.renewToken(), 15 * 60 * 1000)
  }

  render() {
    return (
      <Auth0Context.Provider value={this.state}>
        {this.props.children}
      </Auth0Context.Provider>
    )
  }
}
