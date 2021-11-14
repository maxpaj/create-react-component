import { existsSync, cpSync, readFileSync, writeFileSync } from "fs";

export function bootstrapTemplate(name: string) {
  if (!name) {
    throw new Error("Missing `name` parameter");
  }

  const path = `${process.cwd()}/${name}`;
  if (existsSync(path)) {
    throw new Error("Directory `name` already exists.");
  }

  cpSync(`${__dirname}/template`, path, { recursive: true });

  // Set up package.json
  const packageJson = readFileSync(`${path}/package.json`, {
    encoding: "utf-8",
  });
  const packageJsonConfig = JSON.parse(packageJson);
  packageJsonConfig.name = name;
  packageJsonConfig.main = `./lib/cjs/${name}.js`;
  packageJsonConfig.module = `./lib/esm/${name}.js`;
  packageJsonConfig.types = `./lib/esm/${name}.d.ts`;

  writeFileSync(
    `${path}/package.json`,
    JSON.stringify(packageJsonConfig, null, 4)
  );
}
