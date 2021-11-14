#!/usr/bin/env ts-node

import { bootstrapTemplate } from "./bootstrap";
import process from "process";

try {
  const name = process.argv[2];
  bootstrapTemplate(name);
  console.log(`
  
Successfully bootstrapped ${name}! Happy coding :)

    $ cd ${name}
    $ npm run start
  
  `);
} catch (e) {
  console.error(e);
  console.log("Usage: react-component-dev create my-component-name");
}
