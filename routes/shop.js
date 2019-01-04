const path = require('path');
const express = require('express');
const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/',(req,res,next) =>{
    const products = adminData.products;
    console.log(products);
    
    res.render('shop', {prods: products, pageTitle:'Shop Page', path: '/'});
});

module.exports = router;