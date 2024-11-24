class Account:
    def __init__(self, balance: int):
        self.balance = balance

    def deposit(self, amount: int) -> int:
        # Prevent depositing non-numeric values
        if isinstance(amount, str):
            raise ValueError("Amount must be a number")

        # Prevent negative deposit
        if amount <= 0:
            raise ValueError("Invalid amount")

        self.balance += amount
        return self.balance

    def withdraw(self, amount: int) -> int:
        # Prevent withdrawing non-numeric values
        if isinstance(amount, str):
            raise ValueError("Amount must be a number")

        # Prevent negative withdrawal
        if amount <= 0:
            raise ValueError("Invalid amount")
        
        # Prevent withdrawal of more than the balance
        if amount > self.balance:
            raise ValueError("Insufficient funds")

        self.balance -= amount
        return self.balance