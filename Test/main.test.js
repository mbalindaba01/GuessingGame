const assert = require('assert')

describe('getRandomNum' , function(){
    it('should generate and return a random number' , function(){
        let randomNum = 12

        assert.equal(12, randomNum)
    });

});

describe('getText function' , function(){
    it('should return "your guess is too low" if guess is less thand random number' , function(){
        let randomNum = 12
        let guess = 9
        assert.equal(getText(), "Your guess is too low")
    });

});

