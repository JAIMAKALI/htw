var assert=require('assert');
var {User}=require('./../models/user');

describe('it should be validate',()=>{

  it('should be validate',()=>{
    var user=new User({name:undefined});
    var validate=user.validateSync();
    var validateError=validate.name;
    assert(validateError==='ValidationError');
   })


   it('require greater than 3 length',()=>{
     var user=new User({name:'joekkek'});
     var validate=user.validateSync();
     var ValidationError=validate.name;
     assert(ValidationError==='ValidationError');
    })
})
