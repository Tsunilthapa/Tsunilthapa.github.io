class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number)
        this._interest = interest;
    };

    getInterest() {
        return this._interest;
    };

    setInterest(interest) {
        this._interest = interest;
    };

    addInterest() {
        let intAMt = this._balance * this.getInterest() / 100;
        this._balance += intAMt;
    }

    toString() {
        return super.toString() + ": Interest " + this.getInterest();
    }

    endOfMonth() {
        this.addInterest();
        return "Interest added SavingsAccount " + this._number + ": balance " + this._balance + " interest: " + this._interest;
    }
}