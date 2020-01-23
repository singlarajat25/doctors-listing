const express = require('express');
const router = express.Router();
//Import your controller here for access every api
const { insertNewCategory, allCategoryList } = require('../controllers/category')
// import all api names from constant files
const { API_CATEGORY } = require('../config/constant'); 
console.log('33333333333333')
router.post(API_CATEGORY, insertNewCategory); // POST data to add category
router.get(API_CATEGORY, allCategoryList); // GET list of all categorys

module.exports = router;