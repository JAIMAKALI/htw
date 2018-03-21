var assert=require('assert');
var {User}=require('./../models/user');
describe('for testing purpose only',()=>{
  it('shoulb not be checked',(done)=>{
    var manish=new User({name:undefined});
 manish.save().then(()=>{
     done();
   }).catch((err)=>{
     done(err);
   });
  })

  // it('for finding the user',(done)=>{
  //   User.findOne({name:'manish'}).then((user)=>{
  //     console.log(user);
  //     done();
  //   })
  // })



 // it('should be update',()=>{
 //   let manish=new User({name:'manish'});
 //   manish.set('name','alex').save().then((user)=>{
 //     console.log(user);
 //   })
 // })

// it('shoulb be update the postcount',(done)=>{
//   User.update({name:'alex'},{$inc:{postCount:1}}).then((user)=>{
//
//       console.log(user);
// done();
//
//   })
//
// })

});
