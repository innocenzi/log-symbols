/**
Colored symbols for various log levels.

Includes fallbacks for Windows CMD which only supports a [limited character set](https://en.wikipedia.org/wiki/Code_page_437).

@example
```
import logSymbols = require('log-symbols');

console.log(logSymbols.success, 'Finished successfully!');
// On good OSes:  ✔ Finished successfully!
// On Windows:    √ Finished successfully!
```
*/
declare const logSymbols: {
	readonly info: string;

	readonly success: string;

	readonly warning: string;

	readonly error: string;
};

export = logSymbols;
