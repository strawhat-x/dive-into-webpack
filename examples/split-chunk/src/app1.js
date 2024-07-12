import { flatten } from "lodash-es";
import { getDoneTodos, finish, doneId } from "./done";
import { createTodo } from "./create";
import { getActiveTodos } from "./active";
import(/* webpackPreload: true */ './preload');
import(/* webpackPrefetch: true */ './prefetch');

const log = (txt) => console.log(`app1: ${txt}`);
createTodo('how to split chunks by webpack?');
log('before load active');
(async () => {
  const activeTodos = (await import('./active')).getActiveTodos();
  finish(activeTodos[0].title);
  log(doneId.id++);
  log(JSON.stringify(getDoneTodos()));
  import('./prefetch');
})();

log(flatten([[1], [2]]).join(' '));
