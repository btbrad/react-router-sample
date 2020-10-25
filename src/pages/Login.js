import React, { useState } from 'react' 

export default function Login(props) {

  const {setUser, history} = props

  const [name, setName] = useState('')


  return (
    <div className="login">
      <input value={name} onChange={({target}) => setName(target.value)} />
      <button onClick={() =>{
        if (!name.trim()) {
          alert('请输入用户名')
          return
        }
        setUser(name)
        setTimeout(() => {
          history.goBack()
        }, 2000)
      }}>登录</button>
    </div>
  )
} 
