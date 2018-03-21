var mongoose=require('mongoose');
var assert=require('assert');
var {BlogPost}=require('./../models/blogPost');
var {User}=require('./../models/user');

describe('middleware',()=>{
let user,blogPost;
  beforeEach((done)=>{
    user=new User({name:'madhu'});
    blogPost=new BlogPost({title:'little knowledge',content:'this is fantastic job what you are doing'});
   user.blogPost.push(blogPost);
   Promise.all([user.save(),blogPost.save()]).then(()=>done());
  })

  it.only('should be remove user with blogpost',(done)=>{
    user.remove().then(()=>BlogPost.count())
    .then((user)=>{
      console.log(user);
      done();
    })
  })
})
