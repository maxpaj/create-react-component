#!/usr/bin/env ts-node

import { bootstrapTemplate } from "./bootstrap";
import process from "process";

try {
  const name = process.argv[2];
  bootstrapTemplate(name);
  console.log(`Successfully bootstrapped ${name}! Happy coding :)`);
  console.log("");
  console.log(`  $ cd ${name}`);
  console.log(`  $ npm run start`);
  console.log("");
} catch (e) {
  console.error(e);
  console.log("Usage: react-component-dev create my-component-name");
}
