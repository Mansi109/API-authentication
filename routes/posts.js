const router = require('express').Router();
const verify = require('./privateRoutes');

router.get('/', verify, (req,res) => {
res.json({posts: {
  title: 'First post',
  description: 'Random data'                  }
          });
  // res.send(req.user);
  // User.findbyOne({_id: req.user});
      });

module.exports = router;
