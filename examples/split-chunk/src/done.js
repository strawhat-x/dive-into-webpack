import { todos } from "./todos";

export const doneId = {id: 0};

export function getDoneTodos() {
  console.log(doneId.id);
  return todos.filter(todo => todo.done);
}

export function finish(title) {
  const todo = todos.find(todo => todo.title === title);
  todo.done = true;
}

setTimeout(() => getDoneTodos(), 1000);
