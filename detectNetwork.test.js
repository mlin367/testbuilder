/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail. 
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out. 
//   // You will not be able to proceed with a failing test. 

//   it('Throws an error so it fails', function() {
//     throw new Error('Delete me!');
//   });

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num/2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345672890123') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var assert = chai.assert;

  it('has a prefix of 6011 and a length of 16', function() {
    assert(detectNetwork('6011398274610293') === 'Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    assert(detectNetwork('6011398274610293478') === 'Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    assert(detectNetwork('6442658641093854') === 'Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    assert(detectNetwork('6442987463810293837') === 'Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    assert(detectNetwork('6451928370923416') === 'Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    assert(detectNetwork('6451928370923416220') === 'Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    assert(detectNetwork('6461928370923416') === 'Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    assert(detectNetwork('6461928370923416103') === 'Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    assert(detectNetwork('6471928370923416') === 'Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    assert(detectNetwork('6471928370923416853') === 'Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    assert(detectNetwork('6481928370923416') === 'Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    assert(detectNetwork('6481928370923416537') === 'Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    assert(detectNetwork('6491928370923416') === 'Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    assert(detectNetwork('6491928370923416100') === 'Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    assert(detectNetwork('6529381556723147') === 'Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    assert(detectNetwork('6593300987621262947') === 'Discover');
  });


});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  var assert = chai.assert;

  let prefix = '501829384100';

  for(let length = 12; length <= 19; length++){
    (function(length, prefix){
      it('has a prefix of of 5018 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Maestro');
      });
    })(length, prefix);
    prefix += Math.floor(Math.random() * 10).toString();
  }

  prefix = '502029384100';

  for(let length = 12; length <= 19; length++){
    (function(length, prefix){
      it('has a prefix of 5020 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Maestro');
      });
    })(length, prefix);
    prefix += Math.floor(Math.random() * 10).toString();
  }

  prefix = '503829384100';

  for(let length = 12; length <= 19; length++){
    (function(length, prefix){
      it('has a prefix of 5038 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Maestro');
      });
    })(length, prefix);
    prefix += Math.floor(Math.random() * 10).toString();
  }

  prefix = '630429384100';

  for(let length = 12; length <= 19; length++){
    (function(length, prefix){
      it('has a prefix of 6304 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Maestro');
      });
    })(length, prefix);
    prefix += Math.floor(Math.random() * 10).toString();
  }

});


describe('China UnionPay', function(){

  var assert = chai.assert;

  for(let prefix = 622126; prefix <= 622295; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '3948203948') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork(prefix + '39482039485') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork(prefix + '394820394829') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(prefix + '3948203948902') === 'China UnionPay');
      });
    })(prefix);
  }

  for(let prefix = 624; prefix <= 626; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '3813948203948') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork(prefix + '09439482039485') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork(prefix + '760394820394829') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(prefix + '1923948203948902') === 'China UnionPay');
      });
    })(prefix);
  }
  
  for(let prefix = 6282; prefix <= 6288; prefix++){
    (function(prefix){
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        assert(detectNetwork(prefix + '863948203948') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        assert(detectNetwork(prefix + '2739482039485') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        assert(detectNetwork(prefix + '45394820394829') === 'China UnionPay');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        assert(detectNetwork(prefix + '273948203948902') === 'China UnionPay');
      });
    })(prefix);
  }

})     

describe('Switch', function() {

  var assert = chai.assert;

  let prefix = '4903291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 4903 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '4905291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 4905 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '4911291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 4911 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '4936291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 4936 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }
 
  prefix = '5641822923512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 564182 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '6331102918212327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 633110 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '6333291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 6333 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

  prefix = '6759291823512327';

  for(let length of [16, 18, 19]){
    while(prefix.length !== length){
      prefix += Math.floor(Math.random() * 10).toString();
    }
    (function(length, prefix){
      it('has a prefix of 6759 and a length of ' + length, function() {
        assert(detectNetwork(prefix) === 'Switch');
      });
    })(length, prefix);
  }

});
