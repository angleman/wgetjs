var should = require('should')
  , wget   = require('../wget.js')
;



describe('get logo', function() {
    describe('should trigger localhost', function() {

        var flag = false;
        var url  = 'https://raw.github.com/angleman/wgetjs/master/angleman.png';
        beforeEach(function(done){
            wget({url:url, dest: '/tmp/angleman.png'}, function() {
                flag = true;
                done(); // complete the async beforeEach
            });

        });   

        it("flag should be true", function(){    
            flag.should.equal(true);  
        }); 

    });

});