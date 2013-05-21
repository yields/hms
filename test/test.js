
describe('hms(ms)', function(){

  var hms = require('hms');

  it('should return an object with `.h, .m, .s`', function(){
    console.log(hms(2400000));
    assert(0 == hms(2400000).h);
    assert(40 == hms(2400000).m);
    assert(0 == hms(2400000).s);
  })

  it('should return an array with `[h, m, s]`', function(){
    assert(0 == hms(2400000)[0]);
    assert(40 == hms(2400000)[1]);
    assert(0 == hms(2400000)[2]);
  })

  function assert(expr){
    if (!expr) throw new Error('oops');
  }
})
