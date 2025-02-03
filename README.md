<h1 align="center" title="Vite Helper">
  essentials-utils
</h1>

<h2 align="center">essentials-utils provides important functions for react and vanilla javascript/typescript</h2>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/essentials-utils.svg?style=flat-square)](https://www.npmjs.com/package/essentials-utils)
[![npm downloads](https://img.shields.io/npm/dm/essentials-utils.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-2-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

<h4 align="center">
 <a href="#-how-use">:rocket: How use</a> •
 <a href="#️-tools">🛠️ Tools</a> •
 <a href="#-contributing">:pencil: Contributing</a> •
 <a href="#-thanks">:adult: Thanks</a> •
 <a href="#-license">:page_facing_up: License</a>
</h4>


<span>See the documentation: <a href="https://essentials-utils.wesleyaraujo.dev/">https://essentials-utils.wesleyaraujo.dev/</a></span>

<br>

# :rocket: How use

Instalation:

```bash
npm install essentials-utils
#or
yarn add essentials-utils
```

Answer the questions (When choosing the tool, use the arrows keys to navigate, the spacebar to select and enter to finish)

# 🛠️ Tools

Example:

## upperFirst

Capitalize the first letter of the string.

```js
import { upperFirst } from "essentials-utils";

upperFirst("hello world"); // Hello world
```

## useDebounce

Debounce hook is used to minimize backend requests on inputs.

```js
import { useDebounce } from "essentials-utils";

const [value, setValue] = useState("");
const debouncedValue = useDebounce(value, 1000);

useEffect(() => {
  console.log(debouncedValue);
}, [debouncedValue]);
```

# :pencil: Contributing

Your contribution to the `essentials-utils` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/essentials-utils/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/essentials-utils/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/essentials-utils/blob/main/.github/CONTRIBUTING.md) for more information

# :adult: Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

<table>
  <tr>
    <td align="center"><a href="https://github.com/Patryck-Silva"><img src="https://avatars.githubusercontent.com/u/41785386?v=4" width="100px;" alt=""/><br /><sub><b>Patryck Silva</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/joaoianuci"><img src="https://avatars.githubusercontent.com/u/42063789?v=4" width="100px;" alt=""/><br /><sub><b>João Vitor Ianuci</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Glerme"><img src="https://avatars.githubusercontent.com/u/62507710?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Felipe</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/heronoa"><img src="https://avatars.githubusercontent.com/u/71283373?v=4" width="100px;" alt=""/><br /><sub><b>Heron Amaral</b></sub></a><br /></td>
  </tr>
</table>

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# :page_facing_up: License

essentials-utils is a open source project licensed as [MIT](LICENSE).

