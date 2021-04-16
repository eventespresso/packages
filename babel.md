## Babel

We use `babel` compiler in a few cases:

-   To scan JS files used for localization. `babel` compiles those into `.pot` files. The `@wordpress/babel-plugin-makepot` plugin is reponsbile for this compiling. More info [here](https://github.com/WordPress/gutenberg/tree/trunk/packages/babel-plugin-makepot).
-   For code transformations when `jest` is running tests. It transforms syntax which by default is not supported by Node.js, in our cases `.tsx` and `.ts` files. This is done via `babel-jest`. More about jest code transformation [here](https://jestjs.io/docs/next/code-transformation).
