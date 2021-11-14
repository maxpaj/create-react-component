#!/usr/bin/env ts-node

import { bootstrapComponentTemplate } from "./bootstrap";
import arg from "arg";

try {
  const args = arg({
    "--github-user": String,
  });

  const name = args["_"][0];
  bootstrapComponentTemplate(name, args["--github-user"]);
  console.log(`
  
Successfully bootstrapped ${name}! Happy coding :)

    $ cd ${name}
    $ npm run start
  
  `);
} catch (e) {
  console.error(e);
  console.log("Usage: react-component-dev create my-component-name");
}
