import {
	arrayOfAnimals
} from "../src/";


// Validate our arrayOfAnimals function
describe("arrayOfAnimals", () => {
	test("Test that we can append animals", () => {
        const animals = ['cat'];
		expect(arrayOfAnimals(animals, 'dog')).toStrictEqual(['cat', 'dog']);
		expect(arrayOfAnimals(animals, 'horse')).toStrictEqual(['cat', 'dog', 'horse']);
	});
});