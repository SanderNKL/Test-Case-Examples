import {
	oddOrEven
} from "../src/";


// Validate our oddOrEven function
describe("Odd", () => {
	test("Test that Odd or Even works", () => {
		expect(oddOrEven(0)).toBe("Even");
		expect(oddOrEven(1)).toBe("Odd");
		expect(oddOrEven(2)).toBe("Even");
		expect(oddOrEven(3)).toBe("Odd");
		expect(oddOrEven(4)).toBe("Even");
		expect(oddOrEven(5)).toBe("Odd");
	});
});