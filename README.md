# raw plus loader for webpack

## Usage

``` javascript
var fileContent = require("raw-plus!./file.txt");
// => returns file.txt content as string
```

``` javascript
var fileContent = require("raw-plus!./file.tpl");
// => returns file.tpl content as string
```
``` javascript
var fileContent = require("raw-plus!./file.css");
// => returns file.css content as string
```

Don't forget to polyfill `require` if you want to use it in node.
See `webpack` documentation.

## License

MIT (http://www.opensource.org/licenses/mit-license.php)