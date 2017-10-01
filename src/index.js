var dictionary = require ('./variables.js');

export default function(line = null) {
		if(typeof line === 'number'){
			return 	dictionary.dict[line];
		}
		else {
			return dictionary.dict[Math.floor(Math.random() * dictionary.dict.length)]
	}
}
