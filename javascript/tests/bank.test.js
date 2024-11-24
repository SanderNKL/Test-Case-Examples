import {
	Account
} from "../src/";


// Validate our Account function
describe("Account", () => {
	test("Test that we can deposit money into the account", () => {
        const account = new Account(0);

        expect(account.deposit(100)).toBe(100);
        expect(account.deposit(50)).toBe(150);
        expect(account.deposit(25)).toBe(175);
	});

    test("Test that we can withdraw money from the account", () => {
        const account = new Account(500);

        // Test Withdrawals
        expect(account.withdraw(100)).toBe(400);
        expect(account.withdraw(200)).toBe(200);

        // Test invalid withdrawals
        expect(() => account.withdraw(99999)).toThrowError("Insufficient funds");
        expect(() => account.withdraw(-99999)).toThrowError("Invalid amount");
        expect(() => account.withdraw("test")).toThrowError("Must be a number");

        // Test invalid deposits
        expect(() => account.deposit(-99999)).toThrowError("Invalid amount");
        expect(() => account.deposit("lol")).toThrowError("Must be a number");
	});
});