class GuessingGame {
    constructor() {}

    setRange(min, max) {

        this.min = min;
        this.max = max;
    }

    guess(number) {
        return this.result = Math.round((this.min + this.max) /2);
    }
    
    lower() {
       
       this.max = this.result;
    }

    greater() {
        
        this.min = this.result;
    }
}

module.exports = GuessingGame;
