const express = require('express');
const router = express.Router();
const category = require('./category')
console.log('22222222222222');

router.use('/get', (req, res) => {
  res.send({msg: 'qwerty'});
})

router.use('/category', category);

module.exports = router;
