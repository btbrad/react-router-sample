import React from 'react'
import { NavLink } from 'react-router-dom'

import './Sample.css'

const data = [
  {
    title: 'class 1'
  },
  {
    title: 'class 2'
  },
  {
    title: 'class 3'
  },
  {
    title: 'class 4'
  },
  {
    title: 'class 5'
  },
  {
    title: 'class 6'
  },
  {
    title: 'class 7'
  },
  {
    title: 'class 8'
  },
  {
    title: 'class 9'
  },
  {
    title: 'class 10'
  }
]

const pageSize = 3

function List(props) {
  console.log(props)
  return (
    <div>
      <ul>
        {props.data.map((item, index) => <li key={index}>{item.title}</li>)}
      </ul>
    </div>
  )
}

function Pager(props) {
  return (
    <div className='pager'>
      {
        [...('.').repeat(props.total)].map((item, index) => <NavLink key={index} to={`/sample/${index+1}`}>{index + 1}</NavLink>)
      }
    </div>
  )
}
function Sample(props) {


  const totalPage = Math.ceil(data.length / pageSize)
  const { page:currentPage } = props.match.params

  const currentData = data.filter((item, index) => ((currentPage - 1) * pageSize <= index) && (index < currentPage * pageSize))
  return (
    <div>
      <List data={currentData} />
      <Pager total={totalPage} />
    </div>
  )
}

export default Sample