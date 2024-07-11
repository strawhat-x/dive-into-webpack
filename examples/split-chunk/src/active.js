import { todos } from "./todos";

export function getActiveTodos() {
  return todos.filter(todo => !todo.done);
}
