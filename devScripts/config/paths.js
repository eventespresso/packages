const path = require("path");
const fs = require("fs");

const PACKAGES_FOLDER = "packages";
const BUILD_FOLDER = "build";
const getPublicUrlOrPath = require("react-dev-utils/getPublicUrlOrPath");

const tsconfigPath = "../../tsconfig.json";
const { paths } = require(tsconfigPath).compilerOptions;

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === "development",
  require(resolveApp("package.json")).homepage,
  process.env.PUBLIC_URL
);

const moduleFileExtensions = [
  "web.mjs",
  "mjs",
  "web.js",
  "js",
  "web.ts",
  "ts",
  "web.tsx",
  "tsx",
  "json",
  "web.jsx",
  "jsx",
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

const entries = Object.entries(paths)
  // only use the packages, not aliases
  .filter(([package]) => package.startsWith("@eventespresso/"))
  .reduce((acc, [package, [path]]) => {
    // "@eventespresso/data" becomes "eventespresso-data"
    const entry = package.replace("@eventespresso/", "eventespresso-");
    // `path` is expected to be like "packages/data/src"
    acc[entry] = resolveModule(resolveApp, path + "/index");
    return acc;
  }, {});

// config after eject: we're in ./config/
module.exports = {
  appPath: resolveApp("."),
  appBuild: resolveApp(BUILD_FOLDER),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp(PACKAGES_FOLDER),
  appTsConfig: resolveApp("tsconfig.json"),
  appJsConfig: resolveApp("jsconfig.json"),
  appNodeModules: resolveApp("node_modules"),
  dotenv: resolveApp(".env"),
  yarnLockFile: resolveApp("yarn.lock"),
  testsSetup: resolveModule(resolveApp, "src/setupTests"),
  proxySetup: resolveApp("src/setupProxy.js"),
  publicUrlOrPath,
  entries,
};

module.exports.moduleFileExtensions = moduleFileExtensions;
