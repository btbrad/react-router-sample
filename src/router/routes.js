import React from 'react'
import { Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Sample from '../pages/Sample'
import ReduxTest from '../pages/ReduxTest'

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
    title: '分页',
    isDynamic: true,
    path: '/sample/:page',
    to: '/sample/1',
    render: (props) => <Sample {...props} />,
    exact: false
  },
  {
    title: 'Redux-sample',
    path: '/redux',
    render: (props) => <ReduxTest {...props} />,
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
