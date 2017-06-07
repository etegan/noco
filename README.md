# noco
Node configuration for different environments. 
## Usage
```
// config/user.js

// Default values 
exports.all = {
	"first_name": "Jane",
	"last_name": "Doe"
};

// Overwrite default values and specify own for development environment
exports.development = {
	"first_name": "John"
	"middle_name": "Dill"
} 
``` 
```
// index.js
process.env.NODE_ENV = "development";
var noco = require('noco');

// Load all files located in ./config
noco.load();

console.log(noco.get('user:first_name')); // John
console.log(noco.get('user:middle_name')); // Dill
console.log(noco.get('user:last_name')); // Doe

```
`load` Should only be called once and can be specified with a relative path to the folder containing the config files.

