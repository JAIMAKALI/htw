var assert=require('assert');
var {BlogPost}=require('./../models/blogPost');
var {Comments}=require('./../models/comments');
var {User}=require('./../models/user');

describe('should be blogpost',()=>{
let user,blogPost,comments;
beforeEach((done)=>{
   user=new User({name:'manisha'});
   blogPost=new BlogPost({title:'what a javascript',content:'yup this is great'});
   comments=new Comments({comment:'this is first in programming language'});

user.blogPost.push(blogPost);
blogPost.comments.push(comments);
comments.author=user;
Promise.all([user.save(),blogPost.save(),comments.save()]).then(()=>done());
})

it('should be a blogpost',(done)=>{
  User.findOne({name:'manisha'}).populate('blogPost').then((user)=>{
    console.log(user);
    done();
  })
});

it('should be find all nested model into json',(done)=>{
  User.find({name:'manisha'}).populate({
    path:'blogPost',
    populate:{
      path:'comments',
      model:'comment',
      populate:{
        path:'author',
        model:'user'
      }
    }
  }).then((user)=>{
    console.log(user[0].blogPost);
    done();
  })
})

})
