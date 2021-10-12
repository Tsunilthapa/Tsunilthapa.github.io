class Bank {
    accountsList = [];
    static nextNumber = 0;

    addAccount() {
        let acc1 = new Account(++Bank.nextNumber);
        this.accountsList.push(acc1);
        return this.accountsList.length;
    };

    addSavingsAccount(interst) {
        let acc1 = new SavingsAccount(++Bank.nextNumber, interst);
        this.accountsList.push(acc1);
        return this.accountsList.length;
    }

    addCheckingAccount(overdraft) {
        let acc1 = new CheckingAccount(++Bank.nextNumber, overdraft);
        this.accountsList.push(acc1);
        return this.accountsList.length;
    }

    closeAccount(number) {
        this.accountsList = this.accountsList.filter(x => x.getNumber() !== number);
        // return this.accountsList;
    }

    accountReport() {
        return this.accountsList.map(x => x.toString()).join("\n").toString();
    }

    endOfMonth() {
        return this.accountsList.map(acc => acc.endOfMonth()).join("\n").toString();
    }


}