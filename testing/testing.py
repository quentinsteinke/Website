accounts = []

class Email:
    def __init__(self, name, email, password) -> None:
        self.name = name
        self.email = email
        self.password = password

    @staticmethod
    def print_all_data(self):
        print(self.name)
        print(self.email)
        return self.name, self.email


accounts.append(Email(name="quentin:steinke", email="quentinsteinke@gmail.com", password="12345"))
accounts.append(Email(name="elke:velz", email="elkevelz@gmail.com", password="3hnskk&hbsl"))


def get_account_by_name(accounts: list, name: str):
    for account in accounts:
        if account.name == name:
            return account

def get_account_by_email(accounts: list, email: str):
    for account in accounts:
        if account.name == email:
            return account


user_account = get_account_by_name(accounts, "quentin:steinke")


user_account.print_all_data()