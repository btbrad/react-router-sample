import { TODO_ADD } from './actionTypes'
import axios from 'axios'

export function addTodo(payload) {
  return {
    type: TODO_ADD,
    data: payload
  }
}

export function getTopics() {
  return dispatch => {
    axios.get('https://cnodejs.org/api/v1/topics?page=1&tab=ask&limit=20&mdrender=true').then(res => {
      console.log(res)
    })
  }
} 