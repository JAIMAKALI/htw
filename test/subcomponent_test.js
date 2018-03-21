var assert=require('assert');
var {User}=require('./../models/user');

describe('shoulb be nested into user model',()=>{

  // it('should be nested',(done)=>{
  //   var user=new User({
  //     name:'alexa',
  //     postCount:2,
  //     posts:[{title:'this is my first post'}]
  //   })
  //   user.save()
  //   .then(()=>{
  //     User.findOne({name:'alexa'}).then((newUser)=>{
  //       assert(newUser.posts[0].title==='this is my first post')
  //   done();
  //     })
  //   })
  //  })

   it('should be added into the post',(done)=>{
     var user=new User({name:'vikash'});
     user.save().then(()=>{
       User.findOne({name:'vikash'}).then((user)=>{
         user.posts.push({title:'second post'})


           user.save().then(()=>{
             User.findOne({name:'vikash'}).then((newuser)=>{
               assert(newuser.posts[0].title==='second post');
               done();
             })
           });
       })
       })
     })


it('should be remove the post',(done)=>{
  var user=new User({name:'manish',posts:[{title:'fuck offf'}]});
  user.save().then(()=>{
    User.findOne({name:'manish'}).then((user1)=>{
      console.log(user1);
      user1.posts[0].remove();
      user1.save().then(()=>{
      User.findOne({name:'manish'}).then((newUser)=>{
          assert(newUser.posts.length===0);
          done();
        })
      })
    })
  })
})


})
