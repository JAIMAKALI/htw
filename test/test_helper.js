// var mongoose =require('mongoose');
//
// mongoose.Promise=global.Promise;
//
// mongoose.connect('mongodb://localhost:27017/Uplodar',()=>{
//   console.log('data base is connected');
// });

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost/Uplodar');
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error) => {
      console.warn('Warning', error);
    });
});

beforeEach((done) => {
  const { users, comments, blogposts } = mongoose.connection.collections;
  users.drop(() => {
    comments.drop(() => {
      blogposts.drop(() => {
        done();
      });
    });
  });
});
