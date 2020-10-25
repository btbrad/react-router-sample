import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'

const routes = [
  {
    title: '首页',
    path: '/',
    render: (props) => <Home {...props} />,
    exact: true
  },
  {
    title: '关于我们',
    path: '/about',
    render: (props) => <About {...props} />,
    exact: false
  },
  {
    title: '联系我们',
    path: '/contact',
    render: (props) => <Contact {...props} />,
    exact: false
  },
  {
    title: '登录',
    path: '/login',
    render: (props) => {
      const { user } = props
      if (user) {
        return <Redirect to="/" />
      } else {
        return <Login {...props} />
      }
    },
    exact: false
  }
]

export default routes
