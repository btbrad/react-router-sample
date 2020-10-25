import React, { useState } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import View404 from './pages/View404'

import './app.css'

import routes from './router/routes'

export default function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="app">
      <nav>
        {routes.map((item, index) => {
          if (item.title === '登录' && user) {
            return ''
          }
          return <NavLink to={item.isDynamic ? item.to : item.path} exact={item.exact} activeClassName="active" key={index}>{item.title}</NavLink>})}
        {user ? (
          <span>{user}<button onClick={() => {setUser(null)}}>登出</button></span>
        ) : ''}
      </nav>
      <div>
      <Switch>
        {routes.map((item, index) => <Route path={item.path} exact={item.exact} render={(props) => item.render({...props, user, setUser}) } key={index} />)}
        <Route component={View404} />
      </Switch>
      </div>
    </div>
  )
}
