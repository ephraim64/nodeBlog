const express = require('express');
const router = express.Router();
const post = require('../model/post')


// GET 
// HOME
// Routes
router.get('/', async (req, res)=> {
   
   try {
      const locals = {
         title: 'aeTech Blog',
         description: 'aeTech hub blog.'
      }

      // this is the pagination code.
      // let perPage = 5;
      // let page = req.query.page || 1;

      // const data = await post.aggregate([{ $sort: {createdAt: -1}}])
      // .skip(perPage * page - perPage)
      // .limit(perPage)
      // .exec();

      // const count = await post.count();
      // const nextPage = parseInt(page) + 1;
      // const hasNextPage = nextPage <= Math.ceil(count/perPage);

      const data = await post.find()
      res.render('index', 
         {  
            locals,
            data,
            // current: page,
            // nextPage: hasNextPage ? nextPage : null
         });
   } catch (error) {
      console.log(error)
   }

});

// GET /
// post :id 

router.get('/post/:id', async (req, res)=> {
   try {
      let slug = req.params.id;

      const data = await post.findById({ _id: slug })
      const locals = {
         title: data.title,
         description: 'aeTech hub blog.'
      }

      res.render('post', 
         {  
            locals,
            data,
         });
      
   } catch (error) {
      console.log(error);
   }
})










router.get('/about', (req, res)=> {
   res.render('about')
});


module.exports = router;








// we created this to get some data into the database 

// function insertPostData (){
//    post.insertMany([
//       {
//          title: 'Building a blog',
//          body: 'this is our first blog page'
//       },
//       {
//          title: 'How to create a romote platform',
//          body: 'this is our first blog page'
//       },
//       {
//          title: 'The tech market',
//          body: 'this is our first blog page'
//       },
//    ])
// }
// insertPostData();