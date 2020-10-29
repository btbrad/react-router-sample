import { TODO_ADD } from './actionTypes'

export function addTodo(payload) {
  return {
    type: TODO_ADD,
    data: payload
  }
}