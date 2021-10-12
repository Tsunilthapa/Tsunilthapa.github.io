// "use strict";

//Test for given methods
describe("Account : getNumber", function () {
    it("Returns an account number",
        function () {
            assert.equal(7653, new Account(7653).getNumber());
        });
});

describe("Account : getBalance", function () {
    it("Returns the balance of given account number",
        function () {
            // assert.equal(0.0, new Account(00007653).getBalance());
        });
});



describe("Account : deposit", function () {
    it("Throws error for negative amount deposit",
        function () {
            let account = new Account(1);
            try {
                account.deposit(-1000);
            }
            catch (e) {
                assert.throw(() => { account.deposit(-800) }, Error);
            }
        });

    it("Adds given amount to the existing account balance",
        function () {
            let account1 = new Account(1);
            account1.deposit(1000);
            assert.equal(1000, account1.getBalance());
        });
});

describe("Account : withdraw", function () {
    it("Throws error for negative amount withdrawl",
        function () {
            let account = new Account(1);
            try {
                account.withdraw(-1000);
            }
            catch (e) {
                assert.throw(() => { account.withdraw(-800) }, Error);
            }
        });

    it("Insuffucient balance withdrawl",
        function () {
            let account = new Account(1);
            try {
                account.withdraw(100000);
            }
            catch (e) {
                assert.throw(() => { account.withdraw(10000) }, Error);
            }
        });

    it("Deducts amount from existing balance",
        function () {
            let account = new Account(1);
            account.deposit(5000);
            account.withdraw(1000)
            assert.equal(4000, account.getBalance());
        });


});

describe("Account : toString", function () {
    it("Returns the account number and balance of given account number",
        function () {
            let account = new Account(12345);
            assert.equal("Account 12345: balance 0", account.toString());
        });
});

//For Savings Account
describe("Savings Account : getInterest", function () {
    it("Gives interst rate for given account",
        function () {
            let account = new SavingsAccount(7653, 10);
            assert.equal(10, account.getInterest());
        });
});

describe("Savings Account : setInterest", function () {
    it("Sets new interst rate for given account",
        function () {
            let account = new SavingsAccount(7653, 10);
            account.setInterest(20)
            assert.equal(20, account.getInterest());
        });
});


describe("Savings Account : addInterest", function () {
    it("Adds Interst to existing balance",
        function () {
            let account = new SavingsAccount(7653, 10);
            account.deposit(1000);
            account.addInterest()
            assert.equal(1100, account.getBalance());
        });
});

describe("Savings Account : toString", function () {
    it("Returns the account number, balance and interst of given account",
        function () {
            let account = new SavingsAccount(12345, 10);
            account.deposit(10000);
            account.addInterest();
            assert.equal("Account 12345: balance 11000: Interest 10", account.toString());
        });
});


//For Checking Account

describe("Checking Account : getOverdraftLimit", function () {
    it("Gives overdraft limit for given account",
        function () {
            let account = new CheckingAccount(7653, 5000);
            assert.equal(5000, account.getOverdraftLimit());
        });
});

describe("Checking Account : setOverdraftLimit", function () {
    it("Sets new overdraft limit for given account",
        function () {
            let account = new CheckingAccount(7653, 5000);
            account.setOverdraftLimit(10000)
            assert.equal(10000, account.getOverdraftLimit());
        });
});


describe("Checking Account : withdraw", function () {
    it("Throws error for negative amount withdrawl",
        function () {
            let account = new CheckingAccount(12345, 500);
            try {
                account.withdraw(-1000);
            }
            catch (e) {
                assert.throw(() => { account.withdraw(-800) }, Error);
            }
        });

    it("Insuffucient balance withdrawl",
        function () {
            let account = new CheckingAccount(12345, 500);
            try {
                account.withdraw(100000);
            }
            catch (e) {
                assert.throw(() => { account.withdraw(10000) }, Error);
            }
        });

    it("Deducts amount from existing balance or uses over draft limit",
        function () {
            let account = new CheckingAccount(12345, 20000);;
            account.deposit(5000);
            account.withdraw(15000)
            assert.equal(-10000, account.getBalance());
        });


});


describe("Checking Account : toString", function () {
    it("Returns the account number, balance and Overdraft Limit of given account",
        function () {
            let account = new CheckingAccount(12345, 5000);
            account.deposit(10000);
            assert.equal("Account 12345: balance 10000: Overdraft Limit 5000", account.toString());
        });
});


//For bank

describe("Bank : addAccount", function () {
    it("Adds new account and returns total account count",
        function () {
            assert.equal(1, new Bank().addAccount());
        });
});

describe("Bank : addSavingsAccount", function () {
    it("Adds new savings account and returns total account count",
        function () {
            assert.equal(1, new Bank().addSavingsAccount(10));
        });
});

describe("Bank : addCheckingAccount", function () {
    it("Adds new checking account and returns total account count",
        function () {
            assert.equal(1, new Bank().addCheckingAccount(10000));
        });
});

describe("Bank : closeAccount", function () {
    it("Removes given account",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addAccount();
            bank.addAccount();
            bank.closeAccount(4)
            assert.equal(2, bank.accountsList.length);
        });
});
describe("Bank : accountReport", function () {
    it("Returns list of account and their details",
        function () {
            let bank = new Bank();
            bank.addAccount();
            bank.addAccount();
            bank.addAccount();
            assert.equal('Account 7: balance 0\nAccount 8: balance 0\nAccount 9: balance 0', bank.accountReport());
        });
});

describe("Savings Account : endOfMonth", function () {
    it("Returns account with interst",
        function () {
            let account = new SavingsAccount(12345, 10)
            account.deposit(1000);
            assert.equal("Interest added SavingsAccount 12345: balance 1100 interest: 10", account.endOfMonth());
        });
});

describe("Checking Account : endOfMonth", function () {
    it("Returns warning for low amount",
        function () {
            let account = new CheckingAccount(12345, 2000);
            account.withdraw(1000);
            assert.equal('Warning, low balance CheckingAccount 12345: balance: -1000 overdraft limit: 2000', account.endOfMonth());
        });
});

describe("Bank : endOfMonth", function () {
    it("Returns output of endOfMonth() function from all the objects",
        function () {
            let bank = new Bank();
            bank.addAccount();

            bank.addSavingsAccount(10);
            bank.accountsList[bank.accountsList.length - 1].deposit(1000);

            bank.addCheckingAccount(10000);
            bank.accountsList[bank.accountsList.length - 1].withdraw(2000);
            assert.equal("\nInterest added SavingsAccount 11: balance 1100 interest: 10\nWarning, low balance CheckingAccount 12: balance: -2000 overdraft limit: 10000",
                bank.endOfMonth());
        });
});
