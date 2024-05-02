import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const test = defineEventHandler(async (event) => {
  let items = [];
  for (let index = 0; index < 3e4; index++) {
    let element = { id: index + 1, email: "b@gmail.com " };
    items.push(element);
  }
  items.push({ id: 30001, email: "banga200@gmail.com" });
  return items;
});

export { test as default };
//# sourceMappingURL=test.mjs.map
