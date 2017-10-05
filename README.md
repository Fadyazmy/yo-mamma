[![NPM](https://nodei.co/npm/yo-mamma.png?compact=true)](https://npmjs.org/package/yo-mamma)
# yo-mamma

```shell
$ npm install yo-mamma --save
```


```javascript
const yoMamma = require('yo-mamma').default;
let insult;

// get random joke
insult = yoMamma(); 

// get specific joke
insult = yoMamma(1); 

//Yo mama is so old that she knew Burger King while he was still a prince.
console.log(insult);
```