#!/usr/bin/env ts-node

import { bootstrapTemplate } from "./bootstrap";
import process from "process";

try {
  bootstrapTemplate(process.argv[2]);
} catch (e) {
  console.error(e);
  console.log("Usage: react-component-dev create my-component-name");
}
