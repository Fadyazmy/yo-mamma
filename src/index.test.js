import yoMama from './index.js';

test('checks if return 0 correctly', () => (
	expect(yoMama(0)).toBe("Yo mama is so fat that her bellybutton gets home 15 minutes before she does.")
	)
)

test('checks if specific call returns a string', () =>(
	expect(typeof yoMama(400) == 'string').toBeTruthy()
	)
)

test('checks if random call returns a string', () =>(
	expect(typeof yoMama() == 'string').toBeTruthy()
)
)