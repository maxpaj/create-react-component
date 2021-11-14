import { existsSync, cpSync, readFileSync, writeFileSync } from "fs";
import { execSync } from "child_process";

export function bootstrapComponentTemplate(
  componentName: string,
  githubUser?: string
) {
  if (!componentName) {
    throw new Error(`Missing ${componentName} parameter`);
  }

  const path = `${process.cwd()}/${componentName}`;
  if (existsSync(path)) {
    throw new Error(`Directory ${componentName} already exists.`);
  }

  cpSync(`${__dirname}/template`, path, { recursive: true });

  // Set up package.json
  writePackageJson(path, componentName, githubUser);

  // Set up .npmrc
  writeNpmrc(path, componentName, githubUser);

  execSync("npm install", { cwd: path, stdio: "inherit" });
}

function writePackageJson(path: string, name: string, githubUser?: string) {
  const packageJson = readFileSync(`${path}/package.json`, {
    encoding: "utf-8",
  });

  const packageJsonConfig = JSON.parse(packageJson);
  packageJsonConfig.name = name;

  if (githubUser) {
    packageJsonConfig.publishConfig = {
      registry: `https://npm.pkg.github.com/@${githubUser}`,
    };
  }

  writeFileSync(
    `${path}/package.json`,
    JSON.stringify(packageJsonConfig, null, 4)
  );
}

function writeNpmrc(path: string, name: string, githubUser?: string) {
  if (githubUser) {
    writeFileSync(
      `${path}/.npmrc`,
      `@${githubUser}:registry=https://npm.pkg.github.com`
    );
  }
}
