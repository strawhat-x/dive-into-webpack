import { getDoneTodos, finish, doneId } from "./done";
import { createTodo } from "./create";
import { getActiveTodos } from "./active";

const log = (txt) => console.log(`app2: ${txt}`);
createTodo('how to split chunks by webpack?');
const activeTodos = getActiveTodos();
finish(activeTodos[0].title);
log(doneId.id++);
log(JSON.stringify(getDoneTodos()));
