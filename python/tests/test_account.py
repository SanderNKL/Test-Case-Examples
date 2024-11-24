import unittest

from src import Account

class TestAccount(unittest.TestCase):
    def setUp(self):
        """
        Create an account with an initial balance of 500
        """
        self.account = Account(500)
    
    def test_legal_deposits(self):
        """
        Test that depositing money works correctly
        """
        # Two Line Check
        self.account.deposit(100)
        self.assertEqual(self.account.balance, 600)

        # One Line check
        self.assertEqual(self.account.deposit(100), 700)

    def test_illegal_deposits(self):
        """
        Test that are expected to raise an error
        """
        # Test that depositing a string raises an error
        with self.assertRaises(ValueError):
            self.account.deposit("100")

        # Test that depositing a negative amount raises an error
        with self.assertRaises(ValueError):
            self.account.deposit(-100)

    def test_legal_withdrawals(self):
        """
        Test that withdrawing money works correctly
        """
        # Set the balance to 500
        self.balance = 500

        # Two Line Check
        self.account.withdraw(100)
        self.assertEqual(self.account.balance, 400)

        # One Line check
        self.assertEqual(self.account.withdraw(100), 300)

    def test_illegal_deposits(self):
        """
        Test that are expected to raise an error
        """
        # Test that withdrawing a string raises an error
        with self.assertRaises(ValueError):
            self.account.withdraw("100")

        # Test that withdrawing a negative amount raises an error
        with self.assertRaises(ValueError):
            self.account.withdraw(-100)


if __name__ == "__main__":
    unittest.main()
