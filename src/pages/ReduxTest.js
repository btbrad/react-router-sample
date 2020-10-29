import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../store/actionCreators'

function ReduxTest(props) {

  const { list, addTodo } = props

  const [todo, setTodo] = useState('')

  const handleClick = () => {
    if (!todo.length) {
      alert('please input a todo')
      return
    }
    let newTodo = {
      id: new Date(),
      name: todo
    }
    addTodo(newTodo)
    setTodo('')
  }

  return (<div>
    <p>ReduxTest</p>
    <input value={todo} onChange={({target})=> {setTodo(target.value)}} />
    <button onClick={handleClick}>添加</button>
    {list.map((item, index) => <p key={index}>{item.name}</p>)}
  </div>)
}

const mapStateToProps = state => ({
  list: state.list
})

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)
